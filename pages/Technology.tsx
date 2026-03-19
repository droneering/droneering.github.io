import React from 'react';
import { Activity, Clock, ShieldCheck, ChevronRight, PlaneTakeoff, Eye, Wrench, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const Technology: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-droneering-blue text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block mb-3 text-sm font-bold text-droneering-accent tracking-widest uppercase">Products</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Zero-Fall</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            데이터가 보증하는 비행의 정당성. 당신의 판단에 흔들리지 않는 근거를 더합니다.
          </p>
        </div>
      </section>

      {/* Core Value / Pre-Fail-safe Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-sm mb-6"
            >
              {/* <ShieldAlert size={18} /> */}
              {/* <span>Fail-safe가 작동하기 전 가장 완벽한 선제적 방어선</span> */}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
            >
              사고를 수습하는 최후의 수단이 아닌 <br className="hidden md:block" />
              <span className="text-droneering-blue">위험을 원천 차단하는 범용 안전 솔루션</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Zero-Fall은 특정 기체나 산업에 국한되지 않는 범용 예지정비 소프트웨어입니다. <br className="hidden md:block" />
              비행의 모든 단계에서 직관적인 데이터를 제공하여 운영자의 불확실성을 완벽히 제거합니다.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Point 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <PlaneTakeoff size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. 확신 있는 이륙 판단 근거</h3>
              <p className="text-gray-600 leading-relaxed">
                감이나 형식적인 매뉴얼에 의존하지 않습니다. 현재 기체의 센서 데이터를 종합 분석하여 지금 당장 안전하게 이륙할 수 있는지에 대한 명확한 데이터 근거를 제공합니다.
              </p>
            </motion.div>

            {/* Point 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 text-droneering-blue rounded-xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. 비행 중 실시간 상태 제공</h3>
              <p className="text-gray-600 leading-relaxed">
                비행 중 발생하는 미세한 진동이나 이상 패턴을 실시간으로 모니터링합니다. 치명적인 결함으로 이어져 Fail-safe가 강제 발동되기 전에 운영자에게 미리 경고합니다.
              </p>
            </motion.div>

            {/* Point 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. 데이터 기반 잔여 수명 제시</h3>
              <p className="text-gray-600 leading-relaxed">
                단순 누적 비행 시간이 아닌 실제 부품이 받은 스트레스와 마모도 데이터를 분석합니다. 모터, 배터리 등 핵심 부품의 정확한 잔여 수명(RUL)을 예측하여 제시합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engines */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16">
            
            {/* Engine 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 bg-gradient-to-br from-blue-50 to-white p-12 flex flex-col justify-center border-r border-gray-100">
                <div className="w-16 h-16 bg-blue-100 text-droneering-blue rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <Activity size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Zero-Fall_HI</h2>
                <div className="text-droneering-accent font-semibold tracking-wide mb-6">Health Index</div>
                <p className="text-xl font-medium text-gray-800 leading-relaxed">
                  보이지 않는 위험을 읽어내는 기체의 정밀 검진
                </p>
              </div>
              <div className="md:w-3/5 p-12 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">주요 특징</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-droneering-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">비행 중 모터, 배터리 등 주요 부품의 상태를 실시간 Health Index로 시각화</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-droneering-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">이상 징후 발견 즉시 경고하여 사고 예방</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-droneering-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">고주파 진동 패턴 분석을 통한 기계적 결함 조기 발견</span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold mb-4 text-gray-900 mt-8">사용 모델</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">회귀 모델</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Engine 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row-reverse"
            >
              <div className="md:w-2/5 bg-gradient-to-bl from-green-50 to-white p-12 flex flex-col justify-center border-l border-gray-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <Clock size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Zero-Fall_RUL</h2>
                <div className="text-green-600 font-semibold tracking-wide mb-6">Remaining Useful Life</div>
                <p className="text-xl font-medium text-gray-800 leading-relaxed">
                  지속 가능한 비행을 위한 지능형 수명 가이드
                </p>
              </div>
              <div className="md:w-3/5 p-12 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">주요 특징</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">핵심 부품의 잔여 유효 수명(Remaining Useful Life) 예측</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">정비 최적화를 통해 운영 비용 절감 및 Downtime-Risk 최소화</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">배터리 사이클 최적화를 통한 탄소 배출 저감 및 친환경 운용 지원</span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold mb-4 text-gray-900 mt-8">사용 모델</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">회귀 모델</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Engine 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 bg-gradient-to-br from-indigo-50 to-white p-12 flex flex-col justify-center border-r border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <ShieldCheck size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Zero-Fall_Go/No-Go</h2>
                <div className="text-indigo-600 font-semibold tracking-wide mb-6">Flight Authorization</div>
                <p className="text-xl font-medium text-gray-800 leading-relaxed">
                  데이터가 뒷받침하는 확신 있는 이륙 결정
                </p>
              </div>
              <div className="md:w-3/5 p-12 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">주요 특징</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-indigo-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">비행 전 센서 데이터 분석, 기체의 전반적 상태 점검</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-indigo-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">AI의 종합 분석 결과를 바탕으로 이륙 가능 여부를 권고</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-indigo-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">데이터에 기반한 가장 안전한 선택을 지원</span>
                  </li>
                </ul>
                <h3 className="text-xl font-bold mb-4 text-gray-900 mt-8">사용 모델</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">이진 분류 모델</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
