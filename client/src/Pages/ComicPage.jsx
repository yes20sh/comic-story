import React, { useState } from "react";

// Example comic images (replace with your actual URLs)
const comicImages = [
  "https://storage.googleapis.com/a1aa/image/ad36748b-b2fa-43e3-2e0a-e833e58127e6.jpg",
  "https://storage.googleapis.com/a1aa/image/e345e811-c932-4507-2335-47b40a8f77c1.jpg",
  "https://storage.googleapis.com/a1aa/image/1aa3cdda-be24-4e92-051f-fb1dc96a2de5.jpg",
];

export default function ComicPage() {
  const [selectedPanel, setSelectedPanel] = useState(null);

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
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Comic Gallery
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
                Gallery
              </button>
              <button className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
                About
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center p-6 relative z-10">
        <main className="max-w-6xl w-full space-y-8">
          {/* Comic Title and Description */}
          <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border border-white/30 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 leading-tight">
                The Adventures of 
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Pixel Cat
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Follow Pixel Cat as they explore a world full of surprises and quirky friends! 
                <span className="font-medium text-blue-600"> Each panel tells a unique story of adventure and discovery.</span>
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>3 Panels</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Adventure Genre</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Interactive</span>
                </div>
              </div>
            </div>
          </section>

          {/* Comic Panels */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comicImages.map((img, idx) => (
              <div
                key={idx}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedPanel(idx)}
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5">
                  <div className="bg-white rounded-2xl w-full h-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={img}
                      alt={`Comic panel ${idx + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Panel number badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">{idx + 1}</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Panel {idx + 1}</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      {idx === 0 && "Pixel Cat begins the adventure"}
                      {idx === 1 && "Discovering new friends along the way"}
                      {idx === 2 && "The journey reaches its exciting climax"}
                    </p>
                    
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Action Buttons */}
          <section className="flex flex-wrap justify-center gap-4 pt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Download Comic</span>
            </button>
            
            <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Share Comic</span>
            </button>
            
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span>Create New</span>
            </button>
          </section>
        </main>
      </div>

      {/* Modal for selected panel */}
      {selectedPanel !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedPanel(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">Panel {selectedPanel + 1}</h3>
              <button 
                onClick={() => setSelectedPanel(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <img
              src={comicImages[selectedPanel]}
              alt={`Comic panel ${selectedPanel + 1}`}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-slate-600">
              {selectedPanel === 0 && "Pixel Cat begins their exciting adventure in this opening panel, setting the stage for the journey ahead."}
              {selectedPanel === 1 && "Our hero encounters new friends and challenges, building relationships that will shape the story."}
              {selectedPanel === 2 && "The adventure reaches its thrilling conclusion as Pixel Cat faces the ultimate challenge."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}