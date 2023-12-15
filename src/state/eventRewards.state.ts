import { AxiosError } from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { EventsService } from "@/api/events.service";
import { imageService } from "@/api/image.service";
import {
  EventRewardEntity,
  EventRewardInitialValues,
} from "@/types/entities/eventReward.type";

export type UseEventRewards = {
  rewards: EventRewardEntity[] | null;
  loading: boolean | null;
  error: string | null;
  update: (
    id: number,
    isImageChanged: boolean,
    prevImage: string,
    data: Partial<EventRewardInitialValues>
  ) => void;
  remove: (id: number) => void;
  create: (data: EventRewardInitialValues) => void;
  getAll: () => void;
};

export const useEventRewardsState = create<
  UseEventRewards,
  [["zustand/immer", never]]
>(
  immer((set) => ({
    rewards: null,
    loading: null,
    error: null,
    getAll: async () => {
      try {
        set({ loading: true, error: null });
        const rewards = await EventsService.getEventRewards();

        set((state) => {
          state.loading = false;
          state.error = null;
          state.rewards = rewards;
        });
      } catch (e: unknown) {
        const error = e as AxiosError;
        set((state) => {
          state.error = error.message;
          state.loading = false;
        });
      }
    },
    create: async (data: EventRewardInitialValues) => {
      try {
        set({ loading: true, error: null });
        const { image } = data;
        const uploadedImage = await imageService.upload(image! as File);
        const body = {
          ...data,
          image: uploadedImage,
        };

        const createdReward = await EventsService.createEventReward(body);

        set((state) => {
          state.loading = false;
          state.error = null;
          state.rewards = Array.isArray(state.rewards)
            ? [createdReward, ...state.rewards]
            : [createdReward];
        });
      } catch (e: unknown) {
        const error = e as AxiosError;
        set((state) => {
          state.error = error.message;
          state.loading = false;
        });
      }
    },
    update: async (
      id: number,
      isImageChanged: boolean,

      prevImage: string,
      data: Partial<EventRewardInitialValues>
    ) => {
      try {
        set({ loading: true, error: null });
        const { image } = data;

        let uploadedImage = prevImage;
        if (isImageChanged) {
          await imageService.remove(prevImage);
          uploadedImage = await imageService.upload(image as File);
        }
        const body = {
          ...data,
          image: uploadedImage,
        };

        console.log("update event reward body", body);

        const updatedReward = await EventsService.updateEventReward(id, body);
        console.log(updatedReward);

        set((state) => {
          state.loading = false;
          state.error = null;
          state.rewards =
            state.rewards?.map((item) =>
              item.id === id ? { ...updatedReward } : item
            ) ?? [];
          console.log(state.rewards);
        });
      } catch (e: unknown) {
        const error = e as AxiosError;
        set((state) => {
          state.error = error.message;
          state.loading = false;
        });
      }
    },
    remove: async (id: number) => {
      try {
        set({ loading: true, error: null });
        await EventsService.deleteEventReward(id);

        set((state) => {
          state.loading = false;
          state.error = null;
          state.rewards = state.rewards?.filter((item) => item.id !== id) ?? [];
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
