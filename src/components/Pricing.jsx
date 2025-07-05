import { Laptop, BrainCircuit, Hourglass, Network } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailor-made solutions that tackle unique challenges, capitalize on unique opportunities.",
    icon: <Laptop size={40} />,
  },
  {
    title: "Data and AI",
    description:
      "Seamless, AI-driven automation, cost-cutting, and informed decision-making across industries.",
    icon: <BrainCircuit size={40} />,
  },
  {
    title: "AdTech and MarTech",
    description:
      "Powerful marketing tech that personalizes experiences, drives engagement, and maximizes ROI.",
    icon: <Hourglass size={40} />,
  },
  {
    title: "Managed Services",
    description:
      "Easiness of IT operations that turns tech infrastructures into optimized business assets.",
    icon: <Network size={40} />,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.05),transparent_50%)]"></div>
      
      <div className="w-full px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-800 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <span>Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive {" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Technology Services
            </span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge solutions that drive innovation and transform businesses across industries
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex items-center justify-center w-full mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-2xl shadow-lg p-8 h-full border border-neutral-200 hover:border-orange-300 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-bold text-xl mb-4 text-neutral-900 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-auto">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 group-hover:translate-x-2"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-800/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-full px-8 py-4 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-neutral-300 font-medium">
              Ready to transform your business?
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-orange-500/25 transition-all duration-300"
            >
              Get Free Consultation
            </a>
            <a
              href="#portfolio"
              className="border-2 border-orange-500 text-orange-600 font-semibold py-4 px-8 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
