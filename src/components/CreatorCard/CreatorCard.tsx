import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreatorCard: React.FC<{ name: string; bio: string; image: string }> = ({ name, bio, image }) => {
  const navigate = useNavigate();
  return (
    <button
      className="flex flex-col items-center min-w-[84px] cursor-pointer"
      onClick={() => navigate(`/profile/${encodeURIComponent(name)}`)}
      aria-label={`Open ${name}'s profile`}
    >
      <img src={image} alt={name} className="rounded-full w-14 h-14 mb-2" />
      <span className="font-bold text-xs line-clamp-1 text-center w-full">{name}</span>
      <span className="text-[11px] text-gray-500 text-center line-clamp-2">{bio}</span>
    </button>
  );
};

export default CreatorCard;
