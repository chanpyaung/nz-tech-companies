import { getStatusInfo, getTechColor } from "../../utils/styleUtils";
import { Star } from "lucide-react";

function CompanyCard({ company, onSelect }) {
    const statusInfo = getStatusInfo(company.status);
    return (
        <div onClick={() => onSelect(company)} className="bg-white rounded-lg shadow-md p-5 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg text-gray-800">{company.name}</h3>
                    {company.glassdoorRating && (
                        <div className="flex items-center text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded flex-shrink-0 ml-2">
                            <Star size={14} className="text-yellow-400 mr-1 fill-yellow-400" />
                            {company.glassdoorRating}
                        </div>
                    )}
                </div>
                <p className="text-sm text-gray-500 mb-3">{company.subSector}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{company.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                    {(company.techStack || []).slice(0, 3).map(tech => (
                        <span key={tech} className={`text-xs font-semibold px-2 py-1 rounded ${getTechColor(tech)}`}>{tech}</span>
                    ))}
                </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-100">
                {company.location && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{company.location}</p>
                )}
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${statusInfo.bg} ${statusInfo.color}`}>{statusInfo.icon} {statusInfo.text}</span>
            </div>
        </div>
    );
}

export default CompanyCard;