import React, { useState } from 'react';
import Tabs from '../components/Tabs/Tabs';
import Posts from '../components/Posts/Posts';
import TipModal from '../components/TipModal/TipModal';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [showTip, setShowTip] = useState(false);
  const [inlineTipAmount, setInlineTipAmount] = useState<number>(5);
  const [inlineFrequency, setInlineFrequency] = useState<string>('One-off');
  const [inlineMessage, setInlineMessage] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-8">
      <div className="relative w-full h-40 md:h-48">
        <img src="https://placehold.co/600x200" alt="Banner" className="w-full h-full object-cover" />
        <button
          className="absolute top-3 left-3 p-2 rounded-full bg-white/80 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5 text-cyan-800" />
        </button>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex items-center gap-2">
          <img src="https://placehold.co/80x80" alt="Profile" className="rounded-full border-4 border-white" />
        </div>
      </div>
      {/* Spacer to accommodate the overlapping avatar */}
      <div className="h-10" />
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-xl">Pippa</h2>
        <p className="text-gray-500 text-center text-sm mb-2">Hey, I'm Poppa, I do things that make me happy</p>
        <button className="border rounded-full px-4 py-1 mb-4" onClick={() => setShowTip(true)}>Send a tip</button>
        <Tabs tabs={["Home", "Membership", "Posts"]} active={activeTab} onTab={setActiveTab} icons={{}} />
        {activeTab === "Home" && (
          <div className="w-full px-4 mt-4">
            <div className="bg-white rounded-2xl shadow p-4">
              <h3 className="font-bold text-lg text-center mb-3">Send a tip to Hey Pippa</h3>
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-3 py-2">
                  {[1,2,5,10].map(amount => (
                    <button
                      key={amount}
                      className={`w-8 h-8 rounded-full border text-xs ${inlineTipAmount === amount ? 'bg-cyan-800 text-white border-transparent' : 'text-cyan-800 bg-white'}`}
                      onClick={() => setInlineTipAmount(amount)}
                      aria-pressed={inlineTipAmount === amount}
                    >
                      ${amount}
                    </button>
                  ))}
                  <button
                    className="w-8 h-8 rounded-full border text-xs text-cyan-800 bg-white"
                    onClick={() => {
                      const next = prompt('Enter custom amount (number)');
                      const parsed = next ? parseInt(next, 10) : NaN;
                      if (!isNaN(parsed) && parsed > 0) setInlineTipAmount(parsed);
                    }}
                    aria-label="Custom amount"
                  >
                    C
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  className="w-full rounded-xl border border-transparent bg-gray-50 p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
                  rows={5}
                  placeholder="Say something nice"
                  value={inlineMessage}
                  onChange={(e) => setInlineMessage(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                {['One-off','Monthly','Quarterly','Annually'].map(freq => (
                  <button
                    key={freq}
                    className={`rounded-xl px-3 py-2 text-sm ${inlineFrequency === freq ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={() => setInlineFrequency(freq)}
                    aria-pressed={inlineFrequency === freq}
                  >
                    {freq}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <button className="bg-cyan-800 text-white w-full py-3 rounded-full font-semibold">
                  {`Tip $${inlineTipAmount}`}
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Membership" && (
          <div className="w-full text-center mt-8">
            <h3 className="font-bold text-lg mb-2">You’re not yet a member</h3>
            <p className="text-gray-500 text-sm">Subscribe to a membership plan to access exclusive contents and rewards</p>
          </div>
        )}
        {activeTab === "Posts" && <Posts onSendTip={() => setShowTip(true)} />}
        {/* Home tab can show other info */}
      </div>
      {showTip && <TipModal onClose={() => setShowTip(false)} />}
    </div>
  );
};

export default ProfilePage;
