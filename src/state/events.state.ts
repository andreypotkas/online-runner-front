/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { EventsService } from "@/api/events.service";
import { imageService } from "@/api/image.service";
import { EventInitialValues } from "@/types/entities/event.type";

export type UseEvents = {
  events: any[] | null;
  loading: boolean | null;
  error: string | null;
  update: (
    id: number,
    isImageChanged: boolean,
    prevImage: string,
    data: Partial<EventInitialValues>
  ) => void;
  remove: (id: number) => void;
  create: (data: EventInitialValues) => void;
  getAll: () => void;
};

export const useEventsState = create<UseEvents, [["zustand/immer", never]]>(
  immer((set) => ({
    events: null,
    loading: null,
    error: null,
    getAll: async () => {
      try {
        set({ loading: true, error: null });
        const events = await EventsService.getEvents();

        set((state) => {
          state.loading = false;
          state.error = null;
          state.events = events;
        });
      } catch (e: unknown) {
        const error = e as AxiosError;
        set((state) => {
          state.error = error.message;
          state.loading = false;
        });
      }
    },
    create: async (data: EventInitialValues) => {
      try {
        set({ loading: true, error: null });
        const { image } = data;
        const uploadedImage = await imageService.upload(image! as File);
        const body = {
          ...data,
          image: uploadedImage,
          participants: [],
          participationOptions: data.participationOptions.map((item) => ({
            ...item,
            reward: { id: item.reward! },
          })),
        };

        console.log("CREATE EVENT DTO: ", body);

        const createdEvent = await EventsService.createEvent(body);

        set((state) => {
          state.loading = false;
          state.error = null;
          state.events = Array.isArray(state.events)
            ? [createdEvent, ...state.events]
            : [createdEvent];

          console.log(state.events);
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
      data: Partial<EventInitialValues>
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

        console.log("UPDATE EVENT DTO", body);

        const updatedEvent = await EventsService.updateEvent(id, body);
        console.log(updatedEvent);

        set((state) => {
          state.loading = false;
          state.error = null;
          state.events =
            state.events?.map((item) =>
              item.id === id ? { ...updatedEvent } : item
            ) ?? [];
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
        await EventsService.deleteEvent(id);

        set((state) => {
          state.loading = false;
          state.error = null;
          state.events = state.events?.filter((item) => item.id !== id) ?? [];
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
