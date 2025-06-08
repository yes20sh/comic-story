import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
        * {
          scroll-behavior: smooth;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .nav-blur {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.95);
        }

        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
        }

        .mobile-menu.active {
          transform: translateX(0);
        }
      `}</style>

      <nav className="nav-blur shadow-lg sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-120">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold gradient-text">Comic Story Generator</h1>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
                  Home
                </a>
                <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
                  Features
                </a>
                <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
                  About
                </a>
                <a href="#vision" className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
                  Vision
                </a>
              </div>
            </div>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-slate-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`mobile-menu fixed inset-y-0 right-0 w-64 bg-white shadow-2xl md:hidden z-50 ${
            isMobileMenuOpen ? 'active' : ''
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-semibold text-slate-800">Menu</h2>
              <button 
                onClick={closeMobileMenu}
                className="text-slate-600 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="space-y-6">
              <a 
                href="#home" 
                onClick={closeMobileMenu}
                className="block text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </a>
              <a 
                href="#features" 
                onClick={closeMobileMenu}
                className="block text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Features
              </a>
              <a 
                href="#about" 
                onClick={closeMobileMenu}
                className="block text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
              <a 
                href="#vision" 
                onClick={closeMobileMenu}
                className="block text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Vision
              </a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;











// import { useState } from 'react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const closeMobileMenu = () => setIsMobileMenuOpen(false);

//   return (
//     <>
//       <nav className="backdrop-blur-md bg-white/95 shadow-md sticky top-0 z-50 border-b border-white/30">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           {/* Logo and Title */}
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
//               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-pulse">
//               Comic Story Generator
//             </h1>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-8">
//             {['Home', 'Features', 'About', 'Vision'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMobileMenu}
//             className="md:hidden text-slate-600 hover:text-blue-600"
//             aria-label="Toggle Menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu Panel */}
//         <div
//           className={`fixed top-0 right-0 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
//             isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           } md:hidden`}
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-lg font-semibold text-slate-800">Menu</h2>
//               <button onClick={closeMobileMenu} className="text-slate-600 hover:text-blue-600" aria-label="Close Menu">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <nav className="space-y-4">
//               {['Home', 'Features', 'About', 'Vision'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   onClick={closeMobileMenu}
//                   className="block text-slate-600 hover:text-blue-600 font-medium transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay Backdrop */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={closeMobileMenu}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;
