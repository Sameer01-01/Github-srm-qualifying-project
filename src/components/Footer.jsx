
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-black to-zinc-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-6">
                {/* Change from grid to flex */}
                <div className="flex flex-wrap justify-between mb-10">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-4xl font-bold text-rose-500">takeUforward</h1>
                        <p className="text-gray-400 mt-2 w-64">The best place to learn data Structures, algorithms, most asked coding interview questions. real interview experiences free of cost.</p>
                    </div>
                    
                    {/* Combine all Quick Links into a single flex container */}
                    <div className="flex flex-col md:flex-row justify-around md:space-x-8 w-full md:w-auto">
                        <div className="text-center md:text-left">
                            <h2 className="text-rose-500 font-semibold mb-2">Quick Links</h2>
                            <ul className="text-gray-400">
                                <li className="mb-1">
                                    <a href="/home" className="hover:text-rose-500 transition duration-200 hover:underline">Home</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/about" className="hover:text-rose-500 transition duration-200 hover:underline">About Us</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/contact" className="hover:text-rose-500 transition duration-200 hover:underline">Contact</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/privacy" className="hover:text-rose-500 transition duration-200 hover:underline">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-rose-500 font-semibold mb-2">Quick Links</h2>
                            <ul className="text-gray-400">
                                <li className="mb-1">
                                    <a href="/home" className="hover:text-rose-500 transition duration-200 hover:underline">Home</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/about" className="hover:text-rose-500 transition duration-200 hover:underline">About Us</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/contact" className="hover:text-rose-500 transition duration-200 hover:underline">Contact</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/privacy" className="hover:text-rose-500 transition duration-200 hover:underline">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-rose-500 font-semibold mb-2">Quick Links</h2>
                            <ul className="text-gray-400">
                                <li className="mb-1">
                                    <a href="/home" className="hover:text-rose-500 transition duration-200 hover:underline">Home</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/about" className="hover:text-rose-500 transition duration-200 hover:underline">About Us</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/contact" className="hover:text-rose-500 transition duration-200 hover:underline">Contact</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/privacy" className="hover:text-rose-500 transition duration-200 hover:underline">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-rose-500 font-semibold mb-2">Quick Links</h2>
                            <ul className="text-gray-400">
                                <li className="mb-1">
                                    <a href="/home" className="hover:text-rose-500 transition duration-200 hover:underline">Home</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/about" className="hover:text-rose-500 transition duration-200 hover:underline">About Us</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/contact" className="hover:text-rose-500 transition duration-200 hover:underline">Contact</a>
                                </li>
                                <li className="mb-1">
                                    <a href="/privacy" className="hover:text-rose-500 transition duration-200 hover:underline">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-6">
                    <a href="#" className="mx-3 text-gray-400 hover:text-rose-500 transition duration-200">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="mx-3 text-gray-400 hover:text-rose-500 transition duration-200">
                        <FaTwitter />
                    </a>
                    <a href="#" className="mx-3 text-gray-400 hover:text-rose-500 transition duration-200">
                        <FaInstagram />
                    </a>
                    <a href="#" className="mx-3 text-gray-400 hover:text-rose-500 transition duration-200">
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className="border-t border-gray-700 pt-6 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} Sameer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
