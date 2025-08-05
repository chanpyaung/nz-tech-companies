import { ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function FilterControls({ filters, setFilters, categories, techStacks }) {

    const [isTechDropdownOpen, setIsTechDropdownOpen] = useState(false);
    const techDropdownRef = useRef(null);

    const handleStatusClick = (status) => setFilters(prev => ({ ...prev, status }));

    const handleTechChange = (tech) => {
        setFilters(prev => {
            const newTechs = prev.techs.includes(tech)
                ? prev.techs.filter(t => t !== tech)
                : [...prev.techs, tech];
            return { ...prev, techs: newTechs };
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (techDropdownRef.current && !techDropdownRef.current.contains(event.target)) {
                setIsTechDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [techDropdownRef]);

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 sticky top-[65px] z-30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" placeholder="Search by company name..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D8A778] focus:border-[#D8A778]" value={filters.search} onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))} />
                </div>
                <div className="relative">
                    <select className="w-full appearance-none px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#D8A778] focus:border-[#D8A778] bg-white" value={filters.category} onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}>
                        <option value="all">All Categories</option>
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
                    {['all', 'hiring', 'layoffs'].map(status => (
                        <button key={status} onClick={() => handleStatusClick(status)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${filters.status === status ? 'bg-white text-[#D8A778] shadow' : 'text-gray-600 hover:bg-gray-200'}`}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="relative" ref={techDropdownRef}>
                    <button onClick={() => setIsTechDropdownOpen(!isTechDropdownOpen)} className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg bg-white text-left">
                        <span className="text-gray-700">
                            {filters.techs.length > 0 ? `Tech Stacks (${filters.techs.length})` : 'Filter by Tech Stack'}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isTechDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isTechDropdownOpen && (
                        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                            {techStacks.map(tech => (
                                <label key={tech} className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#D8A778] focus:ring-[#D8A778]" checked={filters.techs.includes(tech)} onChange={() => handleTechChange(tech)} />
                                    <span className="ml-3 text-sm text-gray-600">{tech}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FilterControls;