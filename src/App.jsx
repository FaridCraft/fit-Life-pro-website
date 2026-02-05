import React, { useState, useEffect } from 'react';
import './App.css';

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Programs />
      <WhyChooseUs />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

// ============================================
// NAVBAR COMPONENT
// ============================================
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <span className="logo-icon">💪</span>
          <span className="logo-text">FitLife Pro</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="navbar-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Join Button */}
        <a href="#pricing" className="navbar-btn">
          Join Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="#pricing" className="mobile-join-btn">
          Join Now
        </a>
      </div>
    </nav>
  );
}

// ============================================
// HERO SECTION COMPONENT
// ============================================
function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <span className="hero-badge">🏆 #1 Rated Fitness Platform</span>
        
        <h1 className="hero-title">
          Transform Your Body,
          <span className="hero-title-highlight"> Elevate Your Life</span>
        </h1>
        
        <p className="hero-subtitle">
          Join thousands of members who have achieved their fitness goals 
          with our world-class trainers, personalized programs, and 
          supportive community.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <a href="#pricing" className="btn btn-primary">
            <span>Join Now</span>
            <span className="btn-arrow">→</span>
          </a>
          <a href="#programs" className="btn btn-secondary">
            <span className="play-icon">▶</span>
            <span>View Programs</span>
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Active Members</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Expert Trainers</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">100+</span>
            <span className="stat-label">Fitness Programs</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

