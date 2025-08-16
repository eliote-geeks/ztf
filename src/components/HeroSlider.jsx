import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaPlay, 
  FaPause,
  FaBook,
  FaGraduationCap,
  FaDatabase,
  FaNewspaper
} from 'react-icons/fa';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Bibliothèque Numérique ZTF",
      subtitle: "Plus de 15 000 documents académiques à votre disposition",
      description: "Découvrez notre vaste collection d'ouvrages théologiques, historiques et culturels camerounais. Un patrimoine numérique unique au service de la recherche académique.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center",
      overlay: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
      cta: {
        primary: { text: "Explorer le catalogue", icon: FaBook, action: "/catalogue" },
        secondary: { text: "En savoir plus", icon: null, action: "/infos" }
      }
    },
    {
      id: 2,
      title: "Recherche Académique",
      subtitle: "Ressources spécialisées pour vos travaux de recherche",
      description: "Accédez à CAIRN, OpenEdition et une multitude de bases de données académiques. Tous les outils nécessaires pour vos projets de recherche et publications.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop&crop=center",
      overlay: "linear-gradient(135deg, rgba(52,152,219,0.7) 0%, rgba(52,152,219,0.3) 100%)",
      cta: {
        primary: { text: "Accéder aux ressources", icon: FaDatabase, action: "/ressources" },
        secondary: { text: "Guide d'utilisation", icon: null, action: "/infos" }
      }
    },
    {
      id: 3,
      title: "Formation & Accompagnement",
      subtitle: "Développez vos compétences académiques et professionnelles",
      description: "Formations en recherche documentaire, ateliers d'écriture académique et accompagnement personnalisé pour vos projets de thèse et mémoires.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center",
      overlay: "linear-gradient(135deg, rgba(46,204,113,0.7) 0%, rgba(46,204,113,0.3) 100%)",
      cta: {
        primary: { text: "Nos formations", icon: FaGraduationCap, action: "/infos" },
        secondary: { text: "Prendre rendez-vous", icon: null, action: "/auth" }
      }
    },
    {
      id: 4,
      title: "Actualités & Publications",
      subtitle: "Restez informé des dernières recherches et découvertes",
      description: "Suivez les publications de nos chercheurs, les actualités du monde académique camerounais et les dernières acquisitions de notre collection.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=1080&fit=crop&crop=center",
      overlay: "linear-gradient(135deg, rgba(230,126,34,0.7) 0%, rgba(230,126,34,0.3) 100%)",
      cta: {
        primary: { text: "Lire les actualités", icon: FaNewspaper, action: "/actualites" },
        secondary: { text: "S'abonner", icon: null, action: "/auth" }
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="hero-slider">
      <div className="slider-container">
        <AnimatePresence mode="wait" custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="slide"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            <div 
              className="slide-overlay"
              style={{ background: slides[currentSlide].overlay }}
            />
            
            <div className="slide-content">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-xl-7">
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      className="content-wrapper"
                    >
                      <motion.div variants={itemVariants} className="slide-badge">
                        <span className="badge-dot"></span>
                        Centre d'Excellence Académique
                      </motion.div>
                      
                      <motion.h1 variants={itemVariants} className="slide-title">
                        {slides[currentSlide].title}
                      </motion.h1>
                      
                      <motion.h2 variants={itemVariants} className="slide-subtitle">
                        {slides[currentSlide].subtitle}
                      </motion.h2>
                      
                      <motion.p variants={itemVariants} className="slide-description">
                        {slides[currentSlide].description}
                      </motion.p>
                      
                      <motion.div variants={itemVariants} className="slide-actions">
                        <a 
                          href={slides[currentSlide].cta.primary.action}
                          className="btn btn-primary btn-lg"
                        >
                          {slides[currentSlide].cta.primary.icon && 
                            React.createElement(slides[currentSlide].cta.primary.icon, { 
                              size: 16, 
                              className: "me-2" 
                            })
                          }
                          {slides[currentSlide].cta.primary.text}
                        </a>
                        <a 
                          href={slides[currentSlide].cta.secondary.action}
                          className="btn btn-outline-light btn-lg"
                        >
                          {slides[currentSlide].cta.secondary.text}
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="slider-controls">
        <button 
          className="control-btn prev-btn"
          onClick={prevSlide}
          aria-label="Slide précédent"
        >
          <FaArrowLeft size={16} />
        </button>
        
        <button 
          className="control-btn next-btn"
          onClick={nextSlide}
          aria-label="Slide suivant"
        >
          <FaArrowRight size={16} />
        </button>
        
        <button 
          className="control-btn play-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
        </button>
      </div>

      {/* Dots Indicators */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Aller au slide ${index + 1}`}
          >
            <span className="dot-inner"></span>
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="slider-progress">
        <motion.div 
          className="progress-bar"
          initial={{ width: "0%" }}
          animate={{ width: isPlaying ? "100%" : "0%" }}
          transition={{ 
            duration: isPlaying ? 5 : 0, 
            ease: "linear",
            repeat: isPlaying ? Infinity : 0
          }}
          key={`${currentSlide}-${isPlaying}`}
        />
      </div>

      <style jsx>{`
        .hero-slider {
          position: relative;
          height: 70vh;
          min-height: 600px;
          max-height: 800px;
          width: 100%;
          overflow: hidden;
          border-radius: 0 0 24px 24px;
          margin-bottom: 2rem;
        }

        .slider-container {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .slide-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .content-wrapper {
          max-width: 800px;
        }

        .slide-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--warning);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        .slide-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.1;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .slide-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--warning);
          margin-bottom: 1.5rem;
          line-height: 1.3;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .slide-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .slide-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .slide-actions .btn {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 25px;
          border: 2px solid transparent;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          min-width: 200px;
          justify-content: center;
        }

        .slide-actions .btn-primary {
          background: var(--warning);
          color: var(--dark-900);
          border-color: var(--warning);
        }

        .slide-actions .btn-primary:hover {
          background: #f1c40e;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(241, 196, 14, 0.3);
        }

        .slide-actions .btn-outline-light {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .slide-actions .btn-outline-light:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
        }

        /* Navigation Controls */
        .slider-controls {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
          z-index: 10;
          pointer-events: none;
        }

        .control-btn {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          pointer-events: auto;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }

        .play-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          width: 40px;
          height: 40px;
        }

        /* Dots Indicators */
        .slider-dots {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 10;
        }

        .dot {
          background: transparent;
          border: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .dot-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .dot.active .dot-inner {
          background: var(--warning);
          width: 16px;
          height: 16px;
          box-shadow: 0 0 15px rgba(241, 196, 14, 0.5);
        }

        .dot:hover .dot-inner {
          background: rgba(255, 255, 255, 0.8);
          transform: translate(-50%, -50%) scale(1.2);
        }

        /* Progress Bar */
        .slider-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 10;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--warning), #f1c40e);
          transform-origin: left;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .slide-title {
            font-size: 3rem;
          }
          
          .slide-subtitle {
            font-size: 1.3rem;
          }
          
          .slide-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-slider {
            height: 60vh;
            min-height: 500px;
          }
          
          .slide-title {
            font-size: 2.2rem;
          }
          
          .slide-subtitle {
            font-size: 1.1rem;
          }
          
          .slide-description {
            font-size: 0.95rem;
            margin-bottom: 2rem;
          }
          
          .slide-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .slide-actions .btn {
            min-width: 250px;
            padding: 0.875rem 1.5rem;
          }
          
          .slider-controls {
            padding: 0 1rem;
          }
          
          .control-btn {
            width: 40px;
            height: 40px;
          }
          
          .play-btn {
            top: 1rem;
            right: 1rem;
            width: 35px;
            height: 35px;
          }
          
          .slider-dots {
            bottom: 1rem;
            gap: 0.75rem;
          }
          
          .dot {
            width: 12px;
            height: 12px;
          }
          
          .dot-inner {
            width: 6px;
            height: 6px;
          }
          
          .dot.active .dot-inner {
            width: 12px;
            height: 12px;
          }
        }

        @media (max-width: 480px) {
          .hero-slider {
            height: 55vh;
            min-height: 450px;
            border-radius: 0 0 16px 16px;
          }
          
          .slide-content {
            padding: 1rem;
          }
          
          .slide-title {
            font-size: 1.8rem;
            margin-bottom: 0.75rem;
          }
          
          .slide-subtitle {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          
          .slide-description {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }
          
          .slide-badge {
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
            margin-bottom: 1rem;
          }
          
          .slide-actions .btn {
            min-width: 200px;
            padding: 0.75rem 1.25rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;