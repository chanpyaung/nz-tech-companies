export const getStatusInfo = (status) => {
    switch (status) {
        case 'hiring': return { icon: '🟢', text: 'Actively Hiring', color: 'text-green-600', bg: 'bg-green-100' };
        case 'layoffs': return { icon: '🔴', text: 'Recent Layoffs', color: 'text-red-600', bg: 'bg-red-100' };
        case 'layoffs_hiring': return { icon: '🔴/🟢', text: 'Restructuring & Hiring', color: 'text-yellow-600', bg: 'bg-yellow-100' };
        default: return {};
    }
};

const techColorMap = {
    'C#': 'bg-purple-100 text-purple-800', '.NET': 'bg-purple-100 text-purple-800',
    'React': 'bg-blue-100 text-blue-800', 'React Native': 'bg-blue-100 text-blue-800',
    'AWS': 'bg-orange-100 text-orange-800', 'Azure': 'bg-sky-100 text-sky-800', 'GCP': 'bg-sky-100 text-sky-800',
    'Java': 'bg-red-100 text-red-800', 'Python': 'bg-yellow-100 text-yellow-800',
    'Go': 'bg-cyan-100 text-cyan-800', 'Ruby on Rails': 'bg-red-100 text-red-800',
    'Angular': 'bg-red-100 text-red-800', 'Vue.js': 'bg-green-100 text-green-800',
    'C++': 'bg-indigo-100 text-indigo-800', 'Embedded C': 'bg-indigo-100 text-indigo-800',
    'SQL Server': 'bg-gray-100 text-gray-800', 'PostgreSQL': 'bg-gray-100 text-gray-800', 'MySQL': 'bg-gray-100 text-gray-800',
    'default': 'bg-gray-100 text-gray-800'
};
export const getTechColor = (tech) => techColorMap[tech] || techColorMap['default'];
