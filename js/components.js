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

          <li class="nav__item nav__item--has-dropdown">
            <a href="${base}patent/index.html" class="nav__link">
              Patent
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav__dropdown">
              <a href="${base}patent/search.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Patent Analytics
              </a>
              <a href="${base}patent/filing.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Filing
              </a>
              <a href="${base}patent/prosecution.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Prosecution
              </a>
              <a href="${base}patent/monetization.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Monetization
              </a>
              <a href="${base}patent/litigation.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Litigation Support
              </a>
            </div>
          </li>

          <li class="nav__item nav__item--has-dropdown">
            <a href="${base}trademark/index.html" class="nav__link">
              Trademark
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav__dropdown">
              <a href="${base}trademark/services.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Services
              </a>
              <a href="${base}trademark/filing.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Filing
              </a>
              <a href="${base}trademark/prosecution.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Prosecution
              </a>
            </div>
          </li>

          <li class="nav__item nav__item--has-dropdown">
            <a href="${base}copyright/index.html" class="nav__link">
              Copyright
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav__dropdown">
              <a href="${base}copyright/services.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Services
              </a>
              <a href="${base}copyright/filing.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Filing
              </a>
              <a href="${base}copyright/prosecution.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Prosecution
              </a>
            </div>
          </li>

          <li class="nav__item nav__item--has-dropdown">
            <a href="${base}design/index.html" class="nav__link">
              Design
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <div class="nav__dropdown">
              <a href="${base}design/services.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Services
              </a>
              <a href="${base}design/filing.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                Filing
              </a>
              <a href="${base}design/prosecution.html" class="nav__dropdown-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Prosecution
              </a>
            </div>
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
        <div class="footer__grid">
          <div class="footer__brand">
            <a href="${base}index.html" class="nav__logo">
              <div class="nav__logo-icon">V</div>
              <span>VISHARA</span>
            </a>
            <p class="footer__brand-text">
              “Where Innovation Grows.” 🌱<br><br>
              Protecting your innovations and creative assets with expertise and precision.
            </p>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Patent</h4>
            <div class="footer__links">
              <a href="${base}patent/search.html" class="footer__link">Patent Analytics</a>
              <a href="${base}patent/filing.html" class="footer__link">Filing</a>
              <a href="${base}patent/prosecution.html" class="footer__link">Prosecution</a>
              <a href="${base}patent/monetization.html" class="footer__link">Monetization</a>
              <a href="${base}patent/litigation.html" class="footer__link">Litigation Support</a>
            </div>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Trademark</h4>
            <div class="footer__links">
              <a href="${base}trademark/services.html" class="footer__link">Services</a>
              <a href="${base}trademark/filing.html" class="footer__link">Filing</a>
              <a href="${base}trademark/prosecution.html" class="footer__link">Prosecution</a>
            </div>
            <h4 class="footer__heading" style="margin-top: var(--space-6)">Copyright</h4>
            <div class="footer__links">
              <a href="${base}copyright/services.html" class="footer__link">Services</a>
              <a href="${base}copyright/filing.html" class="footer__link">Filing</a>
              <a href="${base}copyright/prosecution.html" class="footer__link">Prosecution</a>
            </div>
          </div>

          <div class="footer__col">
            <h4 class="footer__heading">Design</h4>
            <div class="footer__links">
              <a href="${base}design/services.html" class="footer__link">Services</a>
              <a href="${base}design/filing.html" class="footer__link">Filing</a>
              <a href="${base}design/prosecution.html" class="footer__link">Prosecution</a>
            </div>
            <h4 class="footer__heading" style="margin-top: var(--space-6)">Contact</h4>
            <div class="footer__links">
              <a href="mailto:info@vishara.com" class="footer__link">info@vishara.com</a>
              <a href="tel:+1234567890" class="footer__link">+1 (234) 567-890</a>
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
