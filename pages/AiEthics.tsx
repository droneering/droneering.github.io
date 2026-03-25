import React from 'react';
import { motion } from 'framer-motion';

const AiEthics: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">AI 윤리 준칙</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            드로니어링(Droneering)은 'Zero-Fall' 솔루션을 시작으로, 모든 미래 모빌리티의 안전을 혁신하고 기술의 신뢰를 구축합니다. 우리는 AI 기술이 인간의 생명과 자산을 보호하는 도구로서 책임감 있게 사용되어야 한다고 믿으며, 이를 위해 다음의 원칙을 준수합니다.
          </p>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. 안전과 생명 존중 (Safety First)</h2>
              <p>
                우리는 AI 기술 개발의 최우선 가치를 '인간의 안전'에 둡니다. 드론을 비롯하여 UAM, USV, AMR 등 모든 무인 이동체의 사고를 예방하고 추락 및 충돌 위험을 최소화함으로써, 기술이 인간의 생명과 재산에 해를 끼치지 않도록 설계하고 운영합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. 설명 가능한 투명성 (XAI by Design)</h2>
              <p>
                우리는 인공지능의 판단 근거를 명확히 제시하는 <strong>'설명 가능한 AI(XAI)'</strong>를 지향합니다. 모델의 아키텍처 설계와 벤치마크 단계부터 투명성을 확보하여, 모빌리티의 상태 진단 및 위험 예측 결과가 어떤 근거로 도출되었는지 사용자가 이해하고 신뢰할 수 있도록 정보를 제공합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. 기술적 무결성과 신뢰성 (Technical Integrity)</h2>
              <p>
                우리는 엄격한 벤치마킹과 검증 과정을 통해 AI 모델의 신뢰성을 확보합니다. 미래 모빌리티의 복잡한 운용 환경에서도 AI가 안정적으로 작동할 수 있도록 기술적 무결성을 추구하며, 예측 오류나 한계점에 대해서도 사용자 및 이해관계자와 투명하게 소통합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. 데이터 프라이버시 및 보안 (Data Privacy & Security)</h2>
              <p>
                모빌리티 운용 및 점검 과정에서 수집되는 비행·항행 데이터와 기체 정보는 관련 법령에 따라 철저히 보호됩니다. 우리는 승인되지 않은 데이터 접근을 차단하며, 고객의 핵심 자산 정보가 오용되지 않도록 최상의 보안 체계를 유지합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. 미래 모빌리티 생태계 기여 (Expanding Mobility Value)</h2>
              <p>
                우리는 드론을 넘어 육상, 해상, 공중을 아우르는 미래 모빌리티 산업 전체의 안전 표준을 높이는 데 기여합니다. AI 기술이 이동의 자유를 확대하고 사회적 비용을 절감하는 등 긍정적인 사회적 가치를 창출하도록 노력합니다.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AiEthics;
