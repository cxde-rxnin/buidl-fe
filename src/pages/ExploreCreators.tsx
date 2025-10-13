import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CreatorCard from '../components/CreatorCard/CreatorCard';
import Posts from '../components/Posts/Posts';
import Tabs from '../components/Tabs/Tabs';
import { Menu, Users, Bookmark, UserPlus } from 'lucide-react';
import TipModal from '../components/TipModal/TipModal';

const creators = [
  { name: 'Prella Crypt', bio: 'Content writer and yapp', image: 'https://placehold.co/64x64' },
  { name: 'Biggy 0x', bio: 'Content writer', image: 'https://placehold.co/64x64' },
  { name: 'web3 Prophet', bio: 'Web3 Content creator', image: 'https://placehold.co/64x64' },
];

const ExploreCreators: React.FC<{ setSidebarOpen?: (open: boolean) => void }> = ({ setSidebarOpen }) => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Explore Creators');
  const [showTip, setShowTip] = useState(false);

  return (
    <div className="min-h-screen bg-white px-4">
      <header className="flex items-center justify-between py-3">
        <img src="/logo.png" alt="Logo"/>

        <div className="flex items-center gap-2">
          {setSidebarOpen && (
            <button
              className="p-0 m-0 border-none bg-transparent"
              style={{ boxShadow: 'none', background: 'none' }}
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-cyan-800" />
            </button>
          )}
          <img src="https://placehold.co/40x40" alt="User" className="w-10 h-10 rounded-full" />
        </div>
      </header>
      <SearchBar value={search} onChange={setSearch} />
      <Tabs
        tabs={["Explore Creators", "Subscribed", "Following"]}
        active={activeTab}
        onTab={setActiveTab}
        icons={{
          'Explore Creators': <Users className="w-4 h-4" />,
          'Subscribed': <Bookmark className="w-4 h-4" />,
          'Following': <UserPlus className="w-4 h-4" />,
        }}
      />
      {activeTab === "Explore Creators" && (
        <section>
          <h2 className="font-bold text-base mb-2">Popular Creators</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-2 mb-4 no-scrollbar snap-x snap-mandatory">
              {creators.map(c => (
                <div key={c.name} className="snap-start">
                  <CreatorCard {...c} />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none"></div>
          </div>
          <Posts onSendTip={() => setShowTip(true)} />
        </section>
      )}
      {/* Subscribed and Following tabs can be implemented similarly */}
      {showTip && <TipModal onClose={() => setShowTip(false)} />}
    </div>
  );
};

export default ExploreCreators;
