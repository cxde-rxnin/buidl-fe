import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => (
  <header className="flex items-center justify-between px-4 py-2 bg-white shadow">
    <img src="https://placehold.co/40x40" alt="Logo" className="w-10 h-10" />
    <Menu className="w-6 h-6" />
  </header>
);

export default Navbar;
