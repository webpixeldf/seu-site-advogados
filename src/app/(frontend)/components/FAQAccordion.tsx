'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  pergunta: string
  resposta: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-300 ${
              isOpen
                ? 'border-[#b58c61]/40 bg-white shadow-lg'
                : 'border-gray-200 bg-white hover:border-[#b58c61]/20'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left"
              aria-expanded={isOpen}
            >
              <h3
                className={`font-lexend font-semibold text-base pr-4 transition-colors ${
                  isOpen ? 'text-[#b58c61]' : 'text-[#162a2a]'
                }`}
              >
                {item.pergunta}
              </h3>
              <ChevronDown
                size={20}
                className={`shrink-0 text-[#b58c61] transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 pt-0">
                <div className="w-full h-px bg-gray-100 mb-4" />
                <p className="text-gray-600 font-lexend text-sm leading-relaxed">
                  {item.resposta}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
