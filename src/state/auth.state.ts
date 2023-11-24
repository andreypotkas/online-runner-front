import { AuthService } from "@/api/auth.service";
import { LocalStorageService } from "@/api/localStorage.service";
import { AuthResponse, UserResponse } from "@/types/user.types";
import { AxiosError } from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type UseAuthState = {
  user: UserResponse | null;
  refreshToken: string | null;
  token: string | null;
  tokenExpires: number | null;
  loading: boolean | null;
  error: string | null;
  login: (data: LoginData) => void;
  register: (data: RegisterData) => void;
  setAuthData: (data: AuthResponse) => void;
};

export const useAuthState = create<UseAuthState, [["zustand/immer", never]]>(
  immer((set) => ({
    user: null,
    refreshToken: null,
    token: null,
    tokenExpires: null,
    loading: false,
    error: null,

    login: async (data: LoginData) => {
      try {
        const authData = await AuthService.login(data);
        const { user, token, refreshToken, tokenExpires } = authData;
        set((state) => {
          state.user = user;
          state.token = token;
          state.refreshToken = refreshToken;
          state.tokenExpires = tokenExpires;
          state.loading = false;
          state.error = null;
        });
        LocalStorageService.setAuthData(authData);
      } catch (e: unknown) {
        const error = e as AxiosError;
        set((state) => {
          state.error = error.message;
          state.loading = false;
        });
      }
    },
    register: async (data: RegisterData) => {
      try {
        const authData = await AuthService.register(data);
        const { user, token, refreshToken, tokenExpires } = authData;
        set((state) => {
          state.user = user;
          state.token = token;
          state.refreshToken = refreshToken;
          state.tokenExpires = tokenExpires;
          state.loading = false;
          state.error = null;
        });
        LocalStorageService.setAuthData(authData);
      } catch (e: unknown) {
        const error = e as AxiosError;
        set((state) => {
          state.error = error.message;
          state.loading = false;
        });
      }
    },
    setAuthData: (data: AuthResponse) => {
      try {
        const { user, token, refreshToken, tokenExpires } = data;
        set((state) => {
          state.user = user;
          state.token = token;
          state.refreshToken = refreshToken;
          state.tokenExpires = tokenExpires;
          state.loading = false;
          state.error = null;
        });
      } catch (e: unknown) {
        const error = e as AxiosError;
        set((state) => {
          state.error = error.message;
          state.loading = false;
        });
      }
    },
  }))
);
