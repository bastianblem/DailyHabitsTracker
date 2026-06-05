export type HabitState = "daily" | "weekly" | "monthly";
export type HabitRating = "good" | "neither" | "bad";

export type HabitPlan = {
  id: string;
  title: string;
  description?: string;
  rating?: HabitRating;
  repetition: HabitState;
  startDate?: string;
  goal?: number;
  steps?: string[];
  active?: boolean;
  color?: string;
  createdAt: number;
};
