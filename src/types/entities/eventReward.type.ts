export type EventRewardEntity = {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  image: string;
};

export type EventRewardInitialValues = {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: File | string | null;
};