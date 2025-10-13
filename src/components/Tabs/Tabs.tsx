import React from 'react';
import { Home, BadgePercent, FileText } from 'lucide-react';

const defaultIcons: Record<string, React.ReactNode> = {
  Home: <Home className="w-4 h-4" />,
  Membership: <BadgePercent className="w-4 h-4" />,
  Posts: <FileText className="w-4 h-4" />,
};

const Tabs: React.FC<{ tabs: string[], active: string, onTab: (tab: string) => void; icons?: Record<string, React.ReactNode> }> = ({ tabs, active, onTab, icons = defaultIcons }) => (
  <nav className="flex gap-4 border-b mb-4 overflow-x-auto no-scrollbar justify-evenly">
    {tabs.map(tab => (
      <button
        key={tab}
        className={`shrink-0 pb-2 font-medium flex items-center gap-2 ${active === tab ? 'border-b-2 border-cyan-800 text-cyan-800 text-xs' : 'text-gray-600 text-xs'}`}
        onClick={() => onTab(tab)}
        aria-label={tab}
      >
        {icons[tab] ?? tab}
      </button>
    ))}
  </nav>
);

export default Tabs;
