import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';
import Pagination from '../components/Pagination';
import { servicesMock } from '../components/services/ServicesMock';

export interface Service {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  detailed_content: string | null;
  slug: string | null;
}

const ITEMS_PER_PAGE = 6;


export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPaginatedServices();
  }, [currentPage]);

  const getPaginatedServices = async () => {
    setLoading(true);
    try {
      const from = (currentPage -1) * ITEMS_PER_PAGE;
      //const to = from + ITEMS_PER_PAGE -1;
      const to = from + ITEMS_PER_PAGE;

      const selectedServices = servicesMock.slice(from, to);

      setServices(selectedServices || []);
      setTotalCount(servicesMock.length || 0);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  }

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-brand to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Állatorvosi Szolgáltatások
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           Szakszerű egészségügyi ellátás kedvencei számára
          </p>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
            <p className="mt-4 text-gray-600">Szolgáltatások betöltése...</p>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">
              Jelenleg nincsenek elérhető szolgáltatások.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Összesen <span className="font-semibold text-emerald-600">{totalCount}</span> szolgáltatás
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
