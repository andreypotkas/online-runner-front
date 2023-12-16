import { API_BASE_URL } from "@/constants/common.constants";
import {
  CreateEventDto,
  EventEntity,
  UpdateEventDto,
} from "@/types/entities/event.type";
import {
  EventRewardEntity,
  EventRewardInitialValues,
} from "@/types/entities/eventReward.type";

import { axiosInstance } from "./axios.interceptor";

export class EventsService {
  static async createEvent(data: CreateEventDto): Promise<EventEntity> {
    const res = (await axiosInstance.post(API_BASE_URL + "events", data)).data;

    console.log("Event created: ", res);
    return res;
  }

  static async getEvents(): Promise<EventEntity[]> {
    const res = (await axiosInstance.get(API_BASE_URL + "events")).data;

    console.log("Events: ", res);
    return res.data;
  }

  static async updateEvent(
    id: number,
    data: UpdateEventDto
  ): Promise<EventEntity> {
    const res = (await axiosInstance.put(API_BASE_URL + "events/" + id, data))
      .data;

    console.log(`Event with id: ${id} updated: `, res);
    return res;
  }

  static async deleteEvent(id: number): Promise<EventEntity> {
    const res = (await axiosInstance.delete(API_BASE_URL + "events/" + id))
      .data;

    console.log(`Event with id: ${id} deleted: `, res);
    return res;
  }

  static async createEventReward(
    data: EventRewardInitialValues
  ): Promise<EventRewardEntity> {
    const res = (await axiosInstance.post(API_BASE_URL + "event-reward", data))
      .data;

    console.log("Event reward created: ", res);
    return res;
  }

  static async getEventRewards(): Promise<EventRewardEntity[]> {
    const res = (await axiosInstance.get(API_BASE_URL + "event-reward")).data;

    console.log("Event rewards: ", res);
    return res.data;
  }

  static async updateEventReward(
    id: number,
    data: Partial<EventRewardEntity>
  ): Promise<EventRewardEntity> {
    const res = (
      await axiosInstance.put(API_BASE_URL + "event-reward/" + id, data)
    ).data;

    console.log(`Event reward with id: ${id} updated: `, res);
    return res;
  }

  static async deleteEventReward(id: number): Promise<EventRewardEntity> {
    const res = (
      await axiosInstance.delete(API_BASE_URL + "event-reward/" + id)
    ).data;

    console.log(`Event reward with id: ${id} deleted: `, res);
    return res;
  }
}
