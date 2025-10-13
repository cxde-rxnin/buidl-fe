import React from 'react';
import PostCard from './PostCard';
import { usePostsStore } from '../../store/usePostsStore';

const Posts: React.FC<{ onSendTip?: () => void }> = ({ onSendTip }) => {
  const posts = usePostsStore((s) => s.posts);

  return (
    <section className="mt-6">
      <h3 className="font-bold text-lg mb-4 px-4">Recent Posts</h3>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onSendTip={onSendTip} />
      ))}
    </section>
  );
};

export default Posts;
