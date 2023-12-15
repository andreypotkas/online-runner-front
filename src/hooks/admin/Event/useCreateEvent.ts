import { useState } from "react";

import { EventsService } from "@/api/events.service";
import { ImageService } from "@/api/image.service";
import { CreateEventInitialValues } from "@/types/Admin/admin.types";
import {
  EventCategoriesEnum,
  ParticipationOptionsEnum,
} from "@/types/Admin/enums/createEvent.enum";
import { FileEntity } from "@/types/entities/fileEntity.type";

export type CreateEventDto = {
  name: string;
  description: string;
  image: FileEntity;
  category: EventCategoriesEnum;
  participationOptions: { id: ParticipationOptionsEnum }[];
  startDate: string;
  endDate: string;
};

export const useCreateEvent = () => {
  const [event, setEvent] = useState<null | Event>(null);
  const [error, setError] = useState<null | unknown>(null);
  const [loading, setLoading] = useState(false);

  const handleFormData = async (values: CreateEventInitialValues) => {
    const { image, startDate, endDate, participationOptions } = values;

    const uploadedImage = await ImageService.upload(image!);
    const startDateTs = Date.parse(startDate!);
    const endDateTs = Date.parse(endDate!);

    return {
      ...values,
      startDate: `${startDateTs}`,
      endDate: `${endDateTs}`,
      image: uploadedImage,
      participationOptions: participationOptions.map((id) => ({ id })),
    };
  };

  const createEvent = async (data: CreateEventInitialValues) => {
    const transformedValues = await handleFormData(data);

    const body = {
      ...transformedValues,
      status: "1",
      participants: [],
    };
    try {
      setLoading(true);
      const response = await EventsService.createEvent(body);
      setEvent(response);
      console.log(response);

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { createEvent, event, loading, error };
};
