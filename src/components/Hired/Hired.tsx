import Image from "next/image";
import React from "react";
import h1Image from "../../assets/h1.webp";
import h2Image from "../../assets/h2.webp";
import h3Image from "../../assets/h3.webp";
import h4Image from "../../assets/h4.webp";

const Hired = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "Share Your Project Requirements",
      description:
        "Provide detailed project requirements to help us understand your needs.",
      icon: "📝",
      src: h1Image,
    },
    {
      stepNumber: "02",
      title: "Select Domain-Specific Vetted Candidates",
      description:
        "We present candidates that match your project's domain expertise.",
      icon: "✔️",
      src: h2Image,
    },
    {
      stepNumber: "03",
      title: "Conduct Ideal Candidate Interview",
      description:
        "Interview the shortlisted candidates to find the perfect fit.",
      icon: "👨‍💻",
      src: h3Image,
    },
    {
      stepNumber: "04",
      title: "Initiate Onboarding for Development",
      description:
        "Start the development process with your selected candidate.",
      icon: "🚀",
      src: h4Image,
    },
  ];

  return (
    <div
      className="my-10 lg:px-20 p-20"
      style={{
        background:
          "linear-gradient(135deg, #fff5cb 0%, #b6e3d4 50%, #33a7b5 100%)",
      }}
    >
      {/* Header */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-700 mb-8">
        Need Website Developer? Hire Web Developers in Just 4 Steps
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {/* Step Number */}
            <div className="text-gray-300 text-6xl font-bold mb-4">
              {step.stepNumber}
            </div>
            {/* Icon */}
            {/* <div className="text-5xl mb-4">{step.icon}</div>  */}
            <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">
              {step.title}
            </h3>
            <Image src={step.src} width={400} height={400} alt="image" />
            {/* Use actual images or icons */}
            {/* Description */}
            {/* <p className="text-gray-600 text-center">{step.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hired;
