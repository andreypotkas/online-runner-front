export type UserResponse = {
  id: number;
  email: string;
  provider: string;
  socialId: string | null;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  photo: string | null;
  role: {
    id: number;
    name: string;
    __entity: string;
  };
  status: {
    id: number;
    name: string;
    __entity: string;
  };
  __entity: string;
};

export type AuthResponse = {
  refreshToken: string;
  token: string;
  tokenExpires: number;
  user: UserResponse;
};
