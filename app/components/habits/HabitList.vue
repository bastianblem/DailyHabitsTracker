<template>
  <div class="mx-auto space-y-4 w-full px-4 py-6">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">Your list of habits</h3>
    </div>

    <div
      v-if="!habits || habits.length === 0"
      class="rounded-2xl border border-border bg-surface/80 p-6 text-center"
    >
      <p class="text-muted">
        No plans yet. Add your first plan to get started.
      </p>
    </div>

    <div v-else class="grid gap-4 md:grid-cols-2">
      <HabitCard
        v-for="h in habits"
        :key="h.id"
        :habit="h"
        @toggle="$emit('toggle', $event)"
        @edit="$emit('edit', $event)"
        @delete="$emit('delete', $event)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { HabitPlan } from "~/types/habit";
import HabitCard from "~/components/cards/HabitCard.vue";

defineProps<{
  habits: HabitPlan[];
}>();

const emit = defineEmits<{
  (e: "toggle", id: string): void;
  (e: "edit", id: string): void;
  (e: "delete", id: string): void;
}>();
</script>
