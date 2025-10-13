import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostsStore } from '../store/usePostsStore';
import { Heart, MessageCircle, ArrowLeft, X } from 'lucide-react';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = useMemo(() => Number(id), [id]);
  const toggleLike = usePostsStore((s) => s.toggleLike);
  const addComment = usePostsStore((s) => s.addComment);
  const post = usePostsStore((s) => s.posts.find((p) => p.id === postId));
  const [message, setMessage] = useState('');
  const [showCommentModal, setShowCommentModal] = useState(false);
  const navigate = useNavigate();

  if (!post) {
    return <div className="p-4">Post not found.</div>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <button className="flex items-center gap-2 text-cyan-800 mb-3" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-5 h-5" /> Back
      </button>
      <img src={post.image} alt={post.title} className="rounded-lg w-full h-64 object-cover mb-3" />
      <h1 className="font-bold text-2xl mb-2">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.description}</p>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3 text-gray-500">
          <button
            className={`flex items-center gap-1 px-2 py-1 rounded`}
            onClick={() => toggleLike(post.id)}
            aria-pressed={post.liked}
          >
            <span
              className={`inline-flex items-center justify-center rounded-full p-1 transition-colors ${post.liked ? 'bg-blue-50 text-cyan-800' : 'bg-gray-100 text-gray-600'}`}
            >
              <Heart className={`w-4 h-4 ${post.liked ? 'fill-cyan-800' : ''}`} />
            </span>
            <span className="ml-1">{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded" onClick={() => setShowCommentModal(true)}>
            <MessageCircle className="w-5 h-5" /> {post.comments.length}
          </button>
        </div>
      </div>

      <section id="comments" className="mt-6">
        <h2 className="font-bold text-lg mb-3">Comments</h2>
        <div className="space-y-3 mb-4">
          {post.comments.map((c) => (
            <div key={c.id} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                {c.author?.[0] || 'U'}
              </div>
              <div className="flex-1 rounded-lg bg-gray-50 p-3">
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-medium text-gray-800">{c.author}</span> • {new Date(c.createdAt).toLocaleString()}
                </div>
                <div className="text-gray-800 leading-relaxed">{c.message}</div>
              </div>
            </div>
          ))}
          {post.comments.length === 0 && (
            <div className="text-gray-500 text-sm">No comments yet. Be the first to comment.</div>
          )}
        </div>
        {/* <button className="bg-cyan-800 text-white px-4 py-2 rounded-full w-full absolute bottom-0" onClick={() => setShowCommentModal(true)}>Add a comment</button> */}
      </section>
      {showCommentModal && (
         <div className="fixed inset-0 bg-black/85 z-50 flex items-end justify-center md:items-center" onClick={() => setShowCommentModal(false)}>
           <div className="bg-white w-full max-w-md md:rounded-2xl rounded-t-2xl shadow-lg md:mx-4" onClick={(e) => e.stopPropagation()}>
             <div className="relative p-4">
               <button
                 className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                 onClick={() => setShowCommentModal(false)}
                 aria-label="Close"
               >
                 <X className="w-5 h-5" />
               </button>
               <h3 className="font-bold text-lg mb-3 pr-10">Add a comment</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const trimmed = message.trim();
                  if (!trimmed) return;
                  addComment(post.id, trimmed);
                  setMessage('');
                  setShowCommentModal(false);
                }}
              >
                 <textarea
                   className="w-full rounded-lg bg-gray-50 border border-transparent p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
                   rows={4}
                  placeholder="Write your comment"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                 <div className="flex justify-end">
                   <button type="submit" className="bg-cyan-800 text-white px-5 py-2 rounded-full">Post</button>
                 </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;


