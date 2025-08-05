import { useMemo, useState } from "react";
import CompanyCard from "./CompanyCard";
import { ChevronDown } from "lucide-react";

function CompanyGrid({ companies, allCategories, onSelectCompany }) {
    const [openCategories, setOpenCategories] = useState(allCategories);

    const toggleCategory = (category) => {
        setOpenCategories(prev => 
            prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        );
    };

    const companiesByCategory = useMemo(() => {
        return allCategories.map(category => ({
            category,
            companies: companies.filter(c => c.category === category)
        }));
    }, [companies, allCategories]);

    return (
        <div className="space-y-6">
            {companiesByCategory.map(({ category, companies: companyList }) => {
                const isExpandedByUser = openCategories.includes(category);
                const hasCompanies = companyList.length > 0;
                const isOpen = isExpandedByUser && hasCompanies;

                return (
                    <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button 
                            onClick={() => toggleCategory(category)} 
                            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-gray-800">{category}</h3>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm font-semibold text-white bg-[#D8A778] rounded-full px-3 py-1">{companyList.length}</span>
                                <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </div>
                        </button>
                        {isOpen && (
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {companyList.map(company => <CompanyCard key={company.id} company={company} onSelect={onSelectCompany} />)}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default CompanyGrid;