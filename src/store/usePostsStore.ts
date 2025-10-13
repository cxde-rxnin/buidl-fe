import { create } from 'zustand';

export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  likes: number;
  liked: boolean;
  comments: { id: string; author: string; message: string; createdAt: string }[];
}

interface PostsState {
  posts: Post[];
  toggleLike: (postId: number) => void;
  addComment: (postId: number, message: string) => void;
  getPostById: (postId: number) => Post | undefined;
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: 'New NFT Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus velit eget ante suscipit, a vehicula leo posuere.',
    image: 'https://placehold.co/300x300',
    likes: 9,
    liked: false,
    comments: [
      { id: 'c1', author: 'Alex', message: 'Amazing drop! 🔥', createdAt: new Date().toISOString() },
    ],
  },
  {
    id: 2,
    title: 'Sui Weekly Recap',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus velit eget ante suscipit, a vehicula leo posuere.',
    image: 'https://placehold.co/300x300',
    likes: 9,
    liked: false,
    comments: [
      { id: 'c2', author: 'Sam', message: 'Great summary, thanks!', createdAt: new Date().toISOString() },
    ],
  },
];

export const usePostsStore = create<PostsState>((set, get) => ({
  posts: initialPosts,
  toggleLike: (postId) => {
    set(({ posts }) => ({
      posts: posts.map((p) =>
        p.id === postId
          ? { ...p, liked: !p.liked, likes: p.liked ? Math.max(0, p.likes - 1) : p.likes + 1 }
          : p
      ),
    }));
  },
  addComment: (postId, message) => {
    const newComment = {
      id: Math.random().toString(36).slice(2),
      author: 'You',
      message,
      createdAt: new Date().toISOString(),
    };
    set(({ posts }) => ({
      posts: posts.map((p) => (p.id === postId ? { ...p, comments: [...p.comments, newComment] } : p)),
    }));
  },
  getPostById: (postId) => {
    return get().posts.find((p) => p.id === postId);
  },
}));
