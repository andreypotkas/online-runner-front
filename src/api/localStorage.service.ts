import { AuthResponse } from "@/types/user.types";

export class LocalStorageService {
  static setAuthData = (data: AuthResponse): void => {
    localStorage.setItem("authData", JSON.stringify(data));
  };

  static getAuthData = (): AuthResponse | null => {
    const user = localStorage.getItem("authData");

    return user ? JSON.parse(user) : null;
  };

  static clearAuthData = (): void => {
    localStorage.removeItem("authData");
  };
}
