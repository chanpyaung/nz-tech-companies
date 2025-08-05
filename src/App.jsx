import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Overview from './components/overview/Overview'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import FilterControls from './components/company/FilterControls';
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
    fetch('../public/data.json')
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


  return (
    <>
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Overview companies={companies} />
        <section id="explorer" className="mb-12 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Company Explorer</h2>
          <FilterControls filters={filters} setFilters={setFilters} categories={categories} techStacks={techStacks} />
        </section>
      </main>
    </>
  )
}

export default App
