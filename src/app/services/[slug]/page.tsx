// app/services/[slug]/page.tsx
import { servicesData } from '@/app/components/service';
import { notFound } from 'next/navigation';
import ServiceDetail from '@/app/components/serviceDetail';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find(s => s.slug === params.slug);
  
  if (!service) {
    return notFound();
  }

  return <ServiceDetail params={service} />;
}
