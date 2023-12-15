import axios from "axios";

import { API_BASE_URL } from "@/constants/common.constants";

import { LocalStorageService } from "./localStorage.service";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = LocalStorageService.getAuthData()?.token;
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  let isRefreshing = false;
  let refreshPromise: Promise<unknown> | null = null;

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== "/auth/login" && err.response) {
        if (err.response.status === 401 && !originalConfig._isRetry) {
          originalConfig._isRetry = true;

          if (!isRefreshing) {
            isRefreshing = true;
            const refreshToken =
              LocalStorageService.getAuthData()?.refreshToken;

            try {
              const rs = await axios.get(
                `${API_BASE_URL}auth/refresh/${
                  LocalStorageService.getAuthData()?.user.id
                }`,
                {
                  headers: { Authorization: "Bearer " + refreshToken },
                }
              );

              isRefreshing = false;

              originalConfig.headers[
                "Authorization"
              ] = `Bearer ${rs.data.accessToken}`;

              // Retry the original request
              return axiosInstance(originalConfig);
            } catch (error) {
              isRefreshing = false;
              return Promise.reject(error);
            }
          } else {
            // If another request is already refreshing the token, wait for it to complete and then retry

            if (!refreshPromise) {
              refreshPromise = new Promise((resolve) => {
                setTimeout(() => {
                  refreshPromise = null;
                  resolve(refreshPromise);
                }, 200); // Wait for 200ms (adjust as needed)
              });
            }

            await refreshPromise;

            // Retry the original request with the updated access token
            originalConfig.headers["Authorization"] = `Bearer ${
              LocalStorageService.getAuthData()?.token
            }`;

            return axiosInstance(originalConfig);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

setupInterceptors();
