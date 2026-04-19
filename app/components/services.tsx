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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
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
                className="h-64 flex items-center justify-center relative"
                style={{
                  backgroundImage: `url("${service.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
              </div>
              
              {/* Service Content */}
              <div className="py-6 ">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 hover:text-gray-800 transition-colors duration-200">
                  {service.description}
                </p>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:translate-x-1 transform">
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