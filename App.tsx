import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Impact from './pages/Impact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AiEthics from './pages/AiEthics';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="technology" element={<Technology />} />
          <Route path="impact" element={<Impact />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="ai-ethics" element={<AiEthics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
