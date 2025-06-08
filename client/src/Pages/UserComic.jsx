import React, { useState } from "react";

// Example user comics data
const userComics = [
  {
    id: 1,
    title: "The Lost Treasure",
    story: "A daring adventure to find the hidden treasure in the ancient ruins.",
    cover: "https://storage.googleapis.com/a1aa/image/ad36748b-b2fa-43e3-2e0a-e833e58127e6.jpg",
    genre: "Adventure",
    panels: 8,
    created: "2 days ago"
  },
  {
    id: 2,
    title: "Robot's Day Out",
    story: "Follow Robo as he explores the city and learns about friendship.",
    cover: "https://storage.googleapis.com/a1aa/image/e345e811-c932-4507-2335-47b40a8f77c1.jpg",
    genre: "Sci-Fi",
    panels: 6,
    created: "1 week ago"
  },
  {
    id: 3,
    title: "Pixel Cat's Quest",
    story: "Pixel Cat embarks on a quest to save the digital kingdom.",
    cover: "https://storage.googleapis.com/a1aa/image/1aa3cdda-be24-4e92-051f-fb1dc96a2de5.jpg",
    genre: "Fantasy",
    panels: 10,
    created: "3 days ago"
  },
];

export default function UserComic() {
  const [selectedComic, setSelectedComic] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation Header */}
      <nav className="backdrop-blur-xl bg-white/95 shadow-lg sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Comic Library
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
                Library
              </button>
              <button className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
                Create
              </button>
              <button className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
                Profile
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center p-6 relative z-10">
        <main className="max-w-6xl w-full">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-4 leading-tight">
              Your Creative
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Comic Stories
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Manage and explore your collection of AI-generated comic adventures. 
              <span className="font-medium text-blue-600"> Each story is a unique masterpiece waiting to be shared.</span>
            </p>
            
            {/* Stats Bar */}
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">{userComics.length}</div>
                <div className="text-sm text-slate-600">Comics Created</div>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">{userComics.reduce((acc, comic) => acc + comic.panels, 0)}</div>
                <div className="text-sm text-slate-600">Total Panels</div>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">3</div>
                <div className="text-sm text-slate-600">Genres</div>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Add New Comic Card */}
            <div 
              className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredCard('add')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5">
                <div className="bg-white rounded-2xl w-full h-full"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[280px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                
                <h2 className="text-xl font-bold text-slate-800 mb-3">Create New Comic</h2>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Start your next creative journey! Generate amazing comic stories with AI.
                </p>
                
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
                  Start Creating
                </button>
              </div>
            </div>

            {/* User Comic Cards */}
            {userComics.map((comic) => (
              <div
                key={comic.id}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(comic.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedComic(comic)}
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5">
                  <div className="bg-white rounded-2xl w-full h-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={comic.cover}
                      alt={comic.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Genre badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      {comic.genre}
                    </div>
                    
                    {/* Panel count */}
                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {comic.panels} panels
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-slate-800 leading-tight">{comic.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{comic.story}</p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center space-x-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>{comic.created}</span>
                      </span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
                      View Comic
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Quick Actions */}
          <section className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span>Export All Comics</span>
            </button>
            
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Share Collection</span>
            </button>
            
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Browse Templates</span>
            </button>
          </section>
        </main>
      </div>

      {/* Modal for selected comic */}
      {selectedComic && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedComic(null)}>
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-white/30" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800">{selectedComic.title}</h3>
              <button 
                onClick={() => setSelectedComic(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <img
              src={selectedComic.cover}
              alt={selectedComic.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">{selectedComic.story}</p>
              
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{selectedComic.genre}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>{selectedComic.panels} panels</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>{selectedComic.created}</span>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Read Comic
                </button>
                <button className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Edit Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}