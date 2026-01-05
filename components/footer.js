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
                    /* Same logo style as navbar circle */
                    background-image: url('/favicon.png');
                    // background-image: url('/gemini.png');
                    
                    background-size: cover;
                    background-position: center;
                    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.55);
                    flex-shrink: 0;
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
                
                .footer-link:focus-visible {
                    outline: 2px solid #60a5fa;
                    outline-offset: 2px;
                    border-radius: 4px;
                    color: #60a5fa;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    color: #9ca3af;
                }

                .contact-item:hover {
                    color: #60a5fa;
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
                
                .whatsapp-btn:focus-visible {
                    outline: 2px solid #10b981;
                    outline-offset: 2px;
                    border-radius: 4px;
                }
                
                /* Prevent horizontal scroll from contact links */
                a[href^="tel:"], a[href^="mailto:"] {
                    display: inline-flex;
                    max-width: 100%;
                    word-break: break-word;
                }
                
                a[href^="tel:"]:focus-visible,
                a[href^="mailto:"]:focus-visible {
                    outline: 2px solid #60a5fa;
                    outline-offset: 2px;
                    border-radius: 4px;
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
                    color: white; /* Default white icon */
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px; /* Increased size */
                    height: 48px; /* Increased size */
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1); /* Default glossy bg */
                    backdrop-filter: blur(4px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                }

                .social-link:hover {
                    transform: translateY(-4px) scale(1.1);
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
                    border-color: rgba(255, 255, 255, 0.3);
                }

                /* Telegram Specific Style */
                .social-link.telegram {
                    background: linear-gradient(135deg, #229ED9, #0088cc);
                    box-shadow: 0 4px 10px rgba(34, 158, 217, 0.4);
                }
                .social-link.telegram:hover {
                    box-shadow: 0 8px 20px rgba(34, 158, 217, 0.6);
                    background: linear-gradient(135deg, #28a8e9, #0099e6);
                }

                /* WhatsApp Specific Style */
                .social-link.whatsapp {
                    background: linear-gradient(135deg, #25D366, #128C7E);
                    box-shadow: 0 4px 10px rgba(37, 211, 102, 0.4);
                }
                .social-link.whatsapp:hover {
                    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.6);
                    background: linear-gradient(135deg, #4ce485, #1bd78d);
                }

                /* Instagram Specific Style */
                .social-link.instagram {
                    background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
                    box-shadow: 0 4px 10px rgba(225, 48, 108, 0.4);
                }
                .social-link.instagram:hover {
                    box-shadow: 0 8px 20px rgba(225, 48, 108, 0.6);
                    background: linear-gradient(135deg, #a95dc0, #fd4d4d, #ffcf85);
                }

                .social-link svg {
                    width: 24px;
                    height: 24px;
                    stroke-width: 2.5px;
                    filter: drop-shadow(0 2px 3px rgba(0,0,0,0.2));
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
                                <div class="brand-logo"></div>
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
                                <li><a href="/pages/sample-notes.html" class="footer-link">Sample Notes</a></li>
                                <li><a href="/pages/courses.html" class="footer-link">All Courses</a></li>
                                <li><a href="/pages/faq.html" class="footer-link">FAQs</a></li>
                            </ul>
                        </div>
                        <!-- Products -->
                        <div>
                            <h4 class="footer-heading">Our Products</h4>
                            <ul class="footer-list">
                                <li><a href="/pages/select-language.html" class="footer-link">PDF Notes</a></li>
                                <li><a href="/pages/hard-copy.html" class="footer-link">Hard Copy Notes</a></li>
                                <li><a href="/pages/update-soon.html" class="footer-link">Study Material</a></li>
                                <li><a href="/pages/practice-set.html" class="footer-link">Practice Sets</a></li>
                            </ul>
                        </div>
                        
                        <!-- Contact -->
                        <div>
                            <h4 class="footer-heading">Contact Info / support</h4>
                            
                            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.75rem;">
                                
                                <a href="tel:+919216228788" style="display: flex; align-items: center; gap: 0.6rem; color: inherit; text-decoration: none;">
                                    <i data-feather="phone" style="width: 16px; height: 16px;"></i>
                                    <span>+91 92162 28788</span>
                                </a>
                                <a href="tel:+917690022111" style="display: flex; align-items: center; gap: 0.6rem; color: inherit; text-decoration: none;">
                                    <i data-feather="phone" style="width: 16px; height: 16px;"></i>
                                    <span>+91 76900 22111</span>
                                </a>
                                <a href="mailto:notes@professoradda.com" style="display: flex; align-items: center; gap: 0.6rem; color: inherit; text-decoration: none;">
                                    <i data-feather="mail" style="width: 16px; height: 16px;"></i>
                                    <span>notes@professoradda.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="bottom-bar">
                        <p>&copy; 2025 Professor Adda. All rights reserved.</p>
                        <div class="social-links">
                            <!-- Telegram -->
                            <a href="https://t.me/ugcnet_notes_pdf" target="_blank" class="social-link telegram" aria-label="Telegram">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </a>
                            
                            <!-- WhatsApp Channel -->
                            <a href="https://whatsapp.com/channel/0029Va9grq796H4bJGPDyd3f" target="_blank" class="social-link whatsapp" aria-label="WhatsApp">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </a>

                            <!-- Instagram -->
                            <a href="https://www.instagram.com/netpaper1_professorsadda?igsh=b253cnlwNzN3N3lj" target="_blank" class="social-link instagram" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `;

        // Initialize feather icons in footer
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}
customElements.define('custom-footer', CustomFooter);