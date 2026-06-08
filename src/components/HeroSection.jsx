export default function HeroSection({ wa }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        poster="/video/hero-poster.webp"
        preload="metadata"
        muted
        loop
        playsinline
        autoPlay
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero-bg.webm" type="video/webm" />
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-[2px] font-medium mb-8 hero-reveal hero-delay-1">
          India's Trusted Institutional Furniture Partner
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.08] tracking-tight mb-6 hero-reveal hero-delay-2">
          Furniture for<br />
          <span className="text-gold">Learning Spaces</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed hero-reveal hero-delay-3">
          Premium, durable, ergonomic furniture solutions for schools, colleges, preschools, libraries, and offices — designed to inspire better learning.
        </p>
        <div className="flex flex-wrap gap-4 justify-center hero-reveal hero-delay-4">
          <a
            href={wa("Hi Golden Furniture, I'm interested in your institutional furniture solutions.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-8 !py-3.5 !text-sm"
          >
            Get a Free Consultation
            <span className="w-7 h-7 rounded-full bg-navy/15 flex items-center justify-center text-sm transition-transform duration-300 group-hover:translate-x-1">⟶</span>
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm uppercase tracking-wide transition-all duration-300 bg-white/10 backdrop-blur-[44px] saturate-150 shadow-lg shadow-white/5 hover:bg-gold hover:text-slate hover:border-gold hover:backdrop-blur-[44px]"
          >
            Explore Solutions
          </a>
        </div>
      </div>

    </section>
  )
}
