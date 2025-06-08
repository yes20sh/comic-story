import React, { useState } from 'react';
import { Brain, Palette, Zap, Users, Smartphone, Shield } from 'lucide-react';

const WhyChoose = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Our advanced AI understands storytelling principles, character development, and narrative structure to create engaging stories tailored to your vision.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      icon: Palette,
      title: "Unlimited Creativity",
      description: "Express any idea, from silly adventures to epic sagas. No creative limits, just pure imagination brought to life through intelligent storytelling.",
      gradient: "from-pink-500 to-red-600"
    },
    {
      id: 3,
      icon: Zap,
      title: "Lightning Fast",
      description: "Get professionally structured comic stories in seconds. No waiting, no complex setup required. Just pure creative flow.",
      gradient: "from-green-500 to-blue-600"
    },
    {
      id: 4,
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of creators sharing their stories. Get inspiration, feedback, and connect with fellow storytellers worldwide.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Create stories anywhere, anytime. Our responsive design works seamlessly across all devices and screen sizes.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      id: 6,
      icon: Shield,
      title: "Safe & Secure",
      description: "Your stories and data are protected with enterprise-grade security. Create with confidence and peace of mind.",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white/50 via-blue-50/30 to-purple-50/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Why Choose Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Comic Generator
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of storytelling with cutting-edge AI technology designed to unleash your creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className={`
                  group relative bg-white rounded-2xl p-8 shadow-xl border border-slate-100 
                  transition-all duration-300 ease-out cursor-pointer
                  ${hoveredCard === feature.id 
                    ? 'transform -translate-y-2 shadow-2xl scale-105' 
                    : 'hover:transform hover:-translate-y-1 hover:shadow-2xl'
                  }
                `}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated background gradient */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 
                  transition-opacity duration-300 bg-gradient-to-br ${feature.gradient}
                `} />
                
                {/* Icon container with hover animation */}
                <div className={`
                  relative w-16 h-16 bg-gradient-to-r ${feature.gradient} 
                  rounded-2xl flex items-center justify-center mx-auto mb-6
                  transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
                `}>
                  <IconComponent 
                    className="text-white text-2xl w-8 h-8" 
                    strokeWidth={2}
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center group-hover:text-slate-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 text-center leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Subtle pulse animation on hover */}
                <div className={`
                  absolute inset-0 rounded-2xl border-2 border-transparent
                  ${hoveredCard === feature.id ? `border-gradient-to-r ${feature.gradient} opacity-50` : ''}
                  transition-all duration-300
                `} />
              </div>
            );
          })}
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-80 animate-ping" style={{animationDelay: '2s'}} />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;