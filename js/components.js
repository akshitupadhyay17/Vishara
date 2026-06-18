/* ============================================
   SHARED COMPONENTS — Header & Footer Injection
   ============================================ */

/**
 * Determines the base path relative to the current page location.
 * Pages at root level use './', pages in subdirectories use '../'.
 */
function getBasePath() {
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  // If served from file or at root level
  const pathParts = window.location.pathname.split('/');
  const fileName = pathParts[pathParts.length - 1];

  // Check if we're in a subdirectory
  if (document.querySelector('meta[name="page-depth"]')) {
    const d = parseInt(document.querySelector('meta[name="page-depth"]').content, 10);
    return d === 0 ? './' : '../'.repeat(d);
  }

  return './';
}

/**
 * Injects the shared navigation header.
 */
function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const base = getBasePath();

  header.innerHTML = `
    <nav class="nav" id="mainNav">
      <div class="nav__inner">
        <a href="${base}index.html" class="nav__logo" id="navLogo">
          <div class="nav__logo-icon">V</div>
          <span>VISHARA</span>
        </a>

        <ul class="nav__menu" id="navMenu">
          <li class="nav__item">
            <a href="${base}index.html" class="nav__link">Home</a>
          </li>

          <!-- ===== IP SERVICES — Mega Dropdown ===== -->
          <li class="nav__item nav__item--has-dropdown nav__item--mega">
            <a href="#" class="nav__link">
              IP Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav__dropdown nav__mega">
              <div class="nav__mega-grid">
                <!-- Patent Column -->
                <div class="nav__mega-col">
                  <a href="${base}patent/index.html" class="nav__mega-heading">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>
                    Patent
                  </a>
                  <a href="${base}patent/search.html" class="nav__dropdown-link">Patent Analytics</a>
                  <a href="${base}patent/filing.html" class="nav__dropdown-link">Filing</a>
                  <a href="${base}patent/prosecution.html" class="nav__dropdown-link">Prosecution</a>
                  <a href="${base}patent/monetization.html" class="nav__dropdown-link">Monetization</a>
                  <a href="${base}patent/litigation.html" class="nav__dropdown-link">Litigation Support</a>
                </div>
                <!-- Trademark Column -->
                <div class="nav__mega-col">
                  <a href="${base}trademark/index.html" class="nav__mega-heading">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    Trademark
                  </a>
                  <a href="${base}trademark/services.html" class="nav__dropdown-link">Services</a>
                  <a href="${base}trademark/filing.html" class="nav__dropdown-link">Filing</a>
                  <a href="${base}trademark/prosecution.html" class="nav__dropdown-link">Prosecution</a>
                </div>
                <!-- Copyright Column -->
                <div class="nav__mega-col">
                  <a href="${base}copyright/index.html" class="nav__mega-heading">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    Copyright
                  </a>
                  <a href="${base}copyright/services.html" class="nav__dropdown-link">Services</a>
                  <a href="${base}copyright/filing.html" class="nav__dropdown-link">Filing</a>
                  <a href="${base}copyright/prosecution.html" class="nav__dropdown-link">Prosecution</a>
                </div>
                <!-- Design Column -->
                <div class="nav__mega-col">
                  <a href="${base}design/index.html" class="nav__mega-heading">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                    Design
                  </a>
                  <a href="${base}design/services.html" class="nav__dropdown-link">Services</a>
                  <a href="${base}design/filing.html" class="nav__dropdown-link">Filing</a>
                  <a href="${base}design/prosecution.html" class="nav__dropdown-link">Prosecution</a>
                </div>
              </div>
            </div>
          </li>

          <!-- ===== LEGAL ===== -->
          <li class="nav__item nav__item--has-dropdown">
            <a href="#" class="nav__link">
              Legal
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav__dropdown">
              <a href="${base}legal/nda-drafting.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                NDA Drafting
              </a>
              <a href="${base}legal/licensing-agreements.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Licensing Agreements
              </a>
              <a href="${base}legal/assignment-agreements.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
                Assignment Agreements
              </a>
              <a href="${base}legal/technology-transfer.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Technology Transfer
              </a>
              <a href="${base}legal/franchise-agreements.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Franchise Agreements
              </a>
              <a href="${base}legal/mou-drafting.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                MOU Drafting
              </a>
              <a href="${base}legal/service-agreements.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                Service Agreements
              </a>
              <a href="${base}legal/employment-ip-agreements.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Employment IP Agreements
              </a>
            </div>
          </li>

          <!-- ===== DIGITAL MARKETING ===== -->
          <li class="nav__item nav__item--has-dropdown">
            <a href="#" class="nav__link">
              Digital Marketing
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav__dropdown">
              <a href="${base}digital-marketing/website-development.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                Website Development
              </a>
              <a href="${base}digital-marketing/seo.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                SEO
              </a>
              <a href="${base}digital-marketing/ui-ux-design.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                UI/UX Design
              </a>
              <div class="nav__dropdown-divider"></div>
              <a href="${base}digital-marketing/social-media-marketing.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                Social Media Marketing
              </a>
              <a href="${base}digital-marketing/paid-ads.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Paid Ads
              </a>
            </div>
          </li>

          <!-- ===== RESOURCES ===== -->
          <li class="nav__item nav__item--has-dropdown">
            <a href="#" class="nav__link">
              Resources
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav__dropdown">
              <a href="${base}resources/blogs.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                Blogs
              </a>
              <a href="${base}resources/whitepapers.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                Whitepapers
              </a>
              <a href="${base}resources/patent-news.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                Patent News
              </a>
              <a href="${base}resources/case-studies.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                Case Studies
              </a>
              <a href="${base}resources/faqs.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                FAQs
              </a>
            </div>
          </li>

          <li class="nav__item">
            <a href="${base}index.html#why-us" class="nav__link">About</a>
          </li>

          <li class="nav__item">
            <a href="${base}index.html#contact" class="nav__link">Contact</a>
          </li>
        </ul>

        <div class="nav__actions">
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
            <svg class="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg class="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <a href="${base}index.html#contact" class="btn btn--primary btn--sm nav__cta">Get Started</a>
          <button class="nav__mobile-toggle" id="mobileToggle" aria-label="Toggle menu">
            <svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </nav>
  `;
}

