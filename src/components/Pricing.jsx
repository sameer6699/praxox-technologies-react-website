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
    <div className="mt-20 flex justify-center">
      <div className="bg-white/90 rounded-2xl shadow-lg p-10 w-full max-w-7xl relative">
        <h2 className="text-3xl sm:text-5xl text-orange-600 font-bold mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6">
              <h3 className="font-bold text-lg mb-2 text-neutral-900">{service.title}</h3>
              <p className="text-neutral-600 mb-8">{service.description}</p>
              <div className="mt-auto text-orange-600">{service.icon}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-8">
          <a
            href="#contact"
            className="bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
