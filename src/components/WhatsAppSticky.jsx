import { useState, useEffect } from 'react'

export default function WhatsAppSticky({ wa, hidden }) {
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.getElementById('home')
      setPastHero(heroEl ? window.scrollY >= heroEl.offsetTop + heroEl.offsetHeight : false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 bg-navy px-6 py-3 shadow-lg shadow-black/20 transition-transform duration-400 ${pastHero && !hidden ? 'translate-y-0' : 'translate-y-full'} md:hidden`}>
      <a
        href={wa("Hi Golden Furniture, I'm interested in your solutions.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-3.5 rounded-full bg-gold text-navy text-sm font-semibold uppercase tracking-[1px]"
      >
        Enquire Now
      </a>
    </div>
  )
}
