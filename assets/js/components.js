class ComponentManager {
  constructor() {
    this.components = {
      header: this.createHeader(),
      footer: this.createFooter()
    };
  }

  /**
   * Creates the site header with navigation
   * @returns {string} HTML string for header
   */
  createHeader() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navItems = [
      { href: 'index.html', label: 'Home' },
      { href: 'about.html', label: 'About' },
      { href: 'training-and-membership.html', label: 'Training & Membership' },
      { href: 'committee.html', label: 'Committee' },
      { href: 'gallery.html', label: 'Gallery' },
      { href: 'contact.html', label: 'Contact' }
    ];

    const navHTML = navItems
      .map(item => {
        const activeClass = currentPage === item.href ? ' active' : '';
        return `<li><a href="${item.href}" class="nav-link${activeClass}">${item.label}</a></li>`;
      })
      .join('');

    return `
      <header class="site-header">
        <div class="container">
          <div class="header-container">
            <div class="header-branding">
              <div class="brand-logo-wrapper">
                <img src="images/logo.png" alt="EUKC Logo" class="site-logo">
              </div>
              <div class="brand-text">
                <h1 class="site-title">Edinburgh University Kendo Club</h1>
                <span class="site-tagline">EUKC</span>
              </div>
            </div>
            <nav class="main-nav" aria-label="Main navigation">
              <ul class="nav-list">
                ${navHTML}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    `;
  }

  /**
   * Creates the site footer with social links
   * @returns {string} HTML string for footer
   */
  createFooter() {
    const socialLinks = [
      {
        href: 'https://youtube.com/@edinburghuniversitykendoclub?si=kBFyVivSa1io82l0',
        icon: 'fab fa-youtube',
        label: 'YouTube'
      },
      {
        href: 'https://www.instagram.com/eukendo?igsh=MW1ibTFiNndjamR0bQ==',
        icon: 'fab fa-instagram',
        label: 'Instagram'
      },
      {
        href: 'https://www.facebook.com/EdinburghUniKendo',
        icon: 'fab fa-facebook-f',
        label: 'Facebook'
      }
    ];

    const socialHTML = socialLinks
      .map(link => `
        <a href="${link.href}" 
           class="social-link" 
           target="_blank" 
           rel="noopener noreferrer"
           aria-label="${link.label}">
          <i class="${link.icon}" aria-hidden="true"></i>
        </a>
      `)
      .join('');

    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-content">
            <p class="footer-text">Copyright &copy; ${new Date().getFullYear()} EUKC</p>
            <div class="social-links">
              ${socialHTML}
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  /**
   * Injects header component into the page
   */
  loadHeader() {
    const headerContainer = document.getElementById('header-placeholder');
    if (headerContainer) {
      headerContainer.innerHTML = this.components.header;
    }
  }

  /**
   * Injects footer component into the page
   */
  loadFooter() {
    const footerContainer = document.getElementById('footer-placeholder');
    if (footerContainer) {
      footerContainer.innerHTML = this.components.footer;
    }
  }

  /**
   * Initializes all components
   */
  init() {
    this.loadHeader();
    this.loadFooter();
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const componentManager = new ComponentManager();
    componentManager.init();
  });
} else {
  const componentManager = new ComponentManager();
  componentManager.init();
}
