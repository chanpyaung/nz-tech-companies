import React from "react";

function References({ references }) {
    const links = references.map((ref, index) => (
        <li key={index} className="mb-3">
            <a 
                href={ref} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
            >
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                {ref}
            </a>
        </li>
    ));

    return (
        <section id="references" className="py-12 scroll-mt-20">
            <div className="container mx-auto">
                <div className=" mx-auto">
                    <h2 className="text-3xl font-bold text-start mb-8 text-gray-800">
                        References
                    </h2>
                    <div>
                        <ul className="space-y-3">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default References;