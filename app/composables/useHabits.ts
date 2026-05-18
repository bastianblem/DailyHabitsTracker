import type { HabitState, HabitRating, HabitType } from "~/types/habit"
import { ref } from "vue"

const habits = ref<HabitType[]>([])

export function addHabit(habit: HabitType) {
    habits.value.push(habit)
}
export function deleteHabit(id: string) {
    habits.value = habits.value.filter(habit => habit.id !== id)
}
export function updateHabit(updatedHabit: HabitType) {
    habits.value = habits.value.map(h => h.id === updatedHabit.id ? updatedHabit: h)
    
}
export function toggleHabitCompletion(habitId : string) {
    const today = new Date().toISOString().slice(0, 10)

    habits.value = habits.value.map(h => {
        if(h.id !== habitId) return h
        const isCompleted = h.completedDates.includes(today)

        return {
            ...h,
            completedDates: isCompleted
                ? h.completedDates.filter(date => date !== today)
                : [...h.completedDates, today]
        }
    })
}