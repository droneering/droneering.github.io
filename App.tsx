import React, { useState, useEffect } from 'react';
import { HeroBackground } from './components/DroneScene';
import { ArrowDown, Menu, X, ShieldCheck, Activity, Clock, Leaf, Settings, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-droneering-light text-gray-800 font-sans selection:bg-droneering-accent selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={scrolled ? "/logo_black.svg" : "/logo_white.svg"} 
              alt="DRONEERING Logo" 
              className="h-8 w-auto" 
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
            <a href="#about" onClick={scrollToSection('about')} className="hover:text-droneering-accent transition-colors cursor-pointer">소개</a>
            <a href="#features" onClick={scrollToSection('features')} className="hover:text-droneering-accent transition-colors cursor-pointer">주요 기능</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-droneering-accent transition-colors cursor-pointer">기대 효과</a>
            <a 
              href="#contact" 
              onClick={scrollToSection('contact')} 
              className={`px-5 py-2 rounded-full transition-colors shadow-sm cursor-pointer ${scrolled ? 'bg-droneering-blue text-white hover:bg-blue-900' : 'bg-white text-droneering-blue hover:bg-gray-100'}`}
            >
              도입 문의
            </a>
          </div>

          <button className={`md:hidden p-2 ${scrolled ? 'text-gray-900' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-medium animate-fade-in">
            <a href="#about" onClick={scrollToSection('about')} className="text-gray-800 hover:text-droneering-accent transition-colors cursor-pointer">소개</a>
            <a href="#features" onClick={scrollToSection('features')} className="text-gray-800 hover:text-droneering-accent transition-colors cursor-pointer">주요 기능</a>
            <a href="#impact" onClick={scrollToSection('impact')} className="text-gray-800 hover:text-droneering-accent transition-colors cursor-pointer">기대 효과</a>
            <a 
              href="#contact" 
              onClick={scrollToSection('contact')} 
              className="px-8 py-3 bg-droneering-blue text-white rounded-full shadow-lg cursor-pointer"
            >
              도입 문의
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
            무인기 안전의 <br className="md:hidden" />새로운 기준<br/>
            <span className="text-droneering-accent">Zero-Fall</span>
          </h1>
          
          <div className="flex justify-center">
             <a href="#about" onClick={scrollToSection('about')} className="group flex flex-col items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer">
                <span>자세히 보기</span>
                <span className="p-3 border border-gray-600 rounded-full group-hover:border-white group-hover:bg-white/10 transition-all">
                    <ArrowDown size={20} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <div className="inline-block mb-3 text-sm font-bold text-droneering-accent">INTRODUCTION</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">완벽한 임무 수행을 위한<br/>데이터 기반 의사결정</h2>
              <div className="w-12 h-1 bg-droneering-accent mb-6"></div>
            </div>
            <div className="md:col-span-7 text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                드론의 정비 부실은 예기치 않은 추락으로 이어져 치명적인 인명 및 재산 피해를 유발할 수 있습니다. 특히 공공 안전과 직결된 임무에서는 단 한 번의 실패도 용납되지 않습니다.
              </p>
              <p>
                <strong className="text-droneering-blue font-bold">Zero-Fall</strong>은 드론에서 수집되는 방대한 센서 데이터를 AI 모델로 정밀하게 분석합니다. 육안으로 확인하기 어려운 미세한 결함을 사전에 감지하고 최적의 정비 시기를 예측함으로써, 언제나 신뢰할 수 있는 비행 환경을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-sm font-bold text-droneering-accent">CORE FEATURES</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Zero-Fall 주요 기능</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-blue-50 text-droneering-blue rounded-xl flex items-center justify-center mb-6">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">AI 이륙 승인 시스템</h3>
                        <p className="text-gray-600 leading-relaxed">
                            비행 전 센서 데이터를 분석하여 기체의 전반적인 상태를 진단합니다. 안전한 비행이 가능한지 AI가 종합적으로 판단하여 객관적인 이륙 승인 여부를 결정합니다.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-blue-50 text-droneering-blue rounded-xl flex items-center justify-center mb-6">
                            <Activity size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">실시간 건전성 지수</h3>
                        <p className="text-gray-600 leading-relaxed">
                            비행 중 모터, 배터리 등 주요 부품의 상태를 Health Index로 시각화하여 실시간 제공합니다. 이상 징후 발생 시 즉각적인 경고 알림을 통해 사고를 예방합니다.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-blue-50 text-droneering-blue rounded-xl flex items-center justify-center mb-6">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">잔여 수명 예측 (RUL)</h3>
                        <p className="text-gray-600 leading-relaxed">
                            핵심 부품의 잔여 유효 수명(Remaining Useful Life)을 정확히 예측합니다. 불필요한 조기 교체를 줄이고, 반드시 필요한 시점에 정확히 정비할 수 있도록 지원합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Impact */}
        <section id="impact" className="py-24 bg-droneering-blue text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div>
                        <div className="inline-block mb-3 text-sm font-bold text-droneering-accent">IMPACT</div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">안전과 환경을 위한<br/>단 하나의 솔루션</h2>
                        
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1 text-droneering-accent"><CheckCircle size={24} /></div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">안전성 극대화</h4>
                                    <p className="text-gray-300 leading-relaxed">정비 부실 및 돌발 고장으로 인한 추락 사고를 미연에 방지하여, 공공의 안전을 지키고 고가의 드론 자산을 보호합니다.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-droneering-safe"><Leaf size={24} /></div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">탄소 배출 저감</h4>
                                    <p className="text-gray-300 leading-relaxed">배터리 교체 주기를 데이터 기반으로 최적화하여, 불필요한 배터리 폐기를 막고 제조 과정에서 발생하는 탄소 배출을 획기적으로 줄입니다.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-droneering-accent"><Settings size={24} /></div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">운용 효율성 향상</h4>
                                    <p className="text-gray-300 leading-relaxed">데이터에 기반한 계획된 정비를 통해 드론의 가동률을 높이고, 불필요한 유지보수 비용을 절감합니다.</p>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className="relative">
                        <div className="aspect-square rounded-full bg-gradient-to-tr from-droneering-blue to-blue-800 border border-blue-700/50 flex items-center justify-center p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
                            <div className="relative z-10 text-center">
                                <div className="text-6xl font-bold text-white mb-2">99.9%</div>
                                <div className="text-blue-200 font-medium">사고 예방률 목표</div>
                                <div className="w-full h-px bg-blue-700 my-6"></div>
                                <div className="text-4xl font-bold text-droneering-safe mb-2">-30%</div>
                                <div className="text-blue-200 font-medium">배터리 탄소 발자국 절감</div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
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
              <a href="mailto:ceo@droneering.co.kr" className="text-droneering-accent hover:text-white transition-colors">contact@droneering.co.kr</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between">
            <p>&copy; 2026 DRONEERING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
