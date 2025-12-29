class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                .navbar {
                    padding: 0.75rem 1.25rem;
                    background: transparent;
                    backdrop-filter: blur(16px);
                    transition: all 0.3s ease;
                }
                .navbar-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0.6rem 1.4rem;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #2563eb, #7c3aed);
                    /* Subtle, darker shadow for soft depth */
                    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.35);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease;
                }
                .navbar.scrolled .navbar-inner {
                    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.5);
                    transform: translateY(-2px);
                    background: linear-gradient(90deg, #1d4ed8, #6d28d9);
                }
                .logo-link {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .logo-circle {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    /* Use root-relative path so it works from Shadow DOM */
                    background-color: #b2a4d4ff;;
                    background-image: url('/favicon.png');
                    background-size: cover;
                    background-position: center;
                    box-shadow: 0 4px 12px rgba(59, 131, 246, 0.67);
                    flex-shrink: 0;
                }
                .logo-circle-small {
                    width: 32px;
                    height: 32px;
                }
                .logo-text {
                    font-size: 1.25rem;
                    font-weight: 700;
                    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    /* Slight bump/3D effect */
                    text-shadow:
                        0 1px 0 rgba(255, 255, 255, 0.6),
                        0 4px 10px rgba(15, 23, 42, 0.35);
                }
                .nav-link {
                    position: relative;
                    color: #e5e7eb;
                    font-weight: 500;
                    text-decoration: none;
                    padding: 0.5rem 0;
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .nav-link:hover {
                    color: #ffffff;
                    transform: translateY(-1px);
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                    transition: width 0.3s ease;
                    border-radius: 2px;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .contact-btn {
                    background: linear-gradient(135deg, #22c55e, #16a34a);
                    color: white;
                    padding: 0.55rem 1.25rem;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                .contact-btn:hover {
                    background: linear-gradient(135deg, #22c55e, #15803d);
                    transform: translateY(-1px);
                    box-shadow: 0 8px 22px rgba(16, 185, 129, 0.45);
                }
                .mobile-menu-btn {
                    background: none;
                    border: none;
                    color: #374151;
                    cursor: pointer;
                    padding: 0.5rem;
                    display: none;
                }
                .mobile-menu-btn:hover {
                    color: #3b82f6;
                }
                .mobile-menu {
                    position: fixed;
                    inset: 0;
                    z-index: 50;
                    display: flex;
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.25s ease;
                }
                .mobile-menu.open {
                    opacity: 1;
                    pointer-events: auto;
                }
                .mobile-menu-overlay {
                    flex: 1;
                    background: rgba(15, 23, 42, 0.5);
                }
                .mobile-menu-panel {
                    width: 80%;
                    max-width: 320px;
                    height: 100%;
                    background: white;
                    padding: 1.5rem;
                    box-shadow: -10px 0 25px rgba(15, 23, 42, 0.35);
                    transform: translateX(100%);
                    transition: transform 0.25s ease;
                }
                .mobile-menu.open .mobile-menu-panel {
                    transform: translateX(0);
                }
                @media (max-width: 768px) {
                    /* Keep same gradient style on mobile, only change layout */
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav class="navbar">
                <div class="navbar-inner">
                    <!-- Logo -->
                    <a href="/" class="logo-link">
                        <div class="logo-circle"></div>
                        <span class="logo-text">Professor Adda</span>
                    </a>

                    <!-- Desktop Menu -->
                    <div class="desktop-menu" style="display: flex; align-items: center; gap: 2rem;">
                        <a href="/pages/sample-notes.html" class="nav-link">Sample Notes</a>
                        <a href="/pages/faq.html" class="nav-link">FAQ</a>
                        <a href="/pages/courses.html" class="nav-link">Courses</a>
                        <a href="#" class="nav-link">Testimonials</a>
                        <button onclick="openWhatsApp()" class="contact-btn">
                            <i data-feather="message-circle" style="width: 18px; height: 18px;"></i>
                            Contact
                        </button>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button class="mobile-menu-btn" id="mobileMenuButton">
                        <i data-feather="menu" style="width: 24px; height: 24px;"></i>
                    </button>
                </div>

                <!-- Mobile Menu as Sidebar -->
                <div class="mobile-menu">
                    <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
                    <div class="mobile-menu-panel">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                            <a href="/" class="logo-link">
                                <div class="logo-circle logo-circle-small"></div>
                                <span class="logo-text" style="font-size: 1.125rem;">Professor Adda</span>
                            </a>
                            <button id="closeMobileMenu" style="color: #374151; background: none; border: none; cursor: pointer; padding: 0.5rem;">
                                <i data-feather="x" style="width: 24px; height: 24px;"></i>
                            </button>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <a href="/pages/sample-notes.html" class="nav-link" style="display: block; font-size: 1.125rem;">Sample Notes</a>
                            <a href="/pages/faq.html" class="nav-link" style="display: block; font-size: 1.125rem;">FAQ</a>
                            <a href="/pages/courses.html" class="nav-link" style="display: block; font-size: 1.125rem;">Courses</a>
                            <a href="#" class="nav-link" style="display: block; font-size: 1.125rem;">Testimonials</a>
                            <button onclick="openWhatsApp()" class="contact-btn" style="width: 100%; padding: 0.75rem 1rem; justify-content: center;">
                                <i data-feather="message-circle" style="width: 18px; height: 18px;"></i>
                                Contact on WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <script>
                // Mobile menu functionality
                const mobileMenuButton = this.shadowRoot.getElementById('mobileMenuButton');
                const closeMobileMenu = this.shadowRoot.getElementById('closeMobileMenu');
                const mobileMenuOverlay = this.shadowRoot.getElementById('mobileMenuOverlay');
                const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

                mobileMenuButton.addEventListener('click', () => {
                    mobileMenu.classList.add('open');
                    document.body.style.overflow = 'hidden';
                });

                closeMobileMenu.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    document.body.style.overflow = '';
                });

                // Close when tapping on the dark overlay
                mobileMenuOverlay.addEventListener('click', () => {
                    mobileMenu.classList.remove('open');
                    document.body.style.overflow = '';
                });

                // Close mobile menu when clicking on links
                this.shadowRoot.querySelectorAll('.mobile-menu a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.remove('open');
                        document.body.style.overflow = '';
                    });
                });

                // Navbar scroll effect
                window.addEventListener('scroll', () => {
                    const navbar = this.shadowRoot.querySelector('.navbar');
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                });

                // Initialize feather icons in shadow DOM
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            </script>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);