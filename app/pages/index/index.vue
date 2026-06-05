<template>
  <Header />
  <main class="mx-auto w-full max-w-6xl px-6 py-10">
    <header class="text-center mb-8">
      <h1 class="font-bold text-4xl">Willkommen auf der HomePage!</h1>
      <p class="mt-2 text-muted max-w-2xl mx-auto">
        Hier kannst du deine täglichen/wöchentlichen/monatlichen Habits langsam
        aufbauen und verwalten.
      </p>
    </header>

    <HabitStats :plans="habits" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="md:col-span-1 space-y-6">
        <HabitForm @submit="onSubmit" />
      </div>

      <div class="md:col-span-2">
        <HabitList
          :habits="habits"
          @delete="deleteHabit"
          @toggle="(id) => setActive(id, true)"
        />
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import Header from "~/components/header/Header.vue";
import HabitForm from "~/components/forms/HabitForm.vue";
import HabitList from "~/components/habits/HabitList.vue";
import type { HabitPlan } from "~/types/habit";
import { useHabits } from "~/composables/useHabits";
import HabitStats from "~/components/habits/HabitStats.vue";

const { habits, addHabit, deleteHabit, setActive } = useHabits();
function onSubmit(habit: HabitPlan) {
  addHabit(habit);
}
</script>
