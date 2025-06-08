import React, { useState } from "react";
// Import your icons here (replace these imports with actual icon imports you have)
import { Home, Book, Info, Users, MessageCircle } from "lucide-react";

const BottomNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
    // Add your navigation logic here if needed
  };

  const navItems = [
    { section: "home", icon: Home, label: "Home" },
    { section: "courses", icon: Book, label: "Courses" },
    { section: "about", icon: Info, label: "About" },
    { section: "team", icon: Users, label: "Team" },
    { section: "feedback", icon: MessageCircle, label: "Feedback" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "24px 24px 0 0",
        padding: "12px 0 8px 0",
      }}
    >
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ section, icon: IconComponent, label }) => (
          <button
            key={section}
            onClick={() => handleNavClick(section)}
            className={`flex flex-col items-center px-2 py-2 rounded-lg transition-all ${
              activeSection === section ? "text-green-600" : "text-gray-500"
            }`}
          >
            <IconComponent size={20} className="mb-1" />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
