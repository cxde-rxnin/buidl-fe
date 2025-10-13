import { Home, Trophy, BadgePercent, Bell, Settings, User, LogOut, X } from 'lucide-react';

const Sidebar: React.FC<{ open?: boolean; onClose?: () => void }> = ({ open = false, onClose }) => (
  <>
    {/* Backdrop */}
    {open && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
    )}
    
    {/* Sidebar */}
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white z-50 p-6 flex flex-col transition-transform duration-300 overflow-y-auto shadow-lg ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:shadow-none`}
    >
      <div className="flex items-center justify-between mb-10">
        <img src="/logo.png" alt="Logo" />
        {onClose && (
          <button 
            className="p-1 md:hidden hover:bg-gray-100 rounded transition-colors" 
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        )}
      </div>
      <nav className="flex flex-col gap-6">
        <a href="/explore" className="flex items-center gap-4 text-gray-900 font-medium py-1 hover:text-blue-600 transition-colors">
          <Home className="w-5 h-5 flex-shrink-0" /> <span>Home</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-900 font-medium py-1 hover:text-blue-600 transition-colors">
          <Trophy className="w-5 h-5 flex-shrink-0" /> <span>My Rewards</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-900 font-medium py-1 hover:text-blue-600 transition-colors">
          <BadgePercent className="w-5 h-5 flex-shrink-0" /> <span>Memberships</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-900 font-medium py-1 hover:text-blue-600 transition-colors">
          <Bell className="w-5 h-5 flex-shrink-0" /> <span>Notifications</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-900 font-medium py-1 hover:text-blue-600 transition-colors">
          <Settings className="w-5 h-5 flex-shrink-0" /> <span>Settings</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-900 font-medium py-1 hover:text-blue-600 transition-colors">
          <User className="w-5 h-5 flex-shrink-0" /> <span>My Account</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-900 font-medium py-1 hover:text-blue-600 transition-colors">
          <LogOut className="w-5 h-5 flex-shrink-0" /> <span>Logout</span>
        </a>
      </nav>
    </aside>
  </>
);

export default Sidebar;