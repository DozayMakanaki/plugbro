import React from "react";

const FeaturedServices: React.FC = () => {
  const services = [
    { title: "Logo Design", price: "$50", seller: "John Doe" },
    { title: "SEO Optimization", price: "$100", seller: "Jane Smith" },
    // Add more services here...
  ];

  return (
    <div className="py-8">
      <h2 className="text-center text-2xl font-bold text-gray-700">Featured Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow hover:shadow-lg"
          >
            <h3 className="font-semibold">{service.title}</h3>
            <p className="text-gray-500">By {service.seller}</p>
            <p className="mt-2 font-bold text-plugbroPurple">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
