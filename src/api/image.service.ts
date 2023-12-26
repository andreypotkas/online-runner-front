import { API_BASE_URL } from "@/constants/common.constants";

import { axiosInstance } from "./axios.interceptor";

export class ImageService {
  async upload(file: File): Promise<string> {
    const data = new FormData();
    data.append("file", file);
    const res = (
      await axiosInstance.post(API_BASE_URL + "files/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
    console.log(res);

    return res;
  }

  async remove(imageUrl: string): Promise<void> {
    try {
      const key = imageUrl.split(".com/uploads/")[1]; // Extract key from the image URL

      (await axiosInstance.delete(API_BASE_URL + `files/delete/${key}`)).data;
    } catch (e) {
      console.log(e);
      throw e; // You might want to handle errors more gracefully in a real application
    }
  }
}

export const imageService = new ImageService();
