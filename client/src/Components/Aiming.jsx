import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Sparkles, Heart } from 'lucide-react';

const Aiming = () => {
  const [animatedStats, setAnimatedStats] = useState({
    stories: 0,
    creators: 0,
    genres: 0,
    satisfaction: 0
  });

  const finalStats = {
    stories: 50000,
    creators: 25000,
    genres: 100,
    satisfaction: 99.5
  };

  const statsData = [
    {
      key: 'stories',
      value: '50K+',
      label: 'Stories Created',
      icon: Sparkles,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      key: 'creators',
      value: '25K+',
      label: 'Happy Creators',
      icon: Users,
      color: 'from-green-400 to-blue-500'
    },
    {
      key: 'genres',
      value: '100+',
      label: 'Story Genres',
      icon: TrendingUp,
      color: 'from-purple-400 to-pink-500'
    },
    {
      key: 'satisfaction',
      value: '99.5%',
      label: 'Satisfaction Rate',
      icon: Heart,
      color: 'from-pink-400 to-red-500'
    }
  ];

  // Animate stats on component mount
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          stories: Math.floor(finalStats.stories * easeOut),
          creators: Math.floor(finalStats.creators * easeOut),
          genres: Math.floor(finalStats.genres * easeOut),
          satisfaction: Math.floor(finalStats.satisfaction * easeOut * 10) / 10
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedStats({
            stories: finalStats.stories,
            creators: finalStats.creators,
            genres: finalStats.genres,
            satisfaction: finalStats.satisfaction
          });
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatStat = (key, value) => {
    switch (key) {
      case 'stories':
        return `${Math.floor(value / 1000)}K+`;
      case 'creators':
        return `${Math.floor(value / 1000)}K+`;
      case 'genres':
        return `${value}+`;
      case 'satisfaction':
        return `${value}%`;
      default:
        return value;
    }
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white overflow-hidden shadow-2xl">
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 50%), 
                  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)
                `
              }}
            />
          </div>

          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-8 animate-fade-in">
                What We're Aiming For
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Building the future of creative storytelling through innovative AI technology and community collaboration.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {statsData.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.key}
                    className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Animated number */}
                    <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                      {formatStat(stat.key, animatedStats[stat.key])}
                    </div>
                    
                    <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.label}
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                );
              })}
            </div>

            {/* Vision Content */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-semibold mb-6 text-center">
                Our Vision for the Future
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-lg leading-relaxed mb-6 opacity-95 text-center">
                  We envision a world where everyone can be a storyteller. By democratizing comic creation through AI, 
                  we're breaking down barriers and empowering people to express their creativity without limits.
                </p>
                
                {/* Vision points */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 animate-pulse" />
                    <div>
                      <h4 className="font-semibold mb-2">Accessible Creativity</h4>
                      <p className="text-sm opacity-90">Making storytelling tools available to everyone, regardless of artistic skill or experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-3 animate-pulse" style={{animationDelay: '0.5s'}} />
                    <div>
                      <h4 className="font-semibold mb-2">Global Community</h4>
                      <p className="text-sm opacity-90">Connecting creators worldwide to share, learn, and inspire each other's work.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 animate-pulse" style={{animationDelay: '1s'}} />
                    <div>
                      <h4 className="font-semibold mb-2">Innovation First</h4>
                      <p className="text-sm opacity-90">Continuously pushing the boundaries of what's possible with AI-assisted creativity.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-3 animate-pulse" style={{animationDelay: '1.5s'}} />
                    <div>
                      <h4 className="font-semibold mb-2">Endless Possibilities</h4>
                      <p className="text-sm opacity-90">Exploring new formats, styles, and interactive storytelling experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating action elements */}
            <div className="absolute top-4 right-4 opacity-20">
              <div className="w-16 h-16 border-2 border-white rounded-full animate-spin" style={{animationDuration: '10s'}} />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <div className="w-12 h-12 border-2 border-white rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aiming;