import React from 'react';
import { ArrowDown } from 'lucide-react';
import { HeroBackground } from '../components/DroneScene';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
            비행 전 3초<br className="hidden md:block" /> 생명과 재산을 보호하는 시간
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-medium drop-shadow-md">
            우리는 데이터의 힘으로 생명과 재산을 지키는 안전 인프라를 구축합니다.
          </p>
          
          <div className="flex justify-center gap-6">
             <Link to="/technology" className="px-8 py-3 bg-droneering-accent text-white rounded-full font-bold shadow-lg hover:bg-blue-600 transition-colors">
                핵심 기술 보기
             </Link>
             <a href="#about" onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
             }} className="group flex items-center gap-3 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer">
                <span>자세히 보기</span>
                <span className="p-2 border border-gray-600 rounded-full group-hover:border-white group-hover:bg-white/10 transition-all">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="inline-block mb-3 text-sm font-bold text-droneering-accent">INTRODUCTION</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">완벽한 임무 수행을 위한<br/>데이터 기반 의사결정</h2>
            <div className="w-12 h-1 bg-droneering-accent mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <strong className="text-droneering-blue font-bold">Zero-Fall</strong>은 드론에서 수집되는 방대한 센서 데이터를 AI 모델로 정밀하게 분석합니다. 육안으로 확인하기 어려운 미세한 결함을 사전에 감지하고 최적의 정비 시기를 예측함으로써, 언제나 신뢰할 수 있는 비행 환경을 제공합니다.
            </p>
            <Link to="/technology" className="inline-flex items-center gap-2 text-droneering-accent font-bold hover:text-blue-700 transition-colors">
              Zero-Fall 엔진 알아보기 &rarr;
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <img 
                src="/mockup.png" 
                alt="Zero-Fall Dashboard Mockup" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
