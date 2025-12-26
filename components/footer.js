class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    margin-top: 4rem;
                }

                .footer {
                    background: linear-gradient(135deg, #111827, #1f2937);
                    color: #e5e7eb;
                    padding: 3rem 1.5rem 2rem;
                }

                .footer-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 2rem;
                }

                .footer-heading {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: #f9fafb;
                }

                .brand-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }

                .brand-row {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    margin-bottom: 0.75rem;
                }

                .brand-logo {
                    width: 40px;
                    height: 40px;
                    border-radius: 999px;
                    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .brand-text {
                    font-size: 1.1rem;
                    font-weight: 700;
                }

                .brand-description {
                    font-size: 0.9rem;
                    color: #9ca3af;
                    line-height: 1.5;
                }

                .footer-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-link {
                    font-size: 0.9rem;
                    color: #9ca3af;
                    text-decoration: none;
                    display: inline-block;
                    padding: 0.15rem 0;
                    transition: color 0.2s ease, transform 0.2s ease;
                }

                .footer-link:hover {
                    color: #60a5fa;
                    transform: translateX(2px);
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    color: #9ca3af;
                }

                .contact-item + .contact-item {
                    margin-top: 0.75rem;
                }

                .whatsapp-btn {
                    margin-top: 1rem;
                    background: #10b981;
                    color: white;
                    padding: 0.55rem 0.9rem;
                    border-radius: 0.5rem;
                    border: none;
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
                }

                .whatsapp-btn:hover {
                    background: #059669;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 18px rgba(16, 185, 129, 0.35);
                }

                .bottom-bar {
                    border-top: 1px solid #374151;
                    margin-top: 2.5rem;
                    padding-top: 1.5rem;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                    font-size: 0.8rem;
                    color: #6b7280;
                }

                .social-links {
                    display: flex;
                    gap: 0.75rem;
                }

                .social-link {
                    color: #6b7280;
                    text-decoration: none;
                    transition: color 0.2s ease, transform 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .social-link:hover {
                    color: #f9fafb;
                    transform: translateY(-1px);
                }

                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 640px) {
                    .footer {
                        padding: 2.5rem 1.25rem 1.75rem;
                    }

                    .footer-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-inner">
                    <div class="footer-grid">
                        <!-- Brand -->
                        <div>
                            <div class="brand-row">
                                <div class="brand-logo">
                                    <i data-feather="book-open" style="width: 18px; height: 18px; color: white;"></i>
                                </div>
                                <span class="brand-text">Professor Adda</span>
                            </div>
                            <p class="brand-description">
                                Your trusted partner for NET JRF preparation with premium quality notes and expert guidance.
                            </p>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h4 class="footer-heading">Quick Links</h4>
                            <ul class="footer-list">
                                <li><a href="#notes" class="footer-link">Sample Notes</a></li>
                                <li><a href="#" class="footer-link">All Courses</a></li>
                                <li><a href="#" class="footer-link">Testimonials</a></li>
                                <li><a href="#" class="footer-link">FAQs</a></li>
                            </ul>
                        </div>

                        <!-- Products -->
                        <div>
                            <h4 class="footer-heading">Our Products</h4>
                            <ul class="footer-list">
                                <li><a href="#" class="footer-link">PDF Notes</a></li>
                                <li><a href="#" class="footer-link">Hard Copy Notes</a></li>
                                <li><a href="#" class="footer-link">Study Material</a></li>
                                <li><a href="#" class="footer-link">Practice Sets</a></li>
                            </ul>
                        </div>

                        <!-- Contact -->
                        <div>
                            <h4 class="footer-heading">Contact Info</h4>
                            <div class="contact-item">
                                <i data-feather="phone" style="width: 14px; height: 14px;"></i>
                                <span>+91 98765 43210</span>
                            </div>
                            <div class="contact-item">
                                <i data-feather="mail" style="width: 14px; height: 14px;"></i>
                                <span>contact@professordda.com</span>
                            </div>
                            <button onclick="openWhatsApp()" class="whatsapp-btn">
                                <i data-feather="message-circle" style="width: 14px; height: 14px;"></i>
                                Message on WhatsApp
                            </button>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="bottom-bar">
                        <p>&copy; 2024 Professor Adda. All rights reserved.</p>
                        <div class="social-links">
                            <a href="#" class="social-link" aria-label="Facebook">
                                <i data-feather="facebook" style="width: 16px; height: 16px;"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="Twitter">
                                <i data-feather="twitter" style="width: 16px; height: 16px;"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="Instagram">
                                <i data-feather="instagram" style="width: 16px; height: 16px;"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="YouTube">
                                <i data-feather="youtube" style="width: 16px; height: 16px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            <script>
                // Initialize feather icons in footer
                if (typeof feather !== 'undefined') {
                    feather.replace();
                }
            </script>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);