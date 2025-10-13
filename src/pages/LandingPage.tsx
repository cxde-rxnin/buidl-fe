import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-4 px-4 bg-white">
      <header className="w-full flex justify-between items-center">
        <img src="/logo.png" alt="Logo"/>
        <div className="flex gap-2">
          <button className="bg-cyan-800 text-white px-4 py-2 rounded-full font-semibold" onClick={() => navigate('/account')}>Get Started</button>
        </div>
      </header>
      <main className="flex flex-col items-center mt-16">
        <h1 className="text-2xl font-bold text-center mb-4">Reward the creators you love.</h1>
        <p className="text-gray-600 text-center mb-8">Support your favorite creators effortlessly, unlock exclusive rewards, and be part of their journey</p>
        <button className="bg-cyan-800 text-white px-8 py-4 rounded-full font-bold text-xs mb-4" onClick={() => navigate('/account')}>Support A Creator</button>
        <span className="text-gray-500 text-xs">It’s free and takes less than a minute</span>
      </main>
    </div>
  );
};

export default LandingPage;
