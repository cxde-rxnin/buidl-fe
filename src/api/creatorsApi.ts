import axiosClient from './axiosClient';

export const fetchCreators = async () => {
  const res = await axiosClient.get('/creators');
  return res.data;
};
