import axiosClient from './axiosClient';

export const sendTip = async (creatorId: string, amount: number, message: string, frequency: string) => {
  const res = await axiosClient.post('/tips', { creatorId, amount, message, frequency });
  return res.data;
};
