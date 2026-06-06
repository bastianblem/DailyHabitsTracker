<template>
  <Header />
  <main class="mx-auto w-full max-w-6xl px-6 py-10">
    <header class="text-center mb-8">
      <h1 class="font-bold text-4xl">Welcome to the dashboard!</h1>
      <p
        class="mt-2 max-w-2xl mx-auto text-4xl font-semibold tracking-tight text-text"
      >
        Here you can build your
        <span class="text-accent border-r border-accent pr-1">{{
          display
        }}</span>
      </p>
    </header>

    <HabitStats :plans="habits" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="md:col-span-1 space-y-6">
        <HabitForm
          :initial="editingPlan"
          @submit="onSubmit"
          @cancel="editingPlan = null"
        />
      </div>

      <div class="md:col-span-2">
        <HabitList
          :habits="habits"
          @delete="deleteHabit"
          @toggle="onToggle"
          @edit="onEdit"
        />
      </div>
    </div>
  </main>
  <Footer />
</template>
<script setup lang="ts">
import Header from "~/components/header/Header.vue";
import HabitForm from "~/components/forms/HabitForm.vue";
import HabitList from "~/components/habits/HabitList.vue";
import HabitStats from "~/components/habits/HabitStats.vue";
import Footer from "~/components/footer/Footer.vue";
import type { HabitPlan } from "~/types/habit";
import { ref, onMounted } from "vue";
import { useHabits } from "~/composables/useHabits";

const { habits, addHabit, deleteHabit, setActive, updateHabit, toggleActive } =
  useHabits();
const editingPlan = ref<HabitPlan | null>(null);
const words = ["habits", "routines", "discipline", "consistency"];
const current = ref(0);
const display = ref("");
const typing = ref(true);

function onSubmit(plan: HabitPlan) {
  if (editingPlan.value) {
    updateHabit(plan);
    editingPlan.value = null;
  } else {
    addHabit(plan);
  }
}
function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function loop() {
  while (true) {
    const word = words[current.value] || "";

    // type
    for (let i = 0; i <= word.length; i++) {
      display.value = word.slice(0, i);
      await sleep(80);
    }

    await sleep(1200);

    // delete
    for (let i = word.length; i >= 0; i--) {
      display.value = word.slice(0, i);
      await sleep(40);
    }

    current.value = (current.value + 1) % words.length;
  }
}

function onEdit(id: string) {
  const p = habits.value.find((h) => h.id === id);
  if (p) editingPlan.value = { ...p };
}

function onToggle(id: string) {
  toggleActive(id);
}

onMounted(loop);
</script>
