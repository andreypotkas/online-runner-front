export type CreateEventInitialValues = {
  name: string;
  description: string;
  image: File | null;
  category: EventCategoriesEnum;
  participationOptions: ParticipationOptionsEnum[];
  startDate: string | null;
  endDate: string | null;
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
