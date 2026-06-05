<template>
  <section class="space-y-3">
    <div class="text-sm text-muted">Overview</div>
    <div class="flex gap-4">
      <div>
        <div class="text-2xl font-bold">
          {{ total }}
        </div>
        <div class="text-xs text-muted">Total plans</div>
      </div>
      <div>
        <div class="text-2xl font-bold">{{ active }}</div>
        <div class="text-xs text-muted">Active</div>
      </div>
      <div>
        <div class="text-2xl font-bold">{{ startsThisWeek }}</div>
        <div class="text-xs text-muted">Start this week</div>
      </div>
    </div>

    <div class="mt-2 grid grid-cols-3 gap-2 text-xs">
      <div>Daily: {{ byRepetition.daily }}</div>
      <div>Weekly: {{ byRepetition.weekly }}</div>
      <div>Monthly: {{ byRepetition.monthly }}</div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import type { HabitPlan } from "~/types/habit";

const props = defineProps<{ plans: HabitPlan[] }>();
const total = computed(() => props.plans.length);
const active = computed(() => props.plans.filter((p) => p.active).length);

const byRepetition = computed(() => ({
  daily: props.plans.filter((p) => p.repetition === "daily").length,
  weekly: props.plans.filter((p) => p.repetition === "weekly").length,
  monthly: props.plans.filter((p) => p.repetition === "monthly").length,
}));

const startsThisWeek = computed(() => {
  const now = new Date();
  const weekFromNow = new Date(now);
  weekFromNow.setDate(now.getDate() + 7);
  return props.plans.filter(
    (p) =>
      p.startDate &&
      new Date(p.startDate) >= now &&
      new Date(p.startDate) <= weekFromNow,
  ).length;
});
</script>
