<template>
  <form
    @submit.prevent="onSubmit"
    class="space-y-4 mx-auto w-full max-w-xl px-4 py-6"
  >
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">
        {{ editing ? "Edit Habit" : "Add Habit" }}
      </h3>
    </div>

    <div
      :class="[
        'grid gap-3 w-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-shadow duration-200 focus-within:ring-4 focus-within:ring-accent/40',
        editing ? 'ring-4 ring-amber-400/40' : '',
      ]"
    >
      <div>
        <label class="block text-sm font-medium mb-1">Title</label>
        <input
          v-model="title"
          type="text"
          placeholder="e.g. 10k steps"
          class="w-full p-3 rounded-xl border border-border bg-surface/80 text-text"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Description</label>
        <input
          v-model="description"
          type="text"
          placeholder="Optional description"
          class="w-full p-3 rounded-xl border border-border bg-surface/80 text-text"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">Starting date</label>
        <input
          v-model="startDate"
          type="date"
          class="w-full p-3 rounded-xl border border-border bg-surface/80 text-text"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">Your goal</label>
        <input
          v-model="goal"
          type="number"
          min="1"
          placeholder="Optional goal"
          class="w-full p-3 rounded-xl border border-border bg-surface/80 text-text"
        />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">Steps ahead</label>
        <textarea
          v-model="stepsText"
          placeholder="Comma-seperated steps"
          class="w-full p-3 rounded-xl border border-border bg-surface/80 text-text"
          rows="4"
        />
      </div>

      <div class="flex gap-2">
        <div class="flex-1">
          <label class="block text-sm font-medium mb-1">Repetition</label>
          <select
            v-model="repetition"
            class="w-full p-3 rounded-xl border border-border bg-surface/80 text-text"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div class="flex-1">
          <label class="block text-sm font-medium mb-1">Rating</label>
          <select
            v-model="rating"
            class="w-full p-3 rounded-xl border border-border bg-surface/80 text-text"
          >
            <option value="good">Good</option>
            <option value="neither">Neither</option>
            <option value="bad">Bad</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Color</label>
        <input v-model="color" type="color" class="h-10 w-12 rounded" />
      </div>
    </div>

    <div class="flex gap-2 mt-4">
      <button
        type="button"
        @click="onCancel"
        class="bg-white/10 px-4 py-2 rounded-xl"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="bg-accent px-4 py-2 rounded-xl text-accent-text"
      >
        {{ editing ? "Save" : "Add Habit" }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import type { HabitPlan, HabitRating, HabitState } from "~/types/habit";

const props = defineProps<{ initial?: HabitPlan | null }>();

const emit = defineEmits<{
  (e: "submit", habit: HabitPlan): void;
  (e: "cancel"): void;
}>();

const title = ref("");
const description = ref("");
const startDate = ref("");
const goal = ref<number | null>(null);
const stepsText = ref("");
const rating = ref<HabitRating>("neither");
const repetition = ref<HabitState>("daily");
const color = ref("#f59e0b");

// Prefill when editing
watch(
  () => props.initial,
  (v) => {
    if (!v) {
      resetForm();
      return;
    }
    title.value = v.title || "";
    description.value = v.description || "";
    startDate.value = v.startDate || "";
    goal.value = typeof v.goal === "number" ? v.goal : null;
    stepsText.value = (v.steps || []).join(", ");
    rating.value = v.rating ?? "neither";
    repetition.value = v.repetition ?? "daily";
    color.value = v.color ?? "#f59e0b";
  },
  { immediate: true },
);

const editing = computed(() => !!props.initial);

function buildHabit(): HabitPlan {
  const id =
    props.initial?.id ??
    globalThis.crypto?.randomUUID?.() ??
    String(Date.now());
  return {
    id,
    title: title.value.trim(),
    description: description.value.trim() || undefined,
    rating: rating.value,
    repetition: repetition.value,
    startDate: startDate.value || undefined,
    goal: goal.value ?? undefined,
    steps: stepsText.value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    active: props.initial?.active ?? true,
    color: color.value,
    createdAt: props.initial?.createdAt ?? Date.now(),
  };
}

function resetForm() {
  title.value = "";
  description.value = "";
  startDate.value = "";
  goal.value = null;
  stepsText.value = "";
  rating.value = "neither";
  repetition.value = "daily";
  color.value = "#f59e0b";
}

function onSubmit() {
  if (!title.value.trim()) return;
  emit("submit", buildHabit());
  resetForm();
}

function onCancel() {
  resetForm();
  emit("cancel");
}
</script>
