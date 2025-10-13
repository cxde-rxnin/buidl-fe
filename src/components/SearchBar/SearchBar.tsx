import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => (
  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
    <Search className="w-5 h-5 text-gray-400 mr-2" />
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      className="bg-transparent outline-none w-full text-sm"
      placeholder="Search for creators"
    />
  </div>
);

export default SearchBar;
