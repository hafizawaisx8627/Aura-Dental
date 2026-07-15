import { useState, useEffect } from 'react';
import {
  Sparkles, Calendar, ArrowRight, ChevronDown, Menu, X,
  Smile, Shield, Heart, Star, Phone, MapPin, Clock,
  CheckCircle2
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Booking Form State
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [treatmentType, setTreatmentType] = useState('');
  const [notes, setNotes] = useState('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const handleReset = () => {
    setBookingSuccess(false);
    setClientName('');
    setClientEmail('');
    setBookingDate('');
    setTreatmentType('');
    setNotes('');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection Observer for Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.01 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Dynamic 3D Spatial Mouse Tilt Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    card.classList.remove('resetting');
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const card = e.currentTarget;
    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    card.classList.add('resetting');
  };

  return (
    <div className="app-container">
      {/* ======== AMBIENT GLOW BLOBS ======== */}
      <div className="ambient-blob blob-cyan" />
      <div className="ambient-blob blob-purple" />
      <div className="ambient-blob blob-blue" />
      <div className="ambient-blob blob-team" />
      <div className="ambient-blob blob-booking" />

      {/* ======== FLOATING GLASS ACCENTS (SPATIAL UI) ======== */}
      <div className="floating-accent orb-1" />
      <div className="floating-accent orb-2" />
      <div className="floating-accent orb-3" />

      {/* ======== NAVBAR ======== */}
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          {/* Logo */}
          <a href="#" className="logo-container">
            <div className="logo-icon-wrapper">
              <Smile size={24} strokeWidth={2.5} />
            </div>
            <div className="logo-text-stacked">
              <span className="logo-title">Aura Dental</span>
              <span className="logo-subtitle">PREMIUM CLINIC</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="nav-links">
            <a href="#services" className="nav-link">
              Services <ChevronDown size={14} className="chevron-icon" />
            </a>
            <a href="#about" className="nav-link">About</a>
            <a href="#team" className="nav-link">Our Doctors</a>
            <a href="#testimonials" className="nav-link">Reviews</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Right Action / Mobile Toggle */}
          <div className="navbar-actions">
            <a href="#book" className="btn btn-accent nav-cta">
              <Calendar size={16} />
              Book Now
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-inner">
            <a href="#services" className="mdl" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="mdl" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#team" className="mdl" onClick={() => setMobileMenuOpen(false)}>Our Doctors</a>
            <a href="#testimonials" className="mdl" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="mdl" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#book" className="btn btn-accent mdl-cta" onClick={() => setMobileMenuOpen(false)}>
              <Calendar size={16} /> Book Now
            </a>
          </div>
        </div>
      </header>

      {/* ======== HERO SECTION ======== */}
      <section className="hero">
        {/* Full-bleed dental banner */}
        <div className="hero-banner">
          <img
            src="/dental-hero.png"
            alt="Beautiful confident smile – Aura Dental Clinic"
            className="hero-banner-img"
          />
          <div className="hero-banner-overlay" />
        </div>

        {/* Floating glass content */}
        <div className="hero-inner">
          <div className="hero-glass-card">
            <div className="badge glass-badge">
              <Sparkles size={14} />
              <span>REDEFINING DENTAL CARE</span>
            </div>

            <h1 className="hero-headline">
              Your Perfect Smile<br />
              Starts <span className="gradient-text">Here.</span>
            </h1>

            <p className="hero-sub">
              State-of-the-art cosmetic dentistry, invisible aligners, and pain-free
              laser treatments — all in a calming, luxury environment designed around
              your comfort.
            </p>

            <div className="hero-actions">
              <a href="#book" className="btn btn-accent btn-lg">
                Book Appointment <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn btn-glass btn-lg">
                Our Services
              </a>
            </div>

            {/* Trust strip */}
            <div className="trust-strip">
              <div className="trust-item">
                <Star size={16} className="trust-star" />
                <span><strong>4.9</strong> from 2,400+ reviews</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-check" />
                <span>15+ Years Experience</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <Shield size={16} className="trust-check" />
                <span>ADA Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== BENTO GRID SERVICES & DETAILS (id="services" and id="testimonials") ======== */}
      <section className="services" id="services">
        <div id="testimonials" style={{ position: 'absolute', top: '-100px' }} />
        <div className="section-header reveal">
          <span className="glass-badge-sm"><Sparkles size={12} /> SPATIAL BENTO GRID</span>
          <h2 className="section-title">Explore Our Clinic</h2>
          <p className="section-sub">
            A modular glimpse into our premium treatment facilities, patient statistics, and smile-makeover results.
          </p>
        </div>

        <div className="bento-wrapper">
          <div className="bento-grid">
            {/* Bento Card 1: Cosmetic Dentistry (Wide & Deep) */}
            <div 
              className="bento-card bento-col-8 bento-row-2 glass-card reveal"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-icon cyan">
                <Sparkles size={26} />
              </div>
              <h3 className="card-title">Cosmetic Dentistry</h3>
              <p className="card-desc">
                Porcelain veneers, professional whitening, and custom smile makeovers tailored to bring out your most radiant self. We combine advanced optical imaging with artisan dental craftsmanship to create natural, lifelike tooth enhancements.
              </p>
              <a href="#" className="card-link">
                Learn more <ArrowRight size={14} />
              </a>
            </div>

            {/* Bento Card 2: Quick Stat Block (Liquid Glass Card) */}
            <div 
              className="bento-card bento-stat glass-card liquid-card reveal delay-100"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <span className="stat-num">4.9★</span>
              <span className="stat-label">Google Rating</span>
            </div>

            {/* Bento Card 3: Invisible Aligners (Deep) */}
            <div 
              className="bento-card bento-row-2 glass-card reveal delay-200"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-icon purple">
                <Shield size={26} />
              </div>
              <h3 className="card-title">Invisible Aligners</h3>
              <p className="card-desc">
                Computer-mapped clear aligners that gently straighten teeth with virtually invisible, highly comfortable medical polymer technology. Complete custom diagnostics included.
              </p>
              <a href="#" className="card-link">
                Learn more <ArrowRight size={14} />
              </a>
            </div>

            {/* Bento Card 4: Laser Treatments */}
            <div 
              className="bento-card glass-card reveal delay-300"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-icon rose">
                <Heart size={26} />
              </div>
              <h3 className="card-title">Laser Treatment</h3>
              <p className="card-desc">
                Ultra-precise, pain-free micro-surgical laser cleaning.
              </p>
              <a href="#" className="card-link">
                Learn more <ArrowRight size={14} />
              </a>
            </div>

            {/* Bento Card 5: Quick Stat Block (Liquid Glass Card) */}
            <div 
              className="bento-card bento-stat glass-card liquid-card reveal delay-400"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <span className="stat-num">15k+</span>
              <span className="stat-label">Happy Smiles Created</span>
            </div>

            {/* Bento Card 6: Testimonial (Wide) */}
            <div 
              className="bento-card bento-col-8 bento-testimonial glass-card reveal delay-500"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <p className="testimonial-quote">
                "The experience at Aura Dental was entirely unlike standard clinics. The environment felt more like a luxury spa, and the pain-free laser technology changed how I view dental care forever."
              </p>
              <div className="testimonial-author">
                — Sarah Jenkins, Cosmetic Patient
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== ABOUT SECTION (id="about") ======== */}
      <section className="about-section" id="about">
        <div className="about-card glass-card reveal">
          <div className="about-image-wrapper">
            <img 
              src="/dental-hero.png" 
              alt="State of the art surgery room" 
              className="about-img"
            />
          </div>
          <div className="about-content">
            <span className="glass-badge-sm"><Smile size={12} /> CLINIC PHILOSOPHY</span>
            <h2 className="about-headline">We Believe in Pain-Free, Elegant Dental Journeys</h2>
            <p className="about-text">
              At Aura Dental Clinic, we have redesigned the classic clinical layout. We use spatial acoustics, aromatherapy, and modern glass designs to help ease anxiety.
            </p>
            <p className="about-text">
              Combining world-class cosmetic dentists with modern pain-free laser tools, we build healthy, radiant smiles in a comfortable, luxurious atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* ======== TEAM SECTION (id="team") ======== */}
      <section className="team-section" id="team">
        <div className="section-header reveal">
          <span className="glass-badge-sm"><Shield size={12} /> SPECIALISTS</span>
          <h2 className="section-title">Meet Our Medical Team</h2>
          <p className="section-sub">
            Highly trained cosmetic dentists and orthodontists dedicated to crafting healthy smiles.
          </p>
        </div>

        <div className="team-grid">
          {[
            {
              name: 'Dr. Evelyn Carter',
              title: 'Cosmetic Dentist & Founder',
              bio: 'Over 12 years of specialized smile design experience in Beverly Hills and London, crafting natural porcelain transformations.'
            },
            {
              name: 'Dr. Marcus Sterling',
              title: 'Orthodontic Director',
              bio: 'Pioneer in computer-mapped clear aligners and non-invasive corrective dental therapeutics.'
            },
            {
              name: 'Dr. Aria Vance',
              title: 'Laser Dentistry Specialist',
              bio: 'Board-certified clinical researcher specializing in pain-free micro-surgical laser gum designs.'
            }
          ].map((doc, idx) => (
            <div className={`flip-card-container reveal delay-${(idx + 1) * 100}`} key={idx}>
              <div className="flip-card-inner">
                {/* Front Face */}
                <div className="flip-card-front">
                  <div className="doctor-avatar">
                    <Smile size={36} />
                  </div>
                  <h3 className="doctor-name">{doc.name}</h3>
                  <span className="doctor-title">{doc.title}</span>
                  <span className="card-link" style={{ marginTop: '1rem', fontSize: '0.8rem' }}>Hover to view bio</span>
                </div>
                {/* Back Face */}
                <div className="flip-card-back">
                  <h3 className="doctor-name">{doc.name}</h3>
                  <span className="doctor-title" style={{ marginBottom: '1.25rem' }}>{doc.title}</span>
                  <p className="doctor-bio">{doc.bio}</p>
                  <a href="#book" className="btn btn-accent" style={{ marginTop: '1.5rem', padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======== BOOKING & CONTACT SECTION (id="contact" and id="book") ======== */}
      <section className="booking-section" id="contact">
        <div id="book" style={{ position: 'absolute', top: '-100px' }} />
        <div className="section-header reveal">
          <span className="glass-badge-sm"><Calendar size={12} /> RESERVATIONS</span>
          <h2 className="section-title">Schedule An Appointment</h2>
          <p className="section-sub">
            Request a personalized diagnostics session or free cosmetic consultation.
          </p>
        </div>

        <div className="booking-container glass-card reveal">
          {bookingSuccess ? (
            <div className="booking-success-message" style={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <div className="success-icon-wrapper" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(16, 185, 129, 0.25)', margin: '0 auto' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 className="success-title" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--text-white)', margin: 0 }}>Request Confirmed!</h3>
              <p className="success-text" style={{ fontSize: '1.05rem', color: 'var(--text-light)', lineHeight: '1.6', maxWidth: '500px', margin: 0 }}>
                Thank you, <strong>{clientName}</strong>! Your request for a <strong>{treatmentType}</strong> consultation on <strong>{bookingDate}</strong> has been successfully received.
              </p>
              <p className="success-subtext" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                Our dental concierge team will contact you at <strong>{clientEmail}</strong> within 2 hours to confirm your final time slot.
              </p>
              <button onClick={handleReset} className="btn btn-accent btn-lg" style={{ marginTop: '1rem' }}>
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleBookingSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. John Doe"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="e.g. john@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Treatment Type</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Cosmetic, Aligners"
                    value={treatmentType}
                    onChange={(e) => setTreatmentType(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message / Notes</label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe your dental goals or notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-accent btn-lg" style={{ marginTop: '0.75rem' }}>
                Confirm Consultation Request <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ======== INFO BAR ======== */}
      <section className="info-bar">
        <div className="info-bar-inner">
          <div className="info-item glass-card-sm reveal delay-100">
            <Phone size={20} className="info-icon" />
            <div>
              <span className="info-label">Call Us</span>
              <span className="info-value">(555) 123-4567</span>
            </div>
          </div>
          <div className="info-item glass-card-sm reveal delay-200">
            <MapPin size={20} className="info-icon" />
            <div>
              <span className="info-label">Visit Us</span>
              <span className="info-value">123 Smile Ave, Suite 200</span>
            </div>
          </div>
          <div className="info-item glass-card-sm reveal delay-300">
            <Clock size={20} className="info-icon" />
            <div>
              <span className="info-label">Open Hours</span>
              <span className="info-value">Mon — Sat · 9AM – 7PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======== CTA BANNER ======== */}
      <section className="cta-section">
        <div className="cta-inner glass-card-lg reveal">
          <h2 className="cta-title">Ready for Your Best Smile?</h2>
          <p className="cta-sub">
            Join thousands of happy patients. Book a free consultation today and let us
            craft a personalised treatment plan for you.
          </p>
          <a href="#book" className="btn btn-accent btn-lg">
            Schedule Free Consultation <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo-icon-wrapper">
                <Smile size={22} strokeWidth={2.2} />
              </div>
              <div className="logo-text-stacked">
                <span className="logo-title">Aura Dental</span>
                <span className="logo-subtitle">PREMIUM CLINIC</span>
              </div>
            </div>
            <p className="footer-tagline">Where smiles meet science.</p>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Aura Dental Clinic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
