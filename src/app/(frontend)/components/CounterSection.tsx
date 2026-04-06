'use client'
import { useState, useEffect, useRef } from 'react'

interface CounterItem {
  value: number
  suffix: string
  label: string
}

const counters: CounterItem[] = [
  { value: 3, suffix: 'K+', label: 'Sites Criados' },
  { value: 25, suffix: '+', label: 'Anos de Experiência' },
  { value: 3, suffix: 'K+', label: 'Clientes Satisfeitos' },
  { value: 5, suffix: 'K+', label: 'Projetos Entregues' },
]

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span className="text-4xl md:text-5xl font-bold text-[#b58c61] font-lexend">
      {count}
      {suffix}
    </span>
  )
}

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    const current = sectionRef.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#162a2a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {counters.map((counter, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter
                target={counter.value}
                suffix={counter.suffix}
                isVisible={isVisible}
              />
              <p className="text-gray-400 font-lexend text-sm mt-2">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
