import React from 'react';
import { CheckCircle, Leaf, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Impact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-droneering-blue text-white">
      {/* Header */}
      <section className="py-20 border-b border-blue-800">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block mb-3 text-sm font-bold text-droneering-accent tracking-widest uppercase">Impact</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">안전과 환경을 위한 단 하나의 솔루션</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Zero-Fall은 단순한 기술을 넘어, 지속 가능한 미래와 완벽한 안전을 약속합니다.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="mt-1 text-droneering-accent bg-blue-900/50 p-4 rounded-2xl h-fit">
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">안전성 극대화</h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      정비 부실 및 돌발 고장으로 인한 추락 사고를 미연에 방지하여, 공공의 안전을 지키고 고가의 드론 자산을 보호합니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="mt-1 text-droneering-safe bg-blue-900/50 p-4 rounded-2xl h-fit">
                    <Leaf size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">탄소 배출 저감</h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      배터리 교체 주기를 데이터 기반으로 최적화하여, 불필요한 배터리 폐기를 막고 제조 과정에서 발생하는 탄소 배출을 획기적으로 줄입니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="mt-1 text-droneering-accent bg-blue-900/50 p-4 rounded-2xl h-fit">
                    <Settings size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3">운용 효율성 향상</h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      데이터에 기반한 계획된 정비를 통해 드론의 가동률을 높이고, 불필요한 유지보수 비용을 절감합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-gradient-to-tr from-droneering-blue to-blue-800 border border-blue-700/50 flex items-center justify-center p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
                <div className="relative z-10 text-center">
                  <div className="text-7xl font-bold text-white mb-2 drop-shadow-md">99.9%</div>
                  <div className="text-xl text-blue-200 font-medium tracking-wide">사고 예방률 목표</div>
                  <div className="w-full h-px bg-blue-700 my-8"></div>
                  <div className="text-5xl font-bold text-droneering-safe mb-2 drop-shadow-md">-30%</div>
                  <div className="text-xl text-blue-200 font-medium tracking-wide">배터리 탄소 발자국 절감</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
