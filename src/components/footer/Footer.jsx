import React from "react";
import reactLogo from '../../assets/react.svg'
import tailwindLogo from '../../assets/tailwind.svg'
import viteLogo from '../../assets/vite.svg'

function Footer() {
    return (
        <footer className="bg-white/80 backdrop-blur-lg shadow-inner py-4 mt-8">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex-1"></div>

                <div className="flex-1 flex flex-col items-center">
                    <span className="text-gray-700">Written by Chan Pyae Aung</span>
                    <span></span>
                    <div className="flex space-x-4 mt-1">
                        <a href="https://www.linkedin.com/in/chanpyaeaung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg className="w-5 h-5 ext-gray-800 hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                            </svg>
                        </a>
                        <a href="https://github.com/chanpyaung" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg className="w-5 h-5 text-gray-800 hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>

                
                <div className="flex-1 flex justify-end items-center space-x-3">
                    <span className="text-gray-500 text-sm">Built with</span>
                    <img src={viteLogo} alt="Vite" className="h-6 w-6" />
                    <img src={reactLogo} alt="React" className="h-6 w-6" />
                    <img src={tailwindLogo} alt="Tailwind CSS" className="h-6 w-6" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;