'use client';

import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Development & Testing",
      description: "Tailored software solutions and thorough testing to ensure quality and scalability.",
      image: "/images/Rectangle 199.png"
    },
    {
      id: 2,
      title: "Offshore Services",
      description: "Cost-effective offshoring with global talent for seamless, high-quality delivery.",
      image: "/images/Rectangle 200.png"
    },
    {
      id: 3,
      title: "Data Analytics",
      description: "AI-powered insights to transform raw data into actionable business intelligence.",
      image: "/images/Rectangle 201.png"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable, secure cloud services for seamless operations and significant long-term cost reduction.",
      image: "/images/Rectangle 202.png"
    },
    {
      id: 5,
      title: "Managed IT Services",
      description: "Comprehensive IT management to ensure smooth operations and minimize downtime.",
      image: "/images/Rectangle 203.png"
    },
    {
      id: 6,
      title: "Cybersecurity",
      description: "Advanced, innovative solutions to safeguard your systems from cyber threats and ensure strict compliance.",
      image: "/images/Rectangle 204.png"
    },
    {
      id: 7,
      title: "Implementation Services",
      description: "IT project implementation with seamless integration to optimize performance.",
      image: "/images/Rectangle 199.png"
    },
    {
      id: 8,
      title: "Monitoring and Support",
      description: "24/7 monitoring and support to keep your systems secure and accessible.",
      image: "/images/Rectangle 200.png"
    }
  ];

  return (
    <div className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 font-raleway">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto font-raleway">
          We offer a comprehensive range of technology services to help your business thrive in the digital age
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="  overflow-hidden  transition-shadow duration-300"
            >
              {/* Service Image */}
              <div 
                className="h-64 flex items-center justify-center relative overflow-hidden group"
                style={{
                  backgroundImage: `url("${service.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.filter = 'brightness(0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon or text on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <p className="text-sm font-medium font-raleway">View Details</p>
                  </div>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="py-6 ">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-200 cursor-pointer font-raleway">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 hover:text-gray-800 transition-colors duration-200 font-raleway">
                  {service.description}
                </p>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:translate-x-1 transform font-raleway">
                  Read More
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;