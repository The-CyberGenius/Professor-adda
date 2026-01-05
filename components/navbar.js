class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }

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
                position: relative;
            }
            .navbar-inner {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0.6rem 1.4rem;
                border-radius: 100px;
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
                border-radius: 30%;
                background: linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%);
                border: 2px solid #c7d2fe;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 6px 18px #6366f133, 0 1.5px 4px #a5b4fc44;
                flex-shrink: 0; 
            }
            .logo-circle svg {
                transition: all 0.3s ease-in-out;
                cursor: pointer;
                filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
            }
            .logo-circle svg:hover {
                transform: translateY(-3px) scale(1.05);
                filter: drop-shadow(0px 8px 15px rgba(99, 102, 241, 0.4));
            }
            /* Tassel animation */
            .logo-circle svg:hover circle {
                fill: #f59e0b; /* Brighten gold on hover */
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
            .nav-link:focus-visible {
                outline: 2px solid rgba(255, 255, 255, 0.8);
                outline-offset: 4px;
                border-radius: 4px;
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

            /* Contact button styles */
            .contact-btn {
                background: linear-gradient(135deg, #e2ece5ff, #0a2815ff);
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
                transform: translateY(1px);
                box-shadow: 0 8px 22px rgba(16, 185, 129, 0.45);
            }

            /* Mobile Get Button */
            .mobile-get-btn {
                display: none;
                background: rgba(255, 255, 255, 0.25);
                color: #ffffff;
                padding: 0.6rem 1.25rem;
                border-radius: 0.5rem;
                font-weight: 700;
                font-size: 0.95rem;
                text-decoration: none;
                transition: all 0.3s ease;
                border: 1px solid rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(10px);
                white-space: nowrap;
                min-width: 60px;
                text-align: center;
            }
            
            .mobile-get-btn:hover {
                background: rgba(255, 255, 255, 0.35);
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(255, 255, 255, 0.3);
                border-color: rgba(255, 255, 255, 0.5);
            }
            
            .mobile-get-btn:active {
                transform: translateY(0);
                background: rgba(255, 255, 255, 0.4);
            }
            
            .mobile-get-btn:focus-visible {
                outline: 2px solid rgba(255, 255, 255, 0.9);
                outline-offset: 2px;
            }

            @media (max-width: 768px) {
                .desktop-menu {
                    display: none !important;
                }
                .mobile-get-btn {
                    display: inline-block;
                }
            }

            </style>
            <nav class="navbar">
            <div class="navbar-inner">
                <!-- Logo -->
                <a href="/" class="logo-link">
                            <div class="logo-circle">
                                <!-- 
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                <linearGradient id="profGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#6366f1" />
                                <stop offset="100%" stop-color="#a855f7" />
                                </linearGradient>
                                </defs>
                                <path d="M24 40C18 40 8 36 8 36V16C8 16 18 20 24 20C30 20 40 16 40 16V36C40 36 30 40 24 40Z" fill="url(#profGrad)" />
                                <path d="M24 8L42 16L24 24L6 16L24 8Z" fill="#312e81" />
                                <path d="M42 16V26" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" />
                                <circle cx="42" cy="28" r="2" fill="#fbbf24" />
                                <rect x="23" y="20" width="2" height="20" fill="#ffffff" fill-opacity="0.3" />
                                </svg> 
                                -->
                                <img src="${this.getAttribute('logo-src') || '/gemini.png'}" alt="Professor Adda Logo" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit;">
                            </div>
                <span class="logo-text">Professor Adda</span>
                </a>

                <!-- Desktop Menu -->
                    <div class="desktop-menu" style="display: flex; align-items: center; gap: 2rem;">
                    <a href="/pages/courses.html" class="nav-link">Get Premium Notes</a>
                        <a href="/pages/sample-notes.html" class="nav-link">Sample Notes</a>
                        <a href="/pages/faq.html" class="nav-link">FAQ</a>
                    </div>

                <!-- Mobile Get Button -->
                <a href="/pages/courses.html" class="mobile-get-btn" aria-label="Get Premium Notes">Get</a>
            </div>
            </nav>
        `;

        // Initialize functionality
        this.init();
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    init() {
        // Navbar scroll effect
        window.addEventListener('scroll', this.handleScroll);

        // Initialize feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }

    handleScroll() {
        const navbar = this.shadowRoot.querySelector('.navbar');
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }


}

customElements.define('custom-navbar', CustomNavbar);
