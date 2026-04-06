import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  variant?: 'light' | 'dark'
}

export default function ServiceCard({
  icon,
  title,
  description,
  variant = 'light',
}: ServiceCardProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
        isDark
          ? 'bg-[#162a2a] border border-[#b58c61]/30 hover:border-[#b58c61] shadow-lg hover:shadow-2xl'
          : 'bg-white border border-gray-100 hover:border-[#b58c61]/30 shadow-lg hover:shadow-2xl'
      }`}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
          isDark
            ? 'bg-[#b58c61]/20 text-[#b58c61] group-hover:bg-[#b58c61] group-hover:text-white'
            : 'bg-[#162a2a]/10 text-[#162a2a] group-hover:bg-[#de7322] group-hover:text-white'
        }`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-bold font-lexend mb-3 transition-colors ${
          isDark
            ? 'text-white group-hover:text-[#b58c61]'
            : 'text-[#162a2a] group-hover:text-[#de7322]'
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm font-lexend leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-[#b58c61] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
    </div>
  )
}
