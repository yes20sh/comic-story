import { useState } from 'react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    storyPrompt: '',
    genre: 'adventure',
    length: 'short',
    tone: 'lighthearted'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [story, setStory] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate a sample story based on the input
    const sampleStory = `
      <h4>🎬 Panel 1: The Beginning</h4>
      <p>In a bustling city, our ${formData.genre} story begins with an unlikely hero facing an extraordinary challenge...</p>
      
      <h4>🎬 Panel 2: The Discovery</h4>
      <p>Something unexpected happens that changes everything. The ${formData.tone} tone sets the perfect mood as our story unfolds...</p>
      
      <h4>🎬 Panel 3: The Adventure</h4>
      <p>Based on your idea: "${formData.storyPrompt}", the adventure takes an exciting turn!</p>
      
      <h4>🎬 Panel 4: The Resolution</h4>
      <p>In this ${formData.length} story, everything comes together in a satisfying conclusion that will leave readers wanting more!</p>
    `;
    
    setStory(sampleStory);
    setIsLoading(false);
    setShowOutput(true);
  };

  const copyStory = () => {
    const textContent = story.replace(/<[^>]*>/g, '');
    navigator.clipboard.writeText(textContent);
  };

  const shareStory = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Comic Story',
        text: story.replace(/<[^>]*>/g, '')
      });
    }
  };

  const generateAnother = () => {
    setShowOutput(false);
    setStory('');
    setFormData({
      storyPrompt: '',
      genre: 'adventure',
      length: 'short',
      tone: 'lighthearted'
    });
  };

  return (
    <>
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-card {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 50%, rgba(240, 147, 251, 0.1) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 25px 50px rgba(102, 126, 234, 0.1);
        }

        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite alternate;
        }

        @keyframes pulse-glow {
          from { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
          to { box-shadow: 0 0 40px rgba(102, 126, 234, 0.6); }
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
        }

        .loading-spinner {
          border: 3px solid rgba(102, 126, 234, 0.3);
          border-top: 3px solid #667eea;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .story-output {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-left: 4px solid #667eea;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-delayed {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 2s;
        }
      `}</style>

      <section id="home" className="py-20 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-delayed"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="hero-card rounded-3xl p-12 mb-12 floating-animation">
            <div className="mb-8">
              <h2 className="text-6xl md:text-7xl font-black text-slate-800 mb-6 leading-tight">
                Create Amazing 
                <span className="gradient-text block">Comic Stories</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                Transform your imagination into captivating comic narratives with our AI-powered story generator. 
                <span className="font-medium text-blue-600">Just describe your idea, and watch it come to life!</span>
              </p>
            </div>
            
            {/* Enhanced Form Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-white/30">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center pulse-glow">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Generate Your Story</h3>
                  <p className="text-slate-600 text-sm">Powered by advanced AI technology</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="storyPrompt" className="block text-sm font-semibold text-slate-700 mb-3 flex items-center space-x-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                    </svg>
                    <span>Describe your comic story idea</span>
                  </label>
                  <textarea 
                    name="storyPrompt"
                    value={formData.storyPrompt}
                    onChange={handleInputChange}
                    rows="4" 
                    className="w-full rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none px-4 py-3 text-slate-800 placeholder-slate-400 resize-none transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg"
                    placeholder="e.g., A superhero cat saves the city from evil robots while trying to find the perfect tuna sandwich..."
                    required
                  />
                  <div className="text-xs text-slate-500 mt-2 flex items-center space-x-2">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Be creative! The more details you provide, the better your story will be.</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="genre" className="block text-sm font-semibold text-slate-700 mb-2 flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <span>Genre</span>
                    </label>
                    <select 
                      name="genre"
                      value={formData.genre}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none px-4 py-3 text-slate-800 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <option value="adventure">🗺️ Adventure</option>
                      <option value="comedy">😂 Comedy</option>
                      <option value="superhero">🦸 Superhero</option>
                      <option value="fantasy">🧙 Fantasy</option>
                      <option value="sci-fi">🚀 Sci-Fi</option>
                      <option value="mystery">🔍 Mystery</option>
                      <option value="horror">👻 Horror</option>
                      <option value="romance">💕 Romance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="length" className="block text-sm font-semibold text-slate-700 mb-2 flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      <span>Story Length</span>
                    </label>
                    <select 
                      name="length"
                      value={formData.length}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none px-4 py-3 text-slate-800 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <option value="short">📄 Short (3-5 panels)</option>
                      <option value="medium">📑 Medium (6-10 panels)</option>
                      <option value="long">📚 Long (10+ panels)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="tone" className="block text-sm font-semibold text-slate-700 mb-2 flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                      </svg>
                      <span>Tone</span>
                    </label>
                    <select 
                      name="tone"
                      value={formData.tone}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none px-4 py-3 text-slate-800 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <option value="lighthearted">😊 Lighthearted</option>
                      <option value="serious">🎭 Serious</option>
                      <option value="dramatic">🎪 Dramatic</option>
                      <option value="humorous">🤣 Humorous</option>
                      <option value="mysterious">🌙 Mysterious</option>
                    </select>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full btn-primary text-white font-bold py-4 px-8 rounded-xl shadow-2xl text-lg flex items-center justify-center space-x-3 group disabled:opacity-70"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  <span>{isLoading ? 'Generating...' : 'Generate My Comic Story'}</span>
                  {isLoading && <div className="loading-spinner ml-2"></div>}
                </button>
              </div>
            </div>
          </div>
          
          {/* Story Output Section */}
          {showOutput && (
            <div className="max-w-4xl mx-auto">
              <div className="story-output rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Your Comic Story</h3>
                    <p className="text-slate-600">Generated with AI magic ✨</p>
                  </div>
                </div>
                <div 
                  className="prose prose-lg max-w-none text-slate-700"
                  dangerouslySetInnerHTML={{ __html: story }}
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  <button 
                    onClick={copyStory}
                    className="btn-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2V5a2 2 0 00-2-2v8z" />
                    </svg>
                    <span>Copy Story</span>
                  </button>
                  <button 
                    onClick={shareStory}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    <span>Share</span>
                  </button>
                  <button 
                    onClick={generateAnother}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    <span>Generate Another</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroSection;