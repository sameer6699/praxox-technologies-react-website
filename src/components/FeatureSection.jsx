import { useState } from "react";
import { features } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS_TO_SHOW = 3;
const ANIMATION_DURATION = 300; // ms

const FeatureSection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null); // 'left' or 'right'

  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + CARDS_TO_SHOW < features.length;

  const handlePrev = () => {
    if (canGoLeft && !animating) {
      setDirection('left');
      setAnimating(true);
      setTimeout(() => {
        setStartIdx(startIdx - 1);
        setAnimating(false);
      }, ANIMATION_DURATION);
    }
  };
  const handleNext = () => {
    if (canGoRight && !animating) {
      setDirection('right');
      setAnimating(true);
      setTimeout(() => {
        setStartIdx(startIdx + 1);
        setAnimating(false);
      }, ANIMATION_DURATION);
    }
  };

  // Animation classes
  let animationClass = '';
  if (animating && direction === 'left') {
    animationClass = 'animate-slide-right';
  } else if (animating && direction === 'right') {
    animationClass = 'animate-slide-left';
  }

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <style>{`
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-120px); opacity: 0.7; }
        }
        @keyframes slide-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(120px); opacity: 0.7; }
        }
        .animate-slide-left {
          animation: slide-left ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1);
        }
        .animate-slide-right {
          animation: slide-right ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Solutions
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Comprehensive {" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Technology Solutions
          </span>
        </h2>
      </div>
      <div className="flex items-center justify-center mt-10 lg:mt-20 px-8 w-full">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1 transition-transform duration-300 ${animationClass}`}>
          {features.slice(startIdx, startIdx + CARDS_TO_SHOW).map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-2xl shadow-md p-6 flex flex-col h-full border border-neutral-200"
            >
              <span className="text-xs text-orange-600 font-semibold mb-2 uppercase">Feature</span>
              <div className="flex-1">
                <h5 className="mt-1 mb-4 text-xl font-bold text-neutral-900">{feature.text}</h5>
                <p className="text-md mb-6 text-neutral-600">{feature.description}</p>
              </div>
              <div className="mt-auto text-orange-700 text-3xl flex justify-end">{feature.icon}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center ml-6 space-y-4">
          <button
            onClick={handlePrev}
            disabled={!canGoLeft || animating}
            className={`bg-white rounded-full shadow p-2 border border-neutral-200 text-orange-600 hover:bg-orange-50 transition ${!canGoLeft || animating ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoRight || animating}
            className={`bg-white rounded-full shadow p-2 border border-neutral-200 text-orange-600 hover:bg-orange-50 transition ${!canGoRight || animating ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
