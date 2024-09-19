import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-black text-yellow-400 p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="footer-section md:col-span-1">
                    <h4 className="font-bold text-lg mb-4">Bewakoof°</h4>
                    <p className="text-sm">
                        <a href="/" className="hover:text-yellow-300">
                            Explore our products
                        </a>
                    </p>
                </div>
                <div className="footer-section md:col-span-1">
                    <h4 className="font-bold text-lg mb-4">Customer Service</h4>
                    <ul>
                        <li className="mt-2">
                            <a href="/contact" className="hover:text-yellow-300">
                                Contact Us
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="/faq" className="hover:text-yellow-300">
                                FAQ
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="/support" className="hover:text-yellow-300">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section md:col-span-1">
                    <h4 className="font-bold text-lg mb-4">Company</h4>
                    <ul>
                        <li className="mt-2">
                            <a href="/about" className="hover:text-yellow-300">
                                About Us
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="/careers" className="hover:text-yellow-300">
                                Careers
                            </a>
                        </li>
                        <li className="mt-2">
                            <a href="/press" className="hover:text-yellow-300">
                                Press
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section md:col-span-1">
                    <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
                    <div className="flex mt-2 space-x-4">
                        <a href="https://www.facebook.com/bewakoofcom" className="hover:text-yellow-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/bewakoof" className="hover:text-yellow-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.snapchat.com/add/bewakoof_tv" className="hover:text-yellow-300">
                            <i className="fab fa-snapchat-ghost"></i>
                        </a>
                        <a href="https://apps.apple.com/in/app/bewakoof-fashion-shopping-app/id1100190514" className="hover:text-yellow-300">
                            <i className="fab fa-apple"></i>
                        </a>
                        <a href="https://twitter.com/bewakoof" className="hover:text-yellow-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://in.pinterest.com/bewakoof/" className="hover:text-yellow-300">
                            <i className="fab fa-pinterest"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-section md:col-span-1 md:flex md:flex-col md:items-end">
                    <div className="flex items-center space-x-2 mt-2">
                        <i className="fas fa-undo-alt"></i>
                        <span>15 Days return policy*</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                        <i className="fas fa-money-bill-wave"></i>
                        <span>Cash on delivery*</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
