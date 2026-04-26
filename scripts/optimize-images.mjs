import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const IMAGES_DIR = './public/images'
const BACKUP_DIR = './public/images/_backup'
const TARGET_WIDTH = 1200

// Blog and content images that should be resized to 1200px width
// Skip: logos, favicons, portfolio thumbnails, small UI images
const SKIP_PATTERNS = [
  'favicon', 'logo', 'seu-site-advogados', 'branco',
]
const MIN_WIDTH_TO_RESIZE = 600 // Don't resize images smaller than 600px (thumbnails, icons)

async function optimizeImages() {
  const files = fs.readdirSync(IMAGES_DIR).filter(f => /\.(webp|png|jpg|jpeg)$/i.test(f))

  // Create backup directory
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true })
  }

  const results = { resized: [], skipped: [], errors: [] }

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file)

    // Skip patterns
    if (SKIP_PATTERNS.some(p => file.toLowerCase().includes(p))) {
      results.skipped.push({ file, reason: 'skip pattern' })
      continue
    }

    try {
      const meta = await sharp(filePath).metadata()

      // Skip small images (thumbnails, icons)
      if (meta.width < MIN_WIDTH_TO_RESIZE) {
        results.skipped.push({ file, reason: `too small (${meta.width}px)`, width: meta.width })
        continue
      }

      // Skip if already 1200px
      if (meta.width === TARGET_WIDTH) {
        results.skipped.push({ file, reason: 'already 1200px' })
        continue
      }

      // Backup original
      const backupPath = path.join(BACKUP_DIR, file)
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(filePath, backupPath)
      }

      // Resize to 1200px width, maintain aspect ratio, convert to WebP
      const outputPath = filePath.replace(/\.(webp|png|jpg|jpeg)$/i, '.webp')
      const originalSize = fs.statSync(filePath).size

      const tmpPath = path.join(IMAGES_DIR, '_tmp_' + file)
      await sharp(filePath)
        .resize(TARGET_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(tmpPath)

      // Replace original - try rename first, fallback to copy+delete
      try {
        fs.unlinkSync(outputPath)
        fs.renameSync(tmpPath, outputPath)
      } catch {
        try {
          fs.copyFileSync(tmpPath, outputPath)
          fs.unlinkSync(tmpPath)
        } catch (e2) {
          console.log(`  Warning: could not replace ${file}, optimized version at ${tmpPath}`)
        }
      }

      const newSize = fs.statSync(outputPath).size
      const newMeta = await sharp(outputPath).metadata()

      results.resized.push({
        file,
        oldWidth: meta.width,
        newWidth: newMeta.width,
        oldSize: Math.round(originalSize / 1024),
        newSize: Math.round(newSize / 1024),
        saved: Math.round((1 - newSize / originalSize) * 100),
      })

    } catch (err) {
      results.errors.push({ file, error: err.message })
    }
  }

  // Print summary
  console.log('\n=== IMAGE OPTIMIZATION RESULTS ===\n')

  console.log(`Resized: ${results.resized.length}`)
  for (const r of results.resized) {
    console.log(`  ${r.file}: ${r.oldWidth}px -> ${r.newWidth}px | ${r.oldSize}KB -> ${r.newSize}KB (${r.saved}% saved)`)
  }

  console.log(`\nSkipped: ${results.skipped.length}`)
  for (const s of results.skipped) {
    console.log(`  ${s.file}: ${s.reason}`)
  }

  if (results.errors.length > 0) {
    console.log(`\nErrors: ${results.errors.length}`)
    for (const e of results.errors) {
      console.log(`  ${e.file}: ${e.error}`)
    }
  }

  const totalOldKB = results.resized.reduce((sum, r) => sum + r.oldSize, 0)
  const totalNewKB = results.resized.reduce((sum, r) => sum + r.newSize, 0)
  console.log(`\nTotal saved: ${totalOldKB - totalNewKB}KB (${Math.round((1 - totalNewKB / totalOldKB) * 100)}%)`)
  console.log(`Backups saved to: ${BACKUP_DIR}`)
}

optimizeImages().catch(console.error)
