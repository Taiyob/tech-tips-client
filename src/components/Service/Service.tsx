import React from "react";

const Service = () => {
  const services = [
    {
      icon: "🛠️",
      title: "Custom Website Development Services For Your Business",
      description:
        "Our web development agency considers each project as a unique and important assignment. Delivering Professional website development services with the best class is our main concern. Our web development experts and professional developers utilize their expertise in their particular spaces. We take your brand image higher than ever.",
    },
    {
      icon: "📈",
      title: "Ensure Scalability of Your Business in Future",
      description:
        "We have highly professional website developers at your service that deal with basic format components, mobile-friendly and responsive. We transform your website in a way that it starts generating business for you online.",
    },
    {
      icon: "⚙️",
      title:
        "Website Development Services to Make The Management of A Website Hassle Free",
      description:
        "We highly value your project, and our dedicated web development services are designed to empower our clients with a strong online presence. Beyond mere promises, we actively guide our customers through every stage, ensuring the creation of visually appealing and user-friendly websites.",
    },
    {
      icon: "📊",
      title: "Proven Platform & Methodology For Web Development Solutions",
      description:
        "Ensuring a great first impression online is crucial. We apply our proven methods to your project, aiming to open doors that will undoubtedly bring more opportunities to your business.",
    },
  ];

  return (
    <div className="my-10 px-4 lg:px-20">
      {/* Header Section */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-700 mb-4">
        Professional Web Development Services
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-5xl mx-auto">
        Our best web development company considers each project as a unique and
        important assignment. Delivering Professional website development
        services with the best class is our main concern. Our web development
        experts and professional developers utilize their expertise in their
        particular spaces. We take your brand image higher than ever.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white hover:shadow-lg hover:translate-y-[-7px] p-6 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out"
          >
            {/* Icon Section */}
            <div className="text-4xl text-blue-600">{service.icon}</div>
            {/* Content Section */}
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
