import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6';
  const textColor = scrolled || !isHome ? 'text-gray-600' : 'text-gray-200';
  const logoSrc = scrolled || !isHome ? '/logo_black.svg' : '/logo_white.svg';
  const menuIconColor = scrolled || !isHome ? 'text-gray-900' : 'text-white';

  return (
    <div className="min-h-screen flex flex-col bg-droneering-light text-gray-800 font-sans selection:bg-droneering-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center cursor-pointer">
            <img 
              src={logoSrc} 
              alt="DRONEERING Logo" 
              className="h-8 w-auto" 
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${textColor}`}>
            <Link to="/" className={`hover:text-droneering-accent transition-colors ${location.pathname === '/' ? 'text-droneering-accent' : ''}`}>홈</Link>
            
            <div className="relative group">
              <Link to="/technology" className={`hover:text-droneering-accent transition-colors flex items-center gap-1 ${location.pathname === '/technology' ? 'text-droneering-accent' : ''}`}>
                제품
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <Link to="/technology" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-droneering-accent transition-colors">
                  Zero-Fall
                </Link>
              </div>
            </div>

            <Link to="/impact" className={`hover:text-droneering-accent transition-colors ${location.pathname === '/impact' ? 'text-droneering-accent' : ''}`}>기대 효과</Link>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScUnZ64FtHvsTvd7W-A8FCEWSvT2YnYfDi53UIk-7VaM-HR-g/viewform?usp=publish-editor" 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full transition-colors shadow-sm cursor-pointer ${scrolled || !isHome ? 'bg-droneering-blue text-white hover:bg-blue-900' : 'bg-white text-droneering-blue hover:bg-gray-100'}`}
            >
              도입 문의
            </a>
          </div>

          <button className={`md:hidden p-2 ${menuIconColor}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-medium animate-fade-in">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-droneering-accent transition-colors">홈</Link>
            <Link to="/technology" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-droneering-accent transition-colors">제품</Link>
            <Link to="/impact" onClick={() => setMenuOpen(false)} className="text-gray-800 hover:text-droneering-accent transition-colors">기대 효과</Link>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScUnZ64FtHvsTvd7W-A8FCEWSvT2YnYfDi53UIk-7VaM-HR-g/viewform?usp=publish-editor" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="px-8 py-3 bg-droneering-blue text-white rounded-full shadow-lg cursor-pointer"
            >
              도입 문의
            </a>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img 
                src="/logo_white.svg" 
                alt="DRONEERING Logo" 
                className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="text-sm text-center md:text-right">
              <p className="mb-2">공공 및 산업용 드론 PHM 솔루션 도입 문의</p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScUnZ64FtHvsTvd7W-A8FCEWSvT2YnYfDi53UIk-7VaM-HR-g/viewform?usp=publish-editor" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 mt-2 border border-droneering-accent text-droneering-accent hover:bg-droneering-accent hover:text-white rounded-full transition-colors"
              >
                도입 문의 작성하기
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 DRONEERING. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/ai-ethics" className="hover:text-white transition-colors">AI 윤리 준칙</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
