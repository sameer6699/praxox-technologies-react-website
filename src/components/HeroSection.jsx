import { useState, useEffect, useRef } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const ANIMATION_DURATION = 600;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null); // 'next' or 'prev'
  const autoPlayRef = useRef(null);

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

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    } else {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
      else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying((v) => !v);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAutoPlaying, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setIsTransitioning(false);
      setDirection(null);
    }, ANIMATION_DURATION);
  };
  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setIsTransitioning(false);
      setDirection(null);
    }, ANIMATION_DURATION);
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

  // Animation classes
  function getCardClass(type) {
    // type: 'main' or 'next'
    if (!direction) return type === 'main' ? 'hero-main' : 'hero-next';
    if (direction === 'next' || direction === 'prev') {
      if (type === 'main') return 'hero-main hero-main-exit-true';
      if (type === 'next') return 'hero-next hero-next-enter-true';
    }
    return '';
  }

  const getCurrentCard = () => cards[currentIndex];
  const getNextCard = () => cards[(currentIndex + 1) % cards.length];
  const getPrevCard = () => cards[(currentIndex - 1 + cards.length) % cards.length];

  // For prev, show previous card as the 'next' card
  const nextCard = direction === 'prev' ? getPrevCard() : getNextCard();

  return (
    <div className="flex flex-col w-full relative min-h-[700px]">
      <style>{`
        .hero-main {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 65%;
          z-index: 2;
          transform: translateX(0) scale(1);
          opacity: 1;
          transition: transform ${ANIMATION_DURATION}ms cubic-bezier(.7,.2,.2,1), opacity ${ANIMATION_DURATION}ms;
        }
        .hero-next {
          position: absolute;
          right: 0; top: 40px; bottom: 40px;
          width: 28%;
          z-index: 1;
          transform: translateX(0) scale(0.85);
          opacity: 0.85;
          transition: transform ${ANIMATION_DURATION}ms cubic-bezier(.7,.2,.2,1), opacity ${ANIMATION_DURATION}ms;
        }
        /* Main card always moves left and fades out */
        .hero-main-exit-true {
          transform: translateX(-40%) scale(0.7);
          opacity: 0;
          z-index: 1;
        }
        /* Incoming card always comes from right, grows, and fades in */
        .hero-next-enter-true {
          transform: translateX(-65vw) scale(1);
          opacity: 1;
          z-index: 2;
        }
        .hero-anim-wrapper {
          position: relative;
          width: 100vw;
          min-height: 540px;
          height: 540px;
          max-width: 100vw;
        }
      `}</style>
      {/* Heading */}
      <div className="w-full ml-8 mt-4 mb-8">
        <h1 className="text-left text-4xl md:text-7xl font-serif text-[#c0390b] leading-tight">
          Technology that matters
        </h1>
      </div>
      {/* Animated Cards */}
      <div className="hero-anim-wrapper">
        {/* Main Card (left) */}
        <div className={getCardClass('main')}>
          {renderCard(getCurrentCard(), true)}
        </div>
        {/* Next Card (right, small) */}
        <div className={getCardClass('next')}>
          {renderCard(nextCard, false)}
        </div>
      </div>
      {/* Progress Indicators - centered below cards */}
      <div className="w-full flex justify-center mt-8 gap-3 z-10">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            disabled={isTransitioning}
            className="group relative disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-orange-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`} />
            <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
              {cards[index].title}
            </div>
          </button>
        ))}
      </div>
      {/* Navigation Controls */}
      <div className="absolute right-8 bottom-8 flex flex-row gap-4 z-10">
        <button 
          onClick={handlePrev}
          disabled={isTransitioning}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={handleNext}
          disabled={isTransitioning}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8 flex items-center gap-2 text-sm text-gray-600">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
        <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
      </div>
    </div>
  );

  function renderCard(card, isMain) {
    return (
      <div
        className={`bg-white rounded-2xl shadow-2xl p-6 flex flex-col h-full w-full transition-all duration-700 ease-out ${isMain ? '' : ''}`}
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.98))`,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}
      >
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
            {card.category}
          </span>
          {isMain && (
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          )}
        </div>
        {/* Title */}
        <div className="flex justify-between items-start mb-4">
          <h3 className={`font-bold text-gray-800 ${isMain ? 'text-xl' : 'text-sm'} leading-tight`}>
            {card.title}
          </h3>
          {isMain && (
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300">
              Read more
            </button>
          )}
        </div>
        {/* Media Container */}
        <div className="relative flex-1 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          {card.type === "video" ? (
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            >
              <source src={card.video} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-full object-cover transition-transform duration-700" 
            />
          )}
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-${card.gradient} opacity-20`}></div>
          {isMain && (
            <>
              {/* Play Button Overlay for videos */}
              {card.type === "video" && (
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-4 border-2 border-orange-500 flex items-center justify-center transition-all duration-300 shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6 4 20 12 6 20 6 4"></polygon>
                  </svg>
                </button>
              )}
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                  {card.overlayText}
                </div>
                <p className="text-white/90 text-lg mt-2 drop-shadow-lg">
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
