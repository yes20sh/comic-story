import React, { useState } from "react";
import { Send, X, Zap, MessageCircle } from "lucide-react";

const comicCharacter = {
  name: "StoryBot AI",
  role: "Creative Assistant",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
};

const initialMessages = [
  {
    from: "ai",
    text: "Hello! I'm StoryBot AI, your creative storytelling assistant. Ready to craft amazing comic stories together?",
  },
  {
    from: "user",
    text: "Hi StoryBot! Can you help me create a superhero story?",
  },
  {
    from: "ai",
    text: "Absolutely! I love superhero stories. What kind of powers should our hero have? And what challenge will they face?",
  },
];

const ChatPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((msgs) => [
        ...msgs,
        {
          from: "ai",
          text: "That's a fantastic idea! Let me help you develop that story further. What genre are you thinking?",
        },
      ]);
    }, 1200);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #ddd6fe 50%, #fce7f3 75%, #fed7d7 100%)',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 animate-pulse" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          filter: 'blur(40px)',
          mixBlendMode: 'multiply'
        }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 animate-pulse" style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          filter: 'blur(40px)',
          mixBlendMode: 'multiply',
          animationDelay: '2s'
        }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-10 animate-pulse" style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          filter: 'blur(30px)',
          mixBlendMode: 'multiply',
          animationDelay: '1s'
        }}></div>
      </div>

      <div className="relative z-10 h-screen flex flex-col">
        {/* Header with Glass Morphism */}
        <div className="border-b border-white/30 p-4 flex items-center justify-between" style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.1)'
        }}>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={comicCharacter.avatar}
                alt={comicCharacter.name}
                className="w-12 h-12 rounded-full shadow-lg"
                style={{
                  border: '2px solid rgba(102, 126, 234, 0.5)',
                  boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)'
                }}
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {comicCharacter.name}
              </h1>
              <p className="text-sm text-slate-600 flex items-center">
                <Zap className="w-3 h-3 mr-1" />
                {comicCharacter.role}
              </p>
            </div>
          </div>
          <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "ai" && (
                <img
                  src={comicCharacter.avatar}
                  alt="AI"
                  className="w-8 h-8 rounded-full mr-3 shadow-sm"
                  style={{
                    border: '1px solid rgba(102, 126, 234, 0.3)'
                  }}
                />
              )}
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  msg.from === "user"
                    ? "text-white"
                    : "text-slate-700"
                }`}
                style={msg.from === "user" ? {
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
                } : {
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <img
                src={comicCharacter.avatar}
                alt="AI"
                className="w-8 h-8 rounded-full mr-3"
                style={{
                  border: '1px solid rgba(102, 126, 234, 0.3)'
                }}
              />
              <div className="px-4 py-3 rounded-2xl" style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#667eea'}}></div>
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#667eea', animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#667eea', animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input with Glass Morphism */}
        <div className="border-t border-white/30 p-4" style={{
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)'
        }}>
          <div className="flex space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend(e)}
              placeholder="Share your story ideas..."
              className="flex-1 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-500 focus:outline-none transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(102, 126, 234, 0.2)',
                boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
              onFocus={(e) => {
                e.target.style.border = '2px solid rgba(102, 126, 234, 0.5)';
                e.target.style.boxShadow = 'inset 0 2px 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(102, 126, 234, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.border = '2px solid rgba(102, 126, 234, 0.2)';
                e.target.style.boxShadow = 'inset 0 2px 10px rgba(0, 0, 0, 0.1)';
              }}
            />
            <button
              onClick={handleSend}
              className="text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.4)';
              }}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-5px) translateX(2px); }
          50% { transform: translateY(-2px) translateX(-2px); }
          75% { transform: translateY(-8px) translateX(1px); }
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ChatPage
