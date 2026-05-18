export type HabitState = "daily" | "weekly" | "monthly"
export type HabitRating = "low" | "medium" | "high"

export type HabitType = {
    id: string,
    title: string,
    description?: string,
    rating: HabitRating,
    repetition: HabitState,
    completedDates: string[],
    createdAt: number,
    color?: string
}