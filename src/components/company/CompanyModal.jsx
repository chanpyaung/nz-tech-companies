import React, { useEffect } from "react";
import { getStatusInfo, getTechColor } from "../../utils/styleUtils";
import { X } from "lucide-react";

function CompanyModal({ company, onClose }) {
    if (!company) return null;
    const statusInfo = getStatusInfo(company.status);

    // Handle ESC key press
    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        // Add event listener when modal opens
        document.addEventListener('keydown', handleEscKey);

        // Cleanup event listener when modal closes
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all" onClick={e => e.stopPropagation()}>
                <div className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold">{company.name}</h2>
                            <p className="text-sm text-gray-500">{company.category} | {company.subSector}</p>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
                    </div>
                    <div className="mt-4 border-t pt-4 space-y-4">
                        <div>
                            <h4 className="font-semibold mb-1">Description</h4>
                            <p className="text-gray-700">{company.description}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1">Notability</h4>
                            <p className="text-gray-700">{company.notability}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1">Employment Status</h4>
                            <span className={`text-sm font-medium px-3 py-1 rounded-full ${statusInfo.bg} ${statusInfo.color}`}>{statusInfo.icon} {statusInfo.text}</span>
                            <p className="mt-2 text-sm text-gray-600">{company.evidence}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {(company.techStack || []).map(tech => (
                                    <span key={tech} className={`text-sm font-semibold px-3 py-1 rounded-full ${getTechColor(tech)}`}>{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6">
                            <a href={company.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#D8A778] text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">
                                Visit Careers Page
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyModal;