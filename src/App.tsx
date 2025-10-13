import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExploreCreators from './pages/ExploreCreators';
import ProfilePage from './pages/ProfilePage';
import AccountCreation from './pages/AccountCreation';
import PostDetail from './pages/PostDetail';
import Sidebar from './components/Sidebar/Sidebar';

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname !== '/' && location.pathname !== '/account';

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {showSidebar && (
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}
      <div className={showSidebar ? 'transition-all md:ml-64' : 'transition-all'}>
        {/* Remove sidebar button from app header */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExploreCreators setSidebarOpen={setSidebarOpen} />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/account" element={<AccountCreation />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
      {/* Sidebar backdrop for mobile */}
      {showSidebar && sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
