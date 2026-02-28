/* LEAP – Shared Components (navbar + footer + whatsapp) */

function renderNavbar(activePage) {
  const nav = `
  <nav id="navbar">
    <div class="container">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <img src="assets/Logo LEAP.png" style="height:42px" alt="LEAP Logo" />
          <div class="logo-text">
            <span class="logo-name">LEAP</span>
            <span class="logo-tagline">Business Solutions</span>
          </div>
        </a>
        <ul class="nav-links">
          <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
          <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About Us</a></li>
          <li class="nav-dropdown">
            <a href="services.html" ${activePage==='services'?'class="active"':''}>Services</a>
            <div class="dropdown-menu">
              <a href="payroll-compliance.html">Payroll Compliance</a>
              <a href="services.html#pf">PF – Provident Fund</a>
              <a href="services.html#esic">ESIC</a>
              <a href="services.html#pt">Professional Tax</a>
              <a href="services.html#lwf">Labour Welfare Fund</a>
              <a href="services.html#audit">Labour Law Audit</a>
            </div>
          </li>
          <li><a href="blog.html" ${activePage==='blog'?'class="active"':''}>Resources</a></li>
          <li><a href="faq.html" ${activePage==='faq'?'class="active"':''}>FAQs</a></li>
          <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
        </ul>
        <a href="tel:+917977213501" class="btn btn-primary nav-cta">📞 Free Audit Call</a>
        <div class="hamburger" id="hamburger">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="services.html">Services</a>
      <a href="payroll-compliance.html">Payroll Compliance</a>
      <a href="blog.html">Resources / Blog</a>
      <a href="faq.html">FAQs</a>
      <a href="contact.html">Contact</a>
      <a href="tel:+917977213501" style="color:#C8922A;font-weight:700;">📞 +91 79772 13501</a>
    </div>
  </nav>`;
  document.getElementById('navbar-placeholder').innerHTML = nav;
}

function renderFooter() {
  const footer = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-logo">
            <div class="logo-mark">L</div>
            <div class="logo-text">
              <span class="logo-name" style="color:#fff">LEAP</span>
              <span class="logo-tagline">Business Solutions</span>
            </div>
          </div>
          <p>Your trusted partner for comprehensive Labour Law Compliance in India. Based in Mumbai, serving businesses pan-India since 2021.</p>
          <div class="footer-social">
            <a class="social-btn" href="https://www.linkedin.com/company/leapbusiness" target="_blank" title="LinkedIn">in</a>
            <a class="social-btn" href="https://twitter.com/leapbusiness" target="_blank" title="Twitter">𝕏</a>
            <a class="social-btn" href="https://wa.me/917977213501" target="_blank" title="WhatsApp">💬</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <a href="services.html#pf">Provident Fund (PF)</a>
          <a href="services.html#esic">ESIC Compliance</a>
          <a href="services.html#pt">Professional Tax (PT)</a>
          <a href="services.html#lwf">Labour Welfare Fund</a>
          <a href="payroll-compliance.html">Payroll Management</a>
          <a href="services.html#audit">Labour Law Audit</a>
          <a href="services.html#posh">POSH Compliance</a>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <a href="index.html">Home</a>
          <a href="about.html">About Us</a>
          <a href="blog.html">Resources & Blog</a>
          <a href="faq.html">FAQs</a>
          <a href="contact.html">Contact Us</a>
        </div>
        <div class="footer-col">
          <h5>Contact Us</h5>
          <a href="mailto:support@leapbusiness.in">support@leapbusiness.in</a>
          <a href="tel:+917977213501">+91 79772 13501</a>
          <p style="font-size:14px;color:rgba(255,255,255,0.5);margin-top:10px;line-height:1.6;">Mumbai, Maharashtra<br>Pan-India Services</p>
          <div class="footer-newsletter" style="margin-top:20px">
            <h5>Get Compliance Updates</h5>
            <input type="email" placeholder="Your email address" />
            <button class="btn btn-primary" style="width:100%;justify-content:center;">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.08);margin-top:0">
      <div class="container">
        <div class="footer-bottom">
          <span>© 2024 LEAP Business Solutions. All rights reserved. | Mumbai, India</span>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
  document.getElementById('footer-placeholder').innerHTML = footer;
}

function renderWhatsApp() {
  const wa = `
  <a href="https://wa.me/917977213501?text=Hi%20LEAP%2C%20I%20need%20help%20with%20labour%20law%20compliance." 
     class="whatsapp-fab" target="_blank" title="Chat on WhatsApp">
    <span class="whatsapp-tooltip">Chat on WhatsApp</span>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.47 2.027 7.77L0 32l8.435-2.012A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.855l-.484-.287-5.008 1.195 1.22-4.876-.317-.501A13.26 13.26 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.943c-.399-.2-2.361-1.164-2.727-1.296-.366-.133-.633-.2-.9.2-.266.398-1.031 1.296-1.265 1.562-.233.266-.466.3-.865.1-.399-.2-1.685-.621-3.21-1.98-1.187-1.058-1.988-2.365-2.22-2.764-.234-.399-.025-.615.175-.813.18-.18.399-.466.598-.7.2-.232.266-.398.399-.664.133-.266.067-.499-.033-.7-.1-.2-.9-2.164-1.232-2.963-.324-.78-.654-.674-.9-.686-.233-.012-.499-.015-.765-.015-.266 0-.7.1-1.066.499-.366.399-1.397 1.364-1.397 3.328s1.43 3.86 1.63 4.127c.199.265 2.814 4.295 6.816 6.027.952.41 1.695.656 2.274.839.956.304 1.826.261 2.514.158.767-.115 2.361-.965 2.694-1.897.333-.931.333-1.73.233-1.897-.1-.166-.366-.266-.765-.465z"/>
    </svg>
  </a>`;
  document.getElementById('whatsapp-placeholder').innerHTML = wa;
}
