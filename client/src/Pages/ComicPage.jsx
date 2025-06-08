import React, { useState } from "react";

// Comic story content
const comicStory = [
  {
    title: "The Journey Begins",
    subtitle: "Chapter 1",
    description: "Pixel Cat awakens in a mysterious forest filled with glowing mushrooms and floating lights. The air sparkles with magic as our hero takes the first steps into an unknown world, heart racing with excitement and wonder.",
    longDescription: "In the depths of the Enchanted Grove, where ancient trees whisper secrets and starlight dances through emerald leaves, Pixel Cat's adventure truly begins. Every shadow holds a mystery, every sound tells a story, and every step forward leads deeper into a realm where imagination becomes reality."
  },
  {
    title: "The Journey Begins",
    subtitle: "Chapter 2",
    description: "Along the winding path, Pixel Cat encounters the Forest Guardians - wise creatures who have protected these lands for centuries. They share ancient wisdom and offer guidance for the challenging journey ahead.",
    longDescription: "The Guardians, with their luminescent eyes and gentle voices, reveal the true purpose of Pixel Cat's quest. Each Guardian carries a piece of the puzzle, and together they illuminate the path that leads to the heart of the mystery that has drawn our hero to this magical realm."
  },
  {
    title: "The Journey Begins",
    subtitle: "Chapter 3",
    description: "At the heart of the forest lies an ancient crystal that pulses with otherworldly energy. Pixel Cat realizes this discovery will change everything - not just for the forest, but for all the worlds beyond.",
    longDescription: "The Crystal of Infinite Stories stands before Pixel Cat, its faceted surface reflecting not just light, but entire universes of possibility. This moment marks the culmination of the journey and the beginning of an even greater adventure that stretches across time and space."
  },
  {
    title: "The Journey Begins",
    subtitle: "Chapter 4",
    description: "With newfound wisdom and magical allies, Pixel Cat emerges as the chosen guardian of the crystal's power. The forest celebrates as our hero prepares for the next chapter of adventures yet to come.",
    longDescription: "As the first rays of dawn break through the canopy, Pixel Cat stands transformed - no longer just an explorer, but a true guardian of the mystical forces that bind all worlds together. The journey that began with curiosity now continues with purpose and responsibility."
  }
];

export default function ComicStoryPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % comicStory.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + comicStory.length) % comicStory.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  React.useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const currentChapter = comicStory[currentSlide];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation Header */}
      <nav className="backdrop-blur-xl bg-white/95 shadow-lg sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Comic Story 
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-600 font-medium">
                Chapter {currentSlide + 1} of {comicStory.length}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 p-6">
        <main className="max-w-5xl mx-auto">
          {/* Story Title */}
          <section className="text-center mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-4 leading-tight">
                  Your Creative 
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Comic Story
                  </span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  An epic tale of discovery, friendship, and magic that spans across mystical realms and hidden worlds.
                </p>
              </div>
            </div>
          </section>

          {/* Main Story Content */}
          <section className="mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden relative">
              <div className="p-12 min-h-[600px] flex flex-col justify-center">
                <div className="max-w-4xl mx-auto space-y-10">
                  {/* Chapter badge */}
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl px-6 py-3 shadow-xl">
                      <span className="text-white font-bold text-lg">{currentChapter.subtitle}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <h2 className="text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
                      {currentChapter.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8"></div>
                  </div>
                  
                  <div className="space-y-8 text-center">
                    <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                      {currentChapter.description}
                    </p>
                    
                    <p className="text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
                      {currentChapter.longDescription}
                    </p>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-center space-x-6 pt-12">
                    <button
                      onClick={prevSlide}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className={`px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3 ${
                        isAutoPlay 
                          ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' 
                          : 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        {isAutoPlay ? (
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        )}
                      </svg>
                      <span>{isAutoPlay ? 'Pause' : 'Auto Play'}</span>
                    </button>
                    
                    <button
                      onClick={nextSlide}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter Navigation */}
          <section className="flex justify-center space-x-4 mb-8 flex-wrap gap-2">
            {comicStory.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-110 shadow-lg'
                    : 'bg-white/70 text-slate-600 hover:bg-white/90 hover:scale-105'
                }`}
              >
                Chapter {index + 1}
              </button>
            ))}
          </section>

          {/* Story Progress */}
          <section className="max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-600 font-medium">Story Progress</span>
                <span className="text-slate-500 text-sm">{Math.round(((currentSlide + 1) / comicStory.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${((currentSlide + 1) / comicStory.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500">
                <span>Beginning</span>
                <span>The End</span>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="flex flex-wrap justify-center gap-4 pt-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Download Story</span>
            </button>
            
            <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Share Story</span>
            </button>
            
            <button 
              onClick={() => goToSlide(0)}
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              <span>Start Over</span>
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}