import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보 처리방침</h1>
          <p className="text-gray-600 mb-8">드로니어링 개인정보 처리방침 (2026. 03. 25. 시행)</p>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제1조(개인정보의 처리 목적)</h2>
              <p className="mb-2">드로니어링(Droneering)은 다음의 목적을 위하여 개인정보를 처리합니다.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>문의업무 처리:</strong> 솔루션 도입 문의 신청자의 신원 확인, 문의사항 확인, 상담을 위한 연락 및 통지, 결과 통보 등을 목적으로 합니다.</li>
                <li><strong>서비스 안내 및 마케팅:</strong> 신규 솔루션 업데이트 안내 및 서비스 개선을 위한 통계 분석 등에 활용될 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제2조(개인정보의 처리 및 보유기간)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>문의업무 처리 및 상담:</strong> 문의 접수 및 상담 종료 후 1년</li>
              </ul>
              <p className="mt-2 text-sm text-gray-500">단, 관계 법령(전자상거래법 등)에 따라 보존이 필요한 경우 해당 기간까지 보관합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제3조(정보주체의 권리·의무 및 행사방법)</h2>
              <p>이용자는 언제든지 개인정보 열람, 오류 정정, 삭제, 처리정지를 요구할 수 있습니다. 요청 시 <a href="https://docs.google.com/forms/d/e/1FAIpQLScUnZ64FtHvsTvd7W-A8FCEWSvT2YnYfDi53UIk-7VaM-HR-g/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="text-droneering-blue hover:underline">온라인 문의 폼</a>을 통해 서면으로 연락 주시면 지체 없이 조치하겠습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제4조(처리하는 개인정보 항목)</h2>
              <p className="mb-2">드로니어링은 상담 및 서비스 안내를 위해 최소한의 개인정보를 수집합니다.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>필수 항목:</strong> 이름, 회사/조직명, 이메일 주소, 문의 내용</li>
                <li><strong>선택 항목:</strong> 부서, 직책, 연락처(입력 시)</li>
                <li><strong>자동 수집 항목:</strong> 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제5조(개인정보 자동 수집 장치의 설치·운영 및 거부)</h2>
              <p>본 서비스는 이용자에게 최적화된 정보를 제공하기 위해 '쿠키(cookie)'를 사용합니다. 이용자는 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 서비스 이용에 일부 불편이 발생할 수 있습니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제6조(개인정보의 파기 절차 및 방법)</h2>
              <p>원칙적으로 개인정보 처리목적이 달성된 정보는 재생할 수 없는 기술적 방법을 사용하여 지체 없이 파기합니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제7조(개인정보 보호책임자)</h2>
              <p className="mb-4">드로니어링은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 이용자의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.</p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="font-bold mb-2">개인정보 보호 책임자</p>
                <ul className="space-y-1">
                  <li><strong>성명:</strong> 천행운</li>
                  <li><strong>직급:</strong> 대표 (CEO)</li>
                  <li><strong>연락처:</strong> <a href="https://docs.google.com/forms/d/e/1FAIpQLScUnZ64FtHvsTvd7W-A8FCEWSvT2YnYfDi53UIk-7VaM-HR-g/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="text-droneering-blue hover:underline">온라인 문의 폼</a></li>
                </ul>
              </div>
              <p className="mt-4 text-sm text-gray-500">※ 현재 별도의 유선 전화번호를 운영하지 않으므로 온라인 문의 폼을 통해 문의해 주시기 바랍니다.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제8조(개인정보 처리방침 변경)</h2>
              <p>이 개인정보처리방침은 2026년 3월 25일부터 적용됩니다.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
