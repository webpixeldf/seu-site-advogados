interface SectionTitleProps {
  title: string
  subtitle?: string
  light?: boolean
  centered?: boolean
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold font-lexend mb-4 ${
          light ? 'text-white' : 'text-[#162a2a]'
        }`}
      >
        {title}
      </h2>

      {/* Gold decorative line */}
      <div
        className={`flex items-center gap-2 mb-6 ${
          centered ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="block w-8 h-1 bg-[#b58c61] rounded-full" />
        <span className="block w-16 h-1 bg-[#b58c61] rounded-full" />
        <span className="block w-8 h-1 bg-[#b58c61] rounded-full" />
      </div>

      {subtitle && (
        <p
          className={`text-base md:text-lg font-lexend max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
