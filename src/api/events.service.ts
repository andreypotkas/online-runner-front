import { API_BASE_URL } from "@/constants/common.constants";
import { CreateEventDto } from "@/hooks/admin/Event/useCreateEvent";
import {
  EventRewardEntity,
  EventRewardInitialValues,
} from "@/types/entities/eventReward.type";

import { axiosInstance } from "./axios.interceptor";

export class EventsService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async createEvent(data: CreateEventDto): Promise<any> {
    const res = (await axiosInstance.post(API_BASE_URL + "events", data)).data;

    console.log("Event created: ", res);
    return res.data;
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

  // static async getEventReward(id: number): Promise<EventReward> {
  //   const res = (await axiosInstance.get(API_BASE_URL + "event-reward/" + id))
  //     .data;

  //   console.log(`Event reward with id: ${id}: `, res);
  //   return res.data;
  // }

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
