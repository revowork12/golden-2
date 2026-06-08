import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ wa, showSticky = true }) {
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const heroEl = document.getElementById('home')
      setPastHero(heroEl ? window.scrollY + window.innerHeight > heroEl.offsetTop + heroEl.offsetHeight + 50 : false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4 md:pt-5 transition-all duration-500 ${scrolled ? 'pt-2 md:pt-3' : ''}`}>
      <div className={`
        flex items-center justify-between w-full max-w-6xl px-6 h-[72px] rounded-full
        bg-navy/10 backdrop-blur-[36px] saturate-125 border border-white/10
        transition-all duration-500
        ${scrolled ? 'bg-navy/20 backdrop-blur-[44px] shadow-lg shadow-black/10' : ''}
      `}>
        <a href="#home" className="flex items-center gap-2">
          <span className="text-gold font-display text-2xl sm:text-3xl font-bold tracking-tight">Golden</span>
          <span className="text-white/80 font-body text-[10px] leading-[1.15] sm:text-xs font-light">Furniture &amp;<br />Appliances</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white text-xs font-medium uppercase tracking-[1.2px] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-gold after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={wa("Hi Golden Furniture, I'm interested in your solutions.")}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-navy text-[11px] font-semibold uppercase tracking-[1px] transition-all duration-500 hover:scale-[1.04] hover:bg-gold-light ${pastHero && showSticky ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
        >
          Enquire Now
          <span className="w-[18px] h-[18px] rounded-full bg-navy/15 flex items-center justify-center text-[10px] transition-transform duration-300 group-hover:translate-x-[2px]">⟶</span>
        </a>

        <div className="flex items-center gap-0.5 md:gap-2">
          <a
            href="https://www.instagram.com/goldenfurniture243/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:bg-gold/15 transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/share/r/1Kw2quHCvN/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:bg-gold/15 transition-all duration-300"
            aria-label="Facebook"
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@goldenfurnitureattingal876?si=oZPKyu9j9BiNRDiu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:bg-gold/15 transition-all duration-300"
            aria-label="YouTube"
          >
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <button
          className={`flex lg:hidden flex-col justify-center w-9 h-9 cursor-pointer relative z-50 ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-[1.5px] bg-white mx-auto transition-all duration-350 ${menuOpen ? 'translate-y-[4.5px] rotate-45' : 'mb-[3px]'}`} />
          <span className={`block w-5 h-[1.5px] bg-white mx-auto transition-all duration-350 ${menuOpen ? 'opacity-0 scale-x-0' : 'mb-[3px]'}`} />
          <span className={`block w-5 h-[1.5px] bg-white mx-auto transition-all duration-350 ${menuOpen ? '-translate-y-[4.5px] -rotate-45' : ''}`} />
        </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-40 bg-navy/96 backdrop-blur-[40px] flex flex-col items-center justify-center gap-12 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white cursor-pointer transition-colors hover:bg-white/20"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="text-white font-display text-3xl opacity-0 translate-y-6 transition-all duration-500"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: menuOpen ? `${100 + i * 50}ms` : '0ms',
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={wa("Hi Golden Furniture, I'm interested in your solutions.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-2.5 rounded-full bg-gold text-navy text-sm font-semibold uppercase tracking-[1px] opacity-0 translate-y-6 transition-all duration-500"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: menuOpen ? '350ms' : '0ms',
          }}
        >
          Enquire Now
        </a>
      </div>
    </header>
    </>
  )
}
