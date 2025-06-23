import React from 'react';
import Image from 'next/image';
import { ServiceData } from '@/app/components/types/data';
import { servicesData } from '@/app/components/service';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const ServiceDetail = ({ params }: ServicePageProps) => {
  // Find service directly from data
  const service = servicesData.find(s => s.slug === params.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Service Not Found</h1>
          <p className="mt-4 text-lg">The requested service does not exist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <Image 
          src={service.heroImage} 
          alt={service.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center p-12">
          <div>
            <h1 className="text-5xl font-bold text-white">{service.title}</h1>
            <p className="text-xl text-white mt-2">{service.tagline}</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Service Overview</h2>
        <p className="text-lg mb-6">{service.overview.description}</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {service.overview.highlights.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Methodology</h2>
        <div className="space-y-8">
          {service.process.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step.phase}</h3>
                <p className="text-gray-600 mt-1">{step.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {step.tools.map((tool, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="border p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {service.faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-600 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;