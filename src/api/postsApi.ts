import axiosClient from './axiosClient';

export const fetchPosts = async () => {
  const res = await axiosClient.get('/posts');
  return res.data;
};
