import type { HabitState, HabitRating, HabitType } from "~/types/habit"
import { ref, watch, onMounted } from "vue"

export function useHabits() {
    const habits = ref<HabitType[]>([])
    onMounted(() => {
        const saved = localStorage.getItem("habits")
        if (saved) {
            habits.value = JSON.parse(saved)
        }
    })
    watch(
        habits,
        (val) => {
            localStorage.setItem("habits", JSON.stringify(val))
        },
        {deep: true}
    )

    function addHabit(habit: HabitType) {
        habits.value.push(habit)
    }
    function deleteHabit(id: string) {
        habits.value = habits.value.filter(habit => habit.id !== id)
    }
    function updateHabit(updatedHabit: HabitType) {
        habits.value = habits.value.map(h => h.id === updatedHabit.id ? updatedHabit: h)
        
    }
    function toggleHabitCompletion(habitId : string) {
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
    return {
        habits,
        addHabit,
        deleteHabit,
        updateHabit,
        toggleHabitCompletion
    }
}