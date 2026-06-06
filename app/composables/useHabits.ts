import type { HabitPlan } from "~/types/habit";
import { ref, watch, onMounted } from "vue";

export function useHabits() {
  const habits = ref<HabitPlan[]>([]);
  onMounted(() => {
    const saved = localStorage.getItem("habits");
    if (saved) {
      habits.value = JSON.parse(saved);
    }
  });
  watch(
    habits,
    (val) => {
      localStorage.setItem("habits", JSON.stringify(val));
    },
    { deep: true },
  );

  function addHabit(habit: HabitPlan) {
    habits.value.push(habit);
  }
  function deleteHabit(id: string) {
    habits.value = habits.value.filter((habit) => habit.id !== id);
  }
  function updateHabit(updatedHabit: HabitPlan) {
    habits.value = habits.value.map((h) =>
      h.id === updatedHabit.id ? updatedHabit : h,
    );
  }
  function setActive(id: string, active: boolean) {
    habits.value = habits.value.map((h) =>
      h.id === id ? { ...h, active } : h,
    );
  }

  function toggleActive(id: string) {
    habits.value = habits.value.map((h) =>
      h.id === id ? { ...h, active: !h.active } : h,
    );
  }
  return {
    habits,
    addHabit,
    deleteHabit,
    updateHabit,
    setActive,
    toggleActive,
  };
}
