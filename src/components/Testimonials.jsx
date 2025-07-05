import { testimonials } from "../constants";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:scale-105 hover:border-neutral-600/70 hover:shadow-2xl hover:shadow-orange-500/10">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-800 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 font-light italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Section */}
                <div className="flex items-center gap-4 pt-6 border-t border-neutral-700/50">
                  <div className="relative">
                    <img
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-neutral-600 group-hover:ring-orange-500/50 transition-all duration-300"
                      src={testimonial.image}
                      alt={testimonial.user}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-neutral-900"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg group-hover:text-orange-400 transition-colors duration-300">
                      {testimonial.user}
                    </h4>
                    <p className="text-gray-400 text-sm font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-800/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-full px-8 py-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-300 font-medium">
              4.9/5 Average Rating from 500+ Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
