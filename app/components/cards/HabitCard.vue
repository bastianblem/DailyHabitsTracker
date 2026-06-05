<template>
  <article class="rounded-2xl border border-border bg-surface/80 p-4 shadow-sm">
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1">
        <h3 class="text-lg font-semibold">{{ habit.title }}</h3>
        <p v-if="habit.description" class="mt-1 text-sm text-muted">
          {{ habit.description }}
        </p>
      </div>

      <div class="flex items-center gap-3">
        <span
          class="h-4 w-4 rounded-full"
          :style="{ backgroundColor: habit.color || '#f59e0b' }"
        />
      </div>
    </div>

    <div class="mt-3 flex flex-wrap gap-2 text-xs text-muted">
      <span class="rounded-full border border-border px-3 py-1">{{
        habit.repetition
      }}</span>
      <span
        v-if="habit.startDate"
        class="rounded-full border border-border px-3 py-1"
        >Start: {{ habit.startDate }}</span
      >
      <span
        v-if="habit.goal !== undefined"
        class="rounded-full border border-border px-3 py-1"
        >Goal: {{ habit.goal }}</span
      >
      <span class="rounded-full border border-border px-3 py-1">{{
        habit.active ? "active" : "draft"
      }}</span>
    </div>

    <ul v-if="habit.steps?.length" class="mt-3 space-y-1 text-sm">
      <li v-for="(step, idx) in habit.steps" :key="idx" class="text-muted">
        • {{ step }}
      </li>
    </ul>

    <div class="grid grid-cols-3 mt-4 gap-3">
      <ActionButton
        variant="secondary"
        width="compact"
        @click="$emit('toggle', habit.id)"
        >Toggle</ActionButton
      >
      <ActionButton
        variant="primary"
        width="compact"
        @click="$emit('edit', habit.id)"
        >Edit</ActionButton
      >
      <ActionButton
        variant="danger"
        width="compact"
        @click="$emit('delete', habit.id)"
        >Delete</ActionButton
      >
    </div>
  </article>
</template>

<script setup lang="ts">
import type { HabitPlan } from "~/types/habit";
import ActionButton from "~/components/buttons/ActionButton.vue";

const props = defineProps<{ habit: HabitPlan }>();

const emit = defineEmits<{
  (e: "toggle", id: string): void;
  (e: "edit", id: string): void;
  (e: "delete", id: string): void;
}>();
</script>