// ============================================
// PROGRAMS SECTION COMPONENT
// ============================================
function Programs() {
  // Program data
  const programs = [
    {
      id: 1,
      icon: '🏋️',
      title: 'Strength Training',
      description: 'Build muscle mass and increase your overall strength with our comprehensive weight training programs.',
      features: ['Free Weights', 'Machines', 'Personal Coaching'],
      color: '#ff6b35',
    },
    {
      id: 2,
      icon: '🏃',
      title: 'Cardio Fitness',
      description: 'Boost your endurance and burn calories with high-energy cardio workouts designed for all levels.',
      features: ['Treadmills', 'Cycling', 'Swimming'],
      color: '#4ecdc4',
    },
    {
      id: 3,
      icon: '🧘',
      title: 'Yoga & Flexibility',
      description: 'Improve flexibility, balance, and mental wellness through our peaceful yoga and stretching sessions.',
      features: ['Vinyasa', 'Hatha', 'Meditation'],
      color: '#a855f7',
    },
    {
      id: 4,
      icon: '⚡',
      title: 'HIIT Workouts',
      description: 'Maximize calorie burn with intense interval training that delivers results in less time.',
      features: ['Fat Burning', 'Full Body', 'Quick Sessions'],
      color: '#f43f5e',
    },
  ];

  return (
    <section id="programs" className="programs">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Our Programs</span>
          <h2 className="section-title">
            Choose Your <span className="text-gradient">Perfect Program</span>
          </h2>
          <p className="section-subtitle">
            From strength training to yoga, we offer diverse programs 
            tailored to help you reach your unique fitness goals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Program Card Component
function ProgramCard({ program }) {
  return (
    <div className="program-card">
      <div 
        className="program-icon" 
        style={{ background: `${program.color}20` }}
      >
        <span>{program.icon}</span>
      </div>
      
      <h3 className="program-title">{program.title}</h3>
      <p className="program-description">{program.description}</p>
      
      <ul className="program-features">
        {program.features.map((feature, index) => (
          <li key={index}>
            <span className="check-icon" style={{ color: program.color }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <a 
        href="#pricing" 
        className="program-link"
        style={{ color: program.color }}
      >
        Learn More <span>→</span>
      </a>
    </div>
  );
}

// ============================================
// WHY CHOOSE US SECTION
// ============================================
function WhyChooseUs() {
  // Benefits data
  const benefits = [
    {
      icon: '👨‍🏫',
      title: 'Certified Trainers',
      description: 'All our trainers are certified professionals with years of experience.',
    },
    {
      icon: '📅',
      title: 'Flexible Plans',
      description: 'Choose from various membership options that fit your schedule and budget.',
    },
    {
      icon: '💻',
      title: 'Online Coaching',
      description: 'Access workouts and coaching from anywhere with our mobile app.',
    },
    {
      icon: '🍎',
      title: 'Nutrition Support',
      description: 'Get personalized meal plans and nutrition guidance from our experts.',
    },
    {
      icon: '🤝',
      title: 'Supportive Community',
      description: 'Join a motivating community that helps you stay accountable.',
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with detailed analytics and insights.',
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Why FitLife Pro</span>
          <h2 className="section-title">
            Why Members <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="section-subtitle">
            We provide everything you need to achieve your fitness goals 
            in a supportive and motivating environment.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TRAINERS SECTION COMPONENT
// ============================================
function Trainers() {
  // Trainers data
  const trainers = [
    {
      id: 1,
      name: 'Marcus Johnson',
      specialty: 'Strength & Conditioning',
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop',
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      id: 2,
      name: 'Sarah Williams',
      specialty: 'Yoga & Meditation',
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop',
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      id: 3,
      name: 'David Chen',
      specialty: 'HIIT & CrossFit',
      experience: '7+ years',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      specialty: 'Nutrition & Wellness',
      experience: '9+ years',
      image: 'https://www.eatright.org/-/media/images/eatright-landing-pages/healthfulhabitslp_804x482.jpg?as=0&w=967&rev=6c6401788ae24b1f8866b3b8fec8f501&hash=2450683DD76F6AC832E9FF279D280BB1',
      social: { instagram: '#', twitter: '#', linkedin: '#' },
    },
  ];

  return (
    <section id="trainers" className="trainers">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Expert Team</span>
          <h2 className="section-title">
            Meet Our <span className="text-gradient">Expert Trainers</span>
          </h2>
          <p className="section-subtitle">
            Our certified professionals are dedicated to helping you 
            achieve your fitness goals with personalized guidance.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Trainer Card Component
function TrainerCard({ trainer }) {
  return (
    <div className="trainer-card">
      {/* Image Container */}
      <div className="trainer-image-container">
        <img 
          src={trainer.image} 
          alt={trainer.name} 
          className="trainer-image"
        />
        {/* <div className="trainer-overlay">
          <div className="trainer-social">
            <a href={trainer.social.instagram} className="social-link">📷</a>
            <a href={trainer.social.twitter} className="social-link">🐦</a>
            <a href={trainer.social.linkedin} className="social-link">💼</a>
          </div>
        </div> */}
      </div>

      {/* Trainer Info */}
      <div className="trainer-info">
        <h3 className="trainer-name">{trainer.name}</h3>
        <p className="trainer-specialty">{trainer.specialty}</p>
        <span className="trainer-experience">{trainer.experience} Experience</span>
      </div>
    </div>
  );
}

// ============================================
// PRICING SECTION COMPONENT
// ============================================
function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Pricing plans data
  const plans = [
    {
      id: 1,
      name: 'Basic',
      description: 'Perfect for beginners',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Access to gym equipment',
        'Locker room access',
        '2 group classes/week',
        'Basic fitness assessment',
        'Mobile app access',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Pro',
      description: 'Most popular choice',
      monthlyPrice: 59,
      yearlyPrice: 590,
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        '2 personal training sessions/month',
        'Nutrition consultation',
        'Progress tracking',
        'Sauna & spa access',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Elite',
      description: 'For serious athletes',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Everything in Pro',
        'Unlimited personal training',
        'Custom meal plans',
        'Priority booking',
        '24/7 gym access',
        'Guest passes (2/month)',
        'Premium supplements',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Pricing Plans</span>
          <h2 className="section-title">
            Simple & <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the plan that fits your fitness journey. 
            No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="billing-toggle">
          <span className={billingCycle === 'monthly' ? 'active' : ''}>
            Monthly
          </span>
          <button 
            className="toggle-switch"
            onClick={() => setBillingCycle(
              billingCycle === 'monthly' ? 'yearly' : 'monthly'
            )}
          >
            <div className={`toggle-slider ${billingCycle === 'yearly' ? 'yearly' : ''}`}></div>
          </button>
          <span className={billingCycle === 'yearly' ? 'active' : ''}>
            Yearly
            <span className="save-badge">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard 
              key={plan.id} 
              plan={plan} 
              billingCycle={billingCycle} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Card Component
function PricingCard({ plan, billingCycle }) {
  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  const period = billingCycle === 'monthly' ? '/month' : '/year';

  return (
    <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
      {/* Popular Badge */}
      {plan.popular && (
        <div className="popular-badge">Most Popular</div>
      )}

      {/* Plan Header */}
      <div className="pricing-header">
        <h3 className="plan-name">{plan.name}</h3>
        <p className="plan-description">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="pricing-amount">
        <span className="currency">$</span>
        <span className="price">{price}</span>
        <span className="period">{period}</span>
      </div>

      {/* Features */}
      <ul className="pricing-features">
        {plan.features.map((feature, index) => (
          <li key={index}>
            <span className="feature-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className={`pricing-btn ${plan.popular ? 'popular-btn' : ''}`}>
        Get Started
      </button>
    </div>
  );
}

// ============================================
// TESTIMONIALS SECTION COMPONENT
// ============================================
function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'Lost 30 lbs in 6 months',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: 'FitLife Pro completely transformed my life! The trainers are incredibly supportive, and the community keeps me motivated. I never thought I could achieve my fitness goals, but here I am!',
    },
    {
      id: 2,
      name: 'Michael Thompson',
      role: 'Gained 20 lbs muscle',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: 'The strength training program is world-class. Marcus helped me build a solid foundation and now I\'m stronger than ever. The personalized approach makes all the difference.',
    },
    {
      id: 3,
      name: 'Amanda Foster',
      role: 'Improved flexibility & wellness',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'The yoga classes have helped me manage stress and improve my overall well-being. Sarah is an amazing instructor who truly cares about her students\' progress.',
    },
    {
      id: 4,
      name: 'Robert Kim',
      role: 'Completed first marathon',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Thanks to the cardio program and the encouragement from my trainer, I completed my first marathon! The training plans are well-structured and achievable.',
    },
  ];

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="text-gradient">Members Say</span>
          </h2>
          <p className="section-subtitle">
            Real stories from real members who achieved their 
            fitness goals with FitLife Pro.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="testimonials-slider">
          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-card">
                  {/* Quote Icon */}
                  <div className="quote-icon">"</div>
                  
                  {/* Rating */}
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="testimonial-text">{testimonial.text}</p>

                  {/* Author */}
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION COMPONENT
// ============================================
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Contact Info */}
          <div className="contact-info">
            <span className="section-tag">Get in Touch</span>
            <h2 className="contact-title">
              Ready to Start Your 
              <span className="text-gradient"> Fitness Journey?</span>
            </h2>
            <p className="contact-subtitle">
              Have questions? We're here to help. Reach out to us and 
              one of our team members will get back to you shortly.
            </p>

            {/* Contact Details */}
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Fitness Street, New York, NY 10001</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@fitlifepro.com</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="opening-hours">
              <h4>Opening Hours</h4>
              <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 9:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness goals..."
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  const currentYear = new Date().getFullYear();

  // Footer links
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    programs: [
      { name: 'Strength Training', href: '#programs' },
      { name: 'Cardio Fitness', href: '#programs' },
      { name: 'Yoga Classes', href: '#programs' },
      { name: 'HIIT Workouts', href: '#programs' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-icon">💪</span>
              <span className="logo-text">FitLife Pro</span>
            </a>
            <p className="footer-description">
              Transform your body and mind with our world-class fitness 
              programs, expert trainers, and supportive community.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📺</a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Programs</h4>
              <ul>
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get fitness tips and exclusive offers in your inbox.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} FitLife Pro. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;