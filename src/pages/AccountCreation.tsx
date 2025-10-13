import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AccountCreation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2 bg-white">
      <button className="absolute left-4 top-4" onClick={() => navigate('/')}> {/* Back to landing */}
        <ArrowLeft className="w-6 h-6 text-cyan-900" />
      </button>
      <h2 className="text-xl font-bold mb-2 text-center -mt-32">Create an account.</h2>
      <p className="text-gray-600 text-center mb-8">With Sui’s lightning-fast and low-cost blockchain, even the smallest tips make a difference.</p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button className="flex items-center gap-2 bg-gray-100 text-sm py-3 px-4 rounded-lg font-regular justify-center" onClick={() => navigate('/explore')}>
          Continue with Google
        </button>
        <button className="flex items-center gap-2 bg-black text-white text-sm py-3 px-4 rounded-lg font-regular justify-center" onClick={() => navigate('/explore')}>
          Continue with Apple
        </button>
      </div>
    </div>
  );
};

export default AccountCreation;
