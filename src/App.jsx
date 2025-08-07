import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Overview from './components/overview/Overview'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import FilterControls from './components/company/FilterControls';
import CompanyGrid from './components/company/CompanyGrid';
import Footer from './components/footer/Footer';
import CompanyModal from './components/company/CompanyModal';
import References from './components/references/References';
import { references } from './utils/dataUtils';
Chart.register(ArcElement, Tooltip, Legend);

function App() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [techStacks, setTechStacks] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    status: 'all',
    techs: []
  });

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setCompanies(data);
        setFilteredCompanies(data);
        setCategories(Array.from(new Set(data.map(company => company.category))));
        setTechStacks(Array.from(new Set(data.flatMap(company => company.techStack))));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading data:', error);
        setError(error);
        setLoading(false);
      })
  }, [])

  useEffect(() => {
    const result = companies.filter(company => {
        const { search, category, status, techs } = filters;
        const matchesSearch = company.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'all' || company.category === category;
        const matchesStatus = status === 'all' ||
                              (status === 'hiring' && (company.status === 'hiring' || company.status === 'layoffs_hiring')) ||
                              (status === 'layoffs' && (company.status === 'layoffs' || company.status === 'layoffs_hiring'));
        const matchesTech = techs.length === 0 || techs.every(tech => (company.techStack || []).includes(tech));
        
        return matchesSearch && matchesCategory && matchesStatus && matchesTech;
    });
    setFilteredCompanies(result);
}, [filters, companies]);

if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
if (error) return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;


  return (
    <>
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Overview companies={companies} />
        <section id="explorer" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Company Explorer</h2>
          <FilterControls filters={filters} setFilters={setFilters} categories={categories} techStacks={techStacks} />
          <CompanyGrid companies={filteredCompanies} allCategories={categories} onSelectCompany={setSelectedCompany} />
          <References references={references}/>
        </section>
      </main>
      <Footer/>
      <CompanyModal company={selectedCompany} onClose={() => setSelectedCompany(null)} />
    </>
  )
}

export default App
