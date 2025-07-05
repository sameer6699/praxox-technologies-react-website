import { useState, useEffect } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ANIMATION_DURATION = 800; // Increased for smoother animation

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null); // 'next' or 'prev'

  const cards = [
    {
      id: 1,
      category: "Our Story",
      title: "Press Release",
      type: "video",
      video: video1,
      overlayText: "Praxos Technologies",
      description: "Leading the future of technology",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      category: "Insights",
      title: "Satellite Technology In 2025 And Beyond",
      type: "image",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      overlayText: "Innovation Hub",
      description: "Cutting-edge solutions",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      category: "Research",
      title: "AI & Machine Learning Breakthroughs",
      type: "video",
      video: video2,
      overlayText: "Smart Solutions",
      description: "Intelligent technology",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      category: "Development",
      title: "Cloud Computing Solutions",
      type: "image",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
      overlayText: "Cloud Platform",
      description: "Scalable infrastructure",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: 5,
      category: "Future",
      title: "Quantum Computing Research",
      type: "image",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
      overlayText: "Quantum Leap",
      description: "Next generation computing",
      gradient: "from-purple-500 to-pink-600"
    }
  ];



  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    
    // Add a small delay for better visual feedback
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setIsTransitioning(false);
      setDirection(null);
    }, ANIMATION_DURATION + 100);
  };
  
  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    
    // Add a small delay for better visual feedback
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setIsTransitioning(false);
      setDirection(null);
    }, ANIMATION_DURATION + 100);
  };
  const goToCard = (idx) => {
    if (isTransitioning || idx === currentIndex) return;
    setDirection(idx > currentIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsTransitioning(false);
      setDirection(null);
    }, ANIMATION_DURATION);
  };

  // Enhanced animation classes
  function getCardClass(type) {
    if (!direction) return type === 'main' ? 'hero-main' : '';
    if (direction === 'next' || direction === 'prev') {
      if (type === 'main') return `hero-main hero-main-exit-${direction}`;
    }
    return '';
  }

  const getCurrentCard = () => cards[currentIndex];

  return (
    <div className="flex flex-col w-full relative min-h-screen">
      <style>{`
        .hero-main {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 100%;
          max-width: none;
          z-index: 2;
          transform: translateX(0) scale(1) rotateY(0deg);
          opacity: 1;
          transition: all ${ANIMATION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: brightness(1) contrast(1);
        }
        /* Exit animation for next direction (slide left) */
        .hero-main-exit-next {
          transform: translateX(-100%) scale(0.7) rotateY(-20deg) translateY(-20px);
          opacity: 0;
          z-index: 1;
          filter: brightness(0.5) contrast(0.7);
        }
        /* Exit animation for prev direction (slide right) */
        .hero-main-exit-prev {
          transform: translateX(100%) scale(0.7) rotateY(20deg) translateY(-20px);
          opacity: 0;
          z-index: 1;
          filter: brightness(0.5) contrast(0.7);
        }
        .hero-next {
          position: absolute;
          right: 0; top: 40px; bottom: 40px;
          width: 35%;
          max-width: none;
          z-index: 1;
          transform: translateX(0) scale(0.85) rotateY(5deg);
          opacity: 0.7;
          transition: all ${ANIMATION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: brightness(0.8) contrast(0.9);
        }

        /* Enhanced enter animation with 3D effect */
        .hero-next-enter-true {
          transform: translateX(-90%) scale(1.05) rotateY(0deg) translateY(0px);
          opacity: 1;
          z-index: 2;
          filter: brightness(1.1) contrast(1.1);
        }
        .hero-anim-wrapper {
          position: relative;
          width: 100%;
          min-height: 60vh;
          height: 60vh;
          perspective: 1000px;
          padding: 0 0.5rem;
        }
        @media (min-width: 768px) {
          .hero-anim-wrapper {
            min-height: 70vh;
            height: 70vh;
            padding: 0 1rem;
          }
        }
        @media (min-width: 1024px) {
          .hero-anim-wrapper {
            min-height: 75vh;
            height: 75vh;
            padding: 0 1.5rem;
          }
        }
        @media (min-width: 1536px) {
          .hero-anim-wrapper {
            min-height: 80vh;
            height: 80vh;
            padding: 0 2rem;
          }
        }
        /* Enhanced card hover effects */
        .hero-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
          will-change: transform;
        }
        .hero-card:hover {
          transform: translateY(-8px) scale(1.03) rotateY(2deg);
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
        }
        /* Enhanced media hover effects */
        .hero-media {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        .hero-card:hover .hero-media {
          transform: scale(1.08) rotateZ(1deg);
        }
        /* Enhanced progress indicators */
        .progress-dot {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          will-change: transform;
        }
        .progress-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transition: all 0.4s ease;
        }
        .progress-dot:hover::before {
          width: 28px;
          height: 28px;
        }
        .progress-dot.active::before {
          width: 36px;
          height: 36px;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.5) 0%, transparent 70%);
        }
        .progress-dot:hover {
          transform: scale(1.2);
        }
        /* Enhanced navigation buttons */
        .nav-btn {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(10px);
          will-change: transform;
        }
        .nav-btn:hover {
          transform: scale(1.15) translateY(-3px) rotateY(5deg);
          box-shadow: 0 15px 35px -10px rgba(251, 146, 60, 0.5);
        }
        .nav-btn:active {
          transform: scale(0.95) translateY(0px) rotateY(0deg);
          transition: all 0.1s ease;
        }
        /* Card transition overlay effect */
        .card-transition-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
        .card-transition-overlay.active {
          opacity: 0;
        }
        /* Enhanced floating animation for overlay text */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotateZ(0deg); 
            filter: brightness(1);
          }
          50% { 
            transform: translateY(-12px) rotateZ(0.5deg); 
            filter: brightness(1.1);
          }
        }
        .floating-text {
          animation: float 8s ease-in-out infinite;
          will-change: transform;
        }
        /* Enhanced pulse animation for play button */
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 25px rgba(251, 146, 60, 0.4);
            transform: scale(1) rotateZ(0deg);
          }
          50% { 
            box-shadow: 0 0 40px rgba(251, 146, 60, 0.7);
            transform: scale(1.08) rotateZ(2deg);
          }
        }
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
      {/* Heading with enhanced animation */}
      <div className="w-full pt-8 mb-8 px-4">
        <h1 className="text-left text-4xl md:text-7xl lg:text-8xl font-bold text-orange-500 leading-tight transition-all duration-700 hover:scale-105">
          Technology that matters.
        </h1>
      </div>
      {/* Animated Cards */}
      <div className="hero-anim-wrapper relative">
        {/* Transition Overlay */}
        <div className={`card-transition-overlay ${isTransitioning ? 'active' : ''}`}></div>
        {/* Main Card */}
        <div className={getCardClass('main')}>
          {renderCard(getCurrentCard(), true)}
        </div>
        {/* Right-side Navigation Controls */}
        <div className="absolute flex flex-row gap-4 z-20 bottom-8" style={{top: 'unset', right: '-2.5rem'}}>
          <button 
            onClick={handlePrev}
            disabled={isTransitioning}
            className="nav-btn group w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="text-2xl font-bold">{'<'}</span>
          </button>
          <button 
            onClick={handleNext}
            disabled={isTransitioning}
            className="nav-btn group w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="text-2xl font-bold">{'>'}</span>
          </button>
        </div>
      </div>
      {/* Enhanced Progress Indicators */}
      <div className="w-full flex justify-center mt-8 gap-4 z-10 px-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            disabled={isTransitioning}
            className="group relative disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className={`progress-dot w-4 h-4 rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'active bg-orange-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`} />
            <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-700 shadow-lg`}>
              {cards[index].title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  function renderCard(card, isMain) {
    return (
      <div
        className={`hero-card bg-white rounded-2xl shadow-2xl p-12 flex flex-col h-full w-full transition-all duration-700 ease-out`}
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.98))`,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          minWidth: '100%',
          width: '100%',
          maxWidth: 'none'
        }}
      >
        {/* Category Badge with enhanced styling */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-semibold uppercase tracking-wide shadow-lg transition-all duration-300 hover:scale-105">
            {card.category}
          </span>
        </div>
        {/* Title with enhanced styling */}
        <div className="flex justify-between items-start mb-4">
          <h3 className={`font-bold text-gray-800 ${isMain ? 'text-xl' : 'text-sm'} leading-tight transition-all duration-300 hover:text-orange-600`}>
            {card.title}
          </h3>
          {isMain && (
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
              Read more
            </button>
          )}
        </div>
        {/* Enhanced Media Container */}
        <div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          {card.type === "video" ? (
            <video
              autoPlay
              loop
              muted
              className="hero-media w-full h-full object-cover"
            >
              <source src={card.video} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={card.image} 
              alt={card.title} 
              className="hero-media w-full h-full object-cover transition-transform duration-700" 
            />
          )}
          {/* Enhanced Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-${card.gradient} opacity-30 transition-opacity duration-500`}></div>
          {isMain && (
            <>
              {/* Enhanced Play Button Overlay for videos */}
              {card.type === "video" && (
                <button className="pulse-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-95 rounded-full p-5 border-2 border-orange-500 flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-110">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                    <polygon points="6 4 20 12 6 20 6 4"></polygon>
                  </svg>
                </button>
              )}
              {/* Enhanced Overlay Text with floating animation */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="floating-text text-4xl md:text-5xl font-bold text-white drop-shadow-2xl transition-all duration-500">
                  {card.overlayText}
                </div>
                <p className="text-white/90 text-lg mt-2 drop-shadow-lg transition-all duration-500 delay-100">
                  {card.description}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default HeroSection;
