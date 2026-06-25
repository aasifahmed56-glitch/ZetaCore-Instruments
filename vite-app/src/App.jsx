import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Add animation observer logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.category-card, .prod-card, .feat-item');
    animateElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `all 0.5s ease ${index % 4 * 0.1}s`;
      observer.observe(el);
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(`Hi Zetacore Team,\n\nWe came across your electrochemical products and would like to purchase them.\n\nCould you please share your product catalog and pricing details?\n\nThank you.`);

  return (
    <>
      {/* HEADER */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <img src="/assets/Logo Final.png" alt="Zeta Core Instruments Logo" />
          </div>
          
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>

          <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" className="active">Home</a>
            <a href="#products">Products <i className="fa-solid fa-chevron-down"></i></a>
            <a href="#applications">Applications <i className="fa-solid fa-chevron-down"></i></a>
            <a href="#resources">Resources <i className="fa-solid fa-chevron-down"></i></a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            
            <div className="mobile-nav-actions">
              <a href="#" className="btn btn-primary">Request Quotation</a>
            </div>
          </nav>
          
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Search"><i className="fa-solid fa-magnifying-glass"></i></button>
            <button className="icon-btn" aria-label="Language"><i className="fa-solid fa-globe"></i></button>
            <a href="#" className="btn btn-primary">Request Quotation</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero" style={{ backgroundImage: "url('/assets/Banner.webp')" }}>
        <div className="hero-content">
          <div className="hero-tags">
            <span>RESEARCH GRADE</span> • <span>INDUSTRIAL QUALITY</span> • <span>GLOBAL SHIPPING</span>
          </div>
          <h1>Powering The Future of<br /><span>Electrochemical Innovation</span></h1>
          <p>Advanced Fuel Cell Components, Electrolyzer Systems,<br className="desktop-br"/>Battery Research Materials and Electrochemical Solutions<br className="desktop-br"/>for Researchers, Industries and Innovators Worldwide.</p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary btn-lg">Explore Products <i className="fa-solid fa-arrow-right"></i></a>
            <a href="#" className="btn btn-outline btn-lg">Request Quotation <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <img src="/assets/icon-research.png" alt="Research Grade Components Icon" /> <span>Research Grade<br />Components</span>
            </div>
            <div className="feature-item">
              <img src="/assets/icon-industrial.png" alt="Industrial Quality Standards Icon" /> <span>Industrial Quality<br />Standards</span>
            </div>
            <div className="feature-item">
              <img src="/assets/icon-worldwide.png" alt="Worldwide Shipping Icon" /> <span>Worldwide<br />Shipping</span>
            </div>
            <div className="feature-item">
              <img src="/assets/icon-technical.png" alt="Technical Expert Support Icon" /> <span>Technical<br />Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="search-bar-section">
        <div className="search-bar-container">
          <span className="search-label">Search Products</span>
          <div className="search-input-wrapper">
            <input type="text" placeholder="Search by Nafion, MEA, Fuel Cell, Electrolyzer, Flow Battery, Electrode..." />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className="search-tags">
            <span>Nafion</span>
            <span>MEA</span>
            <span>Fuel Cell</span>
            <span>Electrolyzer</span>
            <span>Flow Battery</span>
            <span>Electrode</span>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section id="products" className="categories-section">
        <h2>Product Categories</h2>
        <div className="categories-grid">
          {[
            { img: '1.png', title: 'Electrolyzer\nTechnology' },
            { img: '2.png', title: 'Electrolyzer\nTechnology' },
            { img: '3.png', title: 'Battery\nTechnology' },
            { img: '4.png', title: 'Electrochemical\nAccessories' },
            { img: '5.png', title: 'Materials &\nComponents' },
            { img: '6.png', title: 'Electrochemical\nCells' },
            { img: '7.png', title: 'Liquid Handling\nSystems' },
            { img: '8.png', title: 'Research\nInstruments' }
          ].map((cat, i) => (
            <a href="#" className="category-card" style={{ '--bg-image': `url('/assets/new_product/${cat.img}')` }} key={i}>
              <div className="cat-info">
                <h3>{cat.title.split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br/></React.Fragment>)}</h3>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US & INDUSTRIES */}
      <section id="applications" className="info-split-section">
        <div className="info-container">
          <div className="why-choose-us">
            <h2>Why Choose Zeta Core Instruments?</h2>
            <div className="features-grid">
              {[
                { icon: 'fa-flask', text: 'Research Grade\nComponents' },
                { icon: 'fa-certificate', text: 'Industrial Quality\nStandards' },
                { icon: 'fa-globe', text: 'Worldwide\nShipping' },
                { icon: 'fa-building-columns', text: 'University & R&D\nLab Support' },
                { icon: 'fa-wrench', text: 'Custom Product\nDevelopment' },
                { icon: 'fa-cogs', text: 'OEM Manufacturing\nSupport' },
                { icon: 'fa-magnifying-glass-chart', text: 'Technical\nConsultation' },
                { icon: 'fa-truck-fast', text: 'Fast Global\nDelivery' }
              ].map((feat, i) => (
                <div className="feat-item" key={i}>
                  <i className={`fa-solid ${feat.icon}`}></i> 
                  <span>{feat.text.split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br/></React.Fragment>)}</span>
                </div>
              ))}
            </div>
            <a href="#" className="btn btn-primary mt-4">Learn More About Us <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          
          <div className="industries-serve">
            <h2>Industries We Serve</h2>
            <div className="industries-grid">
              {[
                { img: '8.jpeg', text: 'Hydrogen\nTechnologies' },
                { img: '2.jpeg', text: 'Fuel Cell\nResearch &\nDevelopment' },
                { img: '4.jpeg', text: 'Electrolyzer\nResearch &\nDevelopment' },
                { img: '7.jpeg', text: 'Battery\nResearch &\nDevelopment' },
                { img: '1.jpeg', text: 'Renewable\nEnergy Systems' },
                { img: '3.jpeg', text: 'Academic\nInstitutions' },
                { img: '5.jpeg', text: 'Government\nResearch\nLaboratories' },
                { img: '6.jpeg', text: 'Industrial\nResearch &\nDevelopment' }
              ].map((ind, i) => (
                <div className="ind-item" key={i}>
                  <div className="ind-icon">
                    <img src={`/assets/industries/${ind.img}`} alt={ind.text.replace(/\n/g, ' ')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <span>{ind.text.split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br/></React.Fragment>)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {[
            { img: 'Titanium Mesh.png', title: 'Titanium\nMesh', desc: 'Corrosion Resistant High Conductivity Mesh' },
            { img: 'Ion Exchange Membrane.png', title: 'Ion Exchange\nMembrane', desc: 'High Performance Proton Exchange Membrane' },
            { img: 'Electrolyzer Fixture.png', title: 'PEM\nElectrolyzer Cell', desc: 'High Efficiency Hydrogen Production Cell' },
            { img: 'Fuel Cell Fixture.png', title: 'Fuel Cell\nTest Fixture', desc: 'Single Cell Test Fixture (PEM / DMFC / AFC)' },
            { img: 'Vadium Flow Battery Cell.png', title: 'Vanadium Flow\nBattery Cell', desc: 'High Performance Flow Battery Cell' },
            { img: 'Graphite Bipolar Plate.png', title: 'Graphite\nBipolar Plate', desc: 'Corrosion Resistant High Conductivity Plate' },
            { img: 'Peristalic Pump.png', title: 'Peristaltic\nPump System', desc: 'Chemical Resistant Dosing Pump' },
            { img: 'Pt Counter Electrode.png', title: 'Pt Counter\nElectrode', desc: 'High Purity Platinum Counter Electrode' }
          ].map((prod, i) => (
            <div className="prod-card" key={i}>
              <div className="prod-img"><img src={`/assets/Featured Products/${prod.img}`} alt={prod.title.replace('\n', ' ')} /></div>
              <h3>{prod.title.split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br/></React.Fragment>)}</h3>
              <p>{prod.desc}</p>
              <a href="#" className="view-details">View Details <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL SHIPPING */}
      <section className="global-shipping-section">
        <div className="global-container">
          <div className="global-content">
            <span className="tag">Global Shipping</span>
            <h2>Serving Researchers<br /><span>Across The Globe</span></h2>
            <p>We supply high-quality electrochemical products to universities,<br className="desktop-br"/>research laboratories, startups, industries, and government<br className="desktop-br"/>organizations worldwide.</p>
            <div className="countries-grid">
              {['India', 'United States', 'Germany', 'United Kingdom', 'Japan', 'South Korea', 'Singapore', 'Australia', 'Canada', 'UAE'].map((country, i) => (
                <span key={i}><img src={`https://flagcdn.com/w20/${country === 'South Korea' ? 'kr' : country === 'United States' ? 'us' : country === 'United Kingdom' ? 'gb' : country === 'Japan' ? 'jp' : country === 'Germany' ? 'de' : country === 'India' ? 'in' : country === 'Singapore' ? 'sg' : country === 'Australia' ? 'au' : country === 'Canada' ? 'ca' : 'ae'}.png`} alt={country} /> {country}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="about-us-section">
        <div className="about-container">
          <div className="about-img">
            <img src="/assets/Buliding image.webp" alt="Zeta Core Building" />
          </div>
          <div className="about-content">
            <span className="tag">About Us</span>
            <h2>About <span>Zeta Core Instruments</span></h2>
            <p>Zeta Core Instruments is a scientific technology company specializing in electrochemical research products, fuel cell technology, electrolyzer systems, flow battery components, and advanced laboratory solutions.</p>
            <p>We support researchers, innovators, universities, and industries with reliable products and technical expertise to accelerate innovation in electrochemical science and clean energy technologies.</p>
            <div className="about-features">
              <div className="a-feat"><img src="/assets/about-icon-0.png" alt="Research Driven" className="a-feat-icon" /></div>
              <div className="a-feat"><img src="/assets/about-icon-1.png" alt="Global Presence" className="a-feat-icon" /></div>
              <div className="a-feat"><img src="/assets/about-icon-2.png" alt="Premium Quality" className="a-feat-icon" /></div>
              <div className="a-feat"><img src="/assets/about-icon-3.png" alt="Customer Focused" className="a-feat-icon" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/Logo Final.png" alt="Zeta Core Instruments" />
            <p>Advanced electrochemical solutions for fuel cells, electrolyzers, batteries and research. Powering innovation for a sustainable future.</p>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <p className="company-address" style={{ marginTop: '20px', color: 'var(--text-light)', fontSize: '14px' }}>
              <i className="fa-solid fa-location-dot" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
              Dhopas, Madurai, Tamilnadu - 625017
            </p>
          </div>
          <div className="footer-links">
            <h3>Products</h3>
            <ul>
              <li><a href="#">Fuel Cell Components</a></li>
              <li><a href="#">Electrolyzer Systems</a></li>
              <li><a href="#">Flow Battery Components</a></li>
              <li><a href="#">Nafion Membranes</a></li>
              <li><a href="#">Electrochemical Cells</a></li>
              <li><a href="#">Research Instruments</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Capabilities</a></li>
              <li><a href="#">Quality Assurance</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">News & Updates</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Technical Support</a></li>
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Product Guides</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Request Quotation</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li><i className="fa-regular fa-envelope"></i> <div><span>Email</span><br />zetacoreinstruments@gmail.com</div></li>
              <li><i className="fa-solid fa-phone"></i> <div><span>Phone</span><br />+91 744 832 8743</div></li>
              <li><i className="fa-brands fa-whatsapp"></i> <div><span>WhatsApp</span><br />+91 93421 56248</div></li>
              <li><i className="fa-solid fa-location-dot"></i> <div><span>Location</span><br />India | Global Shipping</div></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-trust">
          <div className="trust-item"><i className="fa-solid fa-globe"></i> Global Shipping</div>
          <div className="trust-item"><i className="fa-solid fa-shield-halved"></i> Secure Payments</div>
          <div className="trust-item"><i className="fa-solid fa-file-invoice-dollar"></i> GST Invoice</div>
          <div className="trust-item"><i className="fa-solid fa-headset"></i> Technical Consultation</div>
          <div className="trust-item"><i className="fa-solid fa-cogs"></i> Custom Development</div>
          <div className="trust-item"><i className="fa-solid fa-envelope-open-text"></i> Email & WhatsApp Support</div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Zeta Core Instruments. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
          </div>
          <a href="#" className="back-to-top" onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i></a>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a 
        href={`https://wa.me/919342156248?text=${whatsappMessage}`} 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}

export default App;