/**
 * Injects the shared footer.
 */
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  const base = getBasePath();
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid footer__grid--6col">
          <div class="footer__brand">
            <a href="${base}index.html" class="nav__logo">
              <div class="nav__logo-icon">V</div>
              <span>VISHARA</span>
            </a>
            <p class="footer__brand-text">
              "Where Innovation Grows." 🌱<br><br>
              Protecting your innovations and creative assets with expertise and precision.
            </p>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">IP Services</h4>
            <div class="footer__links">
              <a href="${base}patent/index.html" class="footer__link">Patent</a>
              <a href="${base}trademark/index.html" class="footer__link">Trademark</a>
              <a href="${base}copyright/index.html" class="footer__link">Copyright</a>
              <a href="${base}design/index.html" class="footer__link">Design Registration</a>
            </div>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Legal</h4>
            <div class="footer__links">
              <a href="${base}legal/nda-drafting.html" class="footer__link">NDA Drafting</a>
              <a href="${base}legal/licensing-agreements.html" class="footer__link">Licensing Agreements</a>
              <a href="${base}legal/assignment-agreements.html" class="footer__link">Assignment Agreements</a>
              <a href="${base}legal/technology-transfer.html" class="footer__link">Technology Transfer</a>
              <a href="${base}legal/franchise-agreements.html" class="footer__link">Franchise Agreements</a>
              <a href="${base}legal/mou-drafting.html" class="footer__link">MOU Drafting</a>
              <a href="${base}legal/service-agreements.html" class="footer__link">Service Agreements</a>
            </div>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Digital Marketing</h4>
            <div class="footer__links">
              <a href="${base}digital-marketing/website-development.html" class="footer__link">Website Development</a>
              <a href="${base}digital-marketing/seo.html" class="footer__link">SEO</a>
              <a href="${base}digital-marketing/ui-ux-design.html" class="footer__link">UI/UX Design</a>
              <a href="${base}digital-marketing/social-media-marketing.html" class="footer__link">Social Media Marketing</a>
              <a href="${base}digital-marketing/paid-ads.html" class="footer__link">Paid Ads</a>
            </div>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Resources</h4>
            <div class="footer__links">
              <a href="${base}resources/blogs.html" class="footer__link">Blogs</a>
              <a href="${base}resources/whitepapers.html" class="footer__link">Whitepapers</a>
              <a href="${base}resources/patent-news.html" class="footer__link">Patent News</a>
              <a href="${base}resources/case-studies.html" class="footer__link">Case Studies</a>
              <a href="${base}resources/faqs.html" class="footer__link">FAQs</a>
            </div>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Contact</h4>
            <div class="footer__links">
              <a href="mailto:info@vishara.com" class="footer__link">info@vishara.com</a>
              <a href="tel:+1234567890" class="footer__link">+1 (234) 567-890</a>
            </div>
            <h4 class="footer__heading" style="margin-top: var(--space-6)">Company</h4>
            <div class="footer__links">
              <a href="${base}index.html#why-us" class="footer__link">About Us</a>
              <a href="${base}index.html#process" class="footer__link">Our Process</a>
              <a href="${base}index.html#testimonials" class="footer__link">Testimonials</a>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__copyright">© ${year} VISHARA. All rights reserved.</p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Auto-render on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
