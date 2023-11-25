import { API_BASE_URL } from "@/constants/common.constants";
import { LoginData, RegisterData } from "@/state/auth.state";
import { AuthResponse } from "@/types/user.types";
import axios from "axios";
import { axiosInstance } from "./axios.interceptor";

export class AuthService {
  static async login(data: LoginData): Promise<AuthResponse> {
    const res = await axiosInstance.post<AuthResponse>(
      API_BASE_URL + "auth/email/login",
      data
    );
    console.log(res);
    return res.data;
  }

  static async register(data: RegisterData): Promise<AuthResponse> {
    const res = await axios.post<AuthResponse>(
      API_BASE_URL + "auth/email/register",
      data
    );
    console.log(res);
    return res.data;
  }
}
