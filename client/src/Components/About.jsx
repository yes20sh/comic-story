import React, { useState } from 'react';
import { Check, BookOpen, Sparkles, Users, Zap, Palette } from 'lucide-react';

const About = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: Sparkles,
      text: "AI-powered story generation"
    },
    {
      id: 2,
      icon: Palette,
      text: "Multiple genres and styles"
    },
    {
      id: 3,
      icon: Zap,
      text: "Instant story generation"
    },
    {
      id: 4,
      icon: Users,
      text: "Community sharing features"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Comic Story Generator
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing storytelling by combining artificial intelligence with creative imagination to help everyone become a comic creator.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We believe that everyone has a story to tell. Our mission is to democratize storytelling by making it accessible, 
              fun, and engaging for creators of all skill levels. Whether you're a seasoned writer or just starting your creative journey, 
              our AI-powered platform empowers you to bring your imagination to life.
            </p>
            
            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className={`
                      flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 cursor-pointer
                      ${hoveredFeature === feature.id 
                        ? 'bg-blue-50 transform translate-x-2' 
                        : 'hover:bg-slate-50 hover:translate-x-1'
                      }
                    `}
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className={`
                      w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full 
                      flex items-center justify-center transition-transform duration-300
                      ${hoveredFeature === feature.id ? 'scale-110 rotate-12' : ''}
                    `}>
                      <Check className="text-white w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`
                        w-5 h-5 text-slate-600 transition-colors duration-300
                        ${hoveredFeature === feature.id ? 'text-blue-600' : ''}
                      `} />
                      <span className={`
                        text-slate-700 font-medium transition-colors duration-300
                        ${hoveredFeature === feature.id ? 'text-slate-900' : ''}
                      `}>
                        {feature.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* CTA Card */}
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-pink-100/50 to-blue-100/50 rounded-3xl transform -rotate-2 scale-105 opacity-20"></div>
            
            {/* Main card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group">
              <div className="text-center">
                {/* Animated icon */}
                <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="text-white w-12 h-12 group-hover:rotate-12 transition-transform duration-300" />
                  
                  {/* Floating particles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
                  <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-1/2 -right-3 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-80"></div>
                </div>
                
                <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                  Start Creating Today
                </h4>
                
                <p className="text-slate-600 mb-6 group-hover:text-slate-700 transition-colors duration-300">
                  Join thousands of creators who have already discovered the joy of AI-powered storytelling.
                </p>
                
                {/* CTA Button */}
                <button className="
                  relative overflow-hidden
                  bg-gradient-to-r from-blue-500 to-purple-600 
                  text-white px-8 py-4 rounded-xl font-semibold 
                  shadow-lg hover:shadow-xl 
                  transform hover:-translate-y-1 hover:scale-105
                  transition-all duration-300 
                  group-hover:from-blue-600 group-hover:to-purple-700
                  active:scale-95
                ">
                  <span className="relative z-10">Get Started Now</span>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
                
                {/* Subtle stats */}
                <div className="mt-6 flex justify-center space-x-6 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>10k+ Stories Created</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span>5k+ Active Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-r from-pink-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default About;