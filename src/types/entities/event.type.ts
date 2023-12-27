/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormTypes } from "../common.types";

import { EventRewardEntity } from "./eventReward.type";
import {
  ParticipationOption,
  ParticipationOptionInitialValues,
} from "./participationOption.type";

export type EventEntity = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: EventCategory;
  createdAt: string;
  endDate: string;
  participants: any[]; // You can replace 'any' with the actual type for participants
  participationOptions: ParticipationOption[];
  rewards: EventRewardEntity[];
  startDate: string;
  status: Status;
  updatedAt: string;
  __entity: "Event";
};

interface EventCategory {
  id: EventCategoriesEnum;
  name: string;
  __entity: "EventCategory";
}

interface Status {
  id: number;
  name: string;
  __entity: string;
}

export interface EventData {
  data: Event[];
  hasNextPage: boolean;
}

export type EventInitialValues = {
  id?: number;
  name: string;
  description: string;
  image: File | string | null;
  category: EventCategoriesEnum;
  participationOptions: ParticipationOptionInitialValues[];
  startDate: string | number;
  endDate: string | number;
};

export enum EventCategoriesEnum {
  "Running" = 1,
  "Cycling" = 2,
  "Swimming" = 3,
  "Skiing" = 4,
}

export enum ParticipationOptionsEnum {
  "free" = 1,
  "basic" = 2,
  "medium" = 3,
  "advanced" = 4,
}

export enum StatusEnum {
  "active" = 1,
  "inactive" = 2,
}

export type EventFormProps = {
  visible: boolean;
  type: FormTypes;
  initialValues: EventInitialValues;
};

export type CreateEventDto = {
  image: string;
  participants: never[];
  participationOptions: {
    name: string;
    reward: { id: number };
    price: number;
  }[];
  id?: number | undefined;
  name: string;
  description: string;
  category: EventCategoriesEnum;
  startDate: string | number;
  endDate: string | number;
};

export type UpdateEventDto = {
  id?: number;
  image: string;
  name?: string;
  description?: string;
  category?: EventCategoriesEnum;
  startDate?: string | number;
  endDate?: string | number;
};
