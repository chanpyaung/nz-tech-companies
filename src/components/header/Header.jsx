import React from 'react';

function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <h1 className="text-2xl font-bold text-gray-800">Aotearoa Tech Companies Pulse</h1>
                <nav className="hidden md:flex space-x-8">
                    <a href="#overview" className="text-gray-600 hover:text-[#D8A778] transition-colors">Overview</a>
                    <a href="#explorer" className="text-gray-600 hover:text-[#D8A778] transition-colors">Explorer</a>
                    {/* <a href="#trends" className="text-gray-600 hover:text-[#D8A778] transition-colors">Trends</a> */}
                </nav>
            </div>
        </div>
    </header>
    );
}

export default Header;