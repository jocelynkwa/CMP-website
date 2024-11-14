import React from 'react';
import { Mail, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-orange-400" />
                                <span>cmp@cus.ca</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Instagram className="h-5 w-5 text-orange-400" />
                                <span>@ubccmp</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-orange-400" />
                                <span>Henry Angus Building, UBC Sauder</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hours</h3>
                        <p>Midterm Review Sessions: October - November; March-April </p>
                        <p>Final Review Sessions: December; May </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/files" className="hover:text-orange-400 transition-colors">
                                    Study Resources
                                </a>
                            </li>
                            <li>
                                <a href="/team" className="hover:text-orange-400 transition-colors">
                                    Our Execs
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-orange-400 transition-colors">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer bottom section */}
                <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
                    <p className="text-xs text-gray-400 text-center mx-auto">© {new Date().getFullYear()} Commerce Mentorship Program. All rights reserved.</p>
                    <p className="text-lg font-semibold text-right ml-auto">Made by Jocelyn Kwa and James Shi</p>
                </div>
            </div>
        </footer>
    );
}
