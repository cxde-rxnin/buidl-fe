import React from 'react';
import { Heart, MessageCircle, DollarSign } from 'lucide-react';
import { usePostsStore } from '../../store/usePostsStore';
import type { Post } from '../../store/usePostsStore';
import { useNavigate } from 'react-router-dom';

const PostCard: React.FC<{ post: Post; onSendTip?: () => void }> = ({ post, onSendTip }) => {
  const toggleLike = usePostsStore((s) => s.toggleLike);
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-4 mb-6">
      <button className="w-full text-left" onClick={() => navigate(`/posts/${post.id}`)}>
        <img src={post.image} alt={post.title} className="rounded-lg w-full h-48 object-cover mb-2" />
        <h4 className="font-bold text-md mb-1">{post.title}</h4>
        <p className="text-gray-600 text-xs mb-2">{post.description}</p>
      </button>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-gray-500">
          <button
            className={`flex items-center gap-1 py-1 rounded ${post.liked ? 'text-cyan-800' : ''}`}
            onClick={() => toggleLike(post.id)}
            aria-pressed={post.liked}
          >
            <Heart className={`w-5 h-5 ${post.liked ? 'fill-cyan-800' : ''}`} /> {post.likes}
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded" onClick={() => navigate(`/posts/${post.id}#comments`)}>
            <MessageCircle className="w-5 h-5" /> {post.comments.length}
          </button>
        </div>
        <button className="flex items-center gap-1 bg-cyan-800 text-white px-4 py-2 rounded-full text-xs" onClick={onSendTip}>
          <DollarSign className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
