import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";

function Overview({ companies }) {
    const stats = useMemo(() => {
        const hiring = companies.filter(c => c.status === 'hiring' || c.status === 'layoffs_hiring').length;
        const layoffs = companies.filter(c => c.status === 'layoffs' || c.status === 'layoffs_hiring').length;
        const unknown = companies.filter(c => c.status === '').length;
        return { hiring, layoffs, unknown, total: companies.length };
    }, [companies]);

    const chartData = {
        labels: ['Actively Hiring', 'Recent Layoffs', 'Unknown'],
        datasets: [{
            label: ' #',
            data: [stats.hiring, stats.layoffs, stats.unknown],
            backgroundColor: ['#22C55E', '#EF4444', '#6B7280'],
            borderColor: '#FFFFFF',
            borderWidth: 4
        }]
    };

    const chartOptions = {
        responsive: true, maintainAspectRatio: false, cutout: '70%',
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 20, font: { size: 14 } } } }
    };

    return (
        <section id="overview" className="mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold text-center mb-2">Market at a Glance</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">A live look at the employment status of notable technology companies across New Zealand, based on public data.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-gray-700 mb-4">Status Breakdown</h3>
                    <div className="relative w-full max-w-xs mx-auto h-72 md:h-80">
                        <Doughnut data={chartData} options={chartOptions} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 col-span-1 lg:col-span-2">
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Tracked</dt>
                        <dd className="mt-1 text-4xl font-semibold text-gray-900">{stats.total}</dd>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
                        <dt className="text-sm font-medium text-green-600 truncate">Actively Hiring</dt>
                        <dd className="mt-1 text-4xl font-semibold text-green-600">{stats.hiring}</dd>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
                        <dt className="text-sm font-medium text-red-600 truncate">Recent Layoffs</dt>
                        <dd className="mt-1 text-4xl font-semibold text-red-600">{stats.layoffs}</dd>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
                        <dt className="text-sm font-medium text-gray-500 truncate">Unknown</dt>
                        <dd className="mt-1 text-4xl font-semibold text-gray-900">{stats.unknown}</dd>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;