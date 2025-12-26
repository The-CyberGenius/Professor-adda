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
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(229, 231, 235, 0.5);
                    transition: all 0.3s ease;
                }
                .navbar.scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }
                .logo-link {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .logo-text {
                    font-size: 1.25rem;
                    font-weight: 700;
                    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .nav-link {
                    position: relative;
                    color: #374151;
                    font-weight: 500;
                    text-decoration: none;
                    padding: 0.5rem 0;
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .nav-link:hover {
                    color: #3b82f6;
                    transform: translateY(-2px);
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
                    background: #10b981;
                    color: white;
                    padding: 0.5rem 1rem;
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
                    background: #059669;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
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
                    transition: all 0.3s ease;
                    transform: translateX(-100%);
                }
                .mobile-menu.open {
                    transform: translateX(0);
                }
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <nav class="navbar">
                <div style="max-width: 1200px; margin: 0 auto; padding: 1rem 1.5rem;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <!-- Logo -->
                        <a href="/" class="logo-link">
                            <div style="width: 40px; height: 40px; background: linear-gradient(45deg, #3b82f6, #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i data-feather="book-open" style="color: white; width: 20px; height: 20px;"></i>
                            </div>
                            <span class="logo-text">Professor Adda</span>
                        </a>

                        <!-- Desktop Menu -->
                        <div class="desktop-menu" style="display: flex; align-items: center; gap: 2rem;">
                            <a href="#notes" class="nav-link">Sample Notes</a>
                            <a href="#" class="nav-link">Courses</a>
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

                    <!-- Mobile Menu -->
                    <div class="mobile-menu" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: white; z-index: 50;">
                        <div style="padding: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                                <a href="/" class="logo-link">
                                    <div style="width: 32px; height: 32px; background: linear-gradient(45deg, #3b82f6, #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                        <i data-feather="book-open" style="color: white; width: 16px; height: 16px;"></i>
                                    </div>
                                    <span class="logo-text" style="font-size: 1.125rem;">Professor Adda</span>
                                </a>
                                <button id="closeMobileMenu" style="color: #374151; background: none; border: none; cursor: pointer; padding: 0.5rem;">
                                    <i data-feather="x" style="width: 24px; height: 24px;"></i>
                                </button>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                <a href="#notes" class="nav-link" style="display: block; font-size: 1.125rem;">Sample Notes</a>
                                <a href="#" class="nav-link" style="display: block; font-size: 1.125rem;">Courses</a>
                                <a href="#" class="nav-link" style="display: block; font-size: 1.125rem;">Testimonials</a>
                                <button onclick="openWhatsApp()" class="contact-btn" style="width: 100%; padding: 0.75rem 1rem; justify-content: center;">
                                    <i data-feather="message-circle" style="width: 18px; height: 18px;"></i>
                                    Contact on WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <script>
                // Mobile menu functionality
                const mobileMenuButton = this.shadowRoot.getElementById('mobileMenuButton');
                const closeMobileMenu = this.shadowRoot.getElementById('closeMobileMenu');
                const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

                mobileMenuButton.addEventListener('click', () => {
                    mobileMenu.classList.add('open');
                    document.body.style.overflow = 'hidden';
                });

                closeMobileMenu.addEventListener('click', () => {
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