








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
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
        }

        .mobile-menu.active {
          transform: translateX(0);
        }
      `}</style>

      <nav className="nav-blur fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-24 xl:px-40 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Title */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <i className="fas fa-book-open text-white text-xl"></i>
              </div>
              <h1 className="text-2xl font-bold gradient-text tracking-wide">Comic Story Generator</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-base font-medium">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Home</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Aim</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
              <a href="#vision" className="text-gray-600 hover:text-blue-600 transition">Vision</a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 transition"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`mobile-menu fixed inset-y-0 right-0 w-64 bg-white shadow-2xl md:hidden z-50 ${
            isMobileMenuOpen ? 'active' : ''
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-slate-800">Menu</h2>
              <button onClick={closeMobileMenu} className="text-slate-600 hover:text-blue-600">
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <nav className="space-y-6">
              <a href="#home" onClick={closeMobileMenu} className="block text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#features" onClick={closeMobileMenu} className="block text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#about" onClick={closeMobileMenu} className="block text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#vision" onClick={closeMobileMenu} className="block text-gray-700 hover:text-blue-600 transition">Vision</a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;
