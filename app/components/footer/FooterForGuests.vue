<template>
  <footer class="mt-4 border-t border-border/60 bg-surface/30 backdrop-blur">
    <div
      class="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p class="text-sm font-medium text-accent">Habit Builder</p>
        <p class="text-xs text-muted">
          Build consistency with us, you can do it!
        </p>
      </div>
      <div class="flex gap-6 text-sm text-muted">
        <NuxtLink to="/guest" class="hover:text-accent transition"
          >About</NuxtLink
        >
        <NuxtLink to="/contact" class="hover:text-accent transition"
          >Contact</NuxtLink
        >
        <NuxtLink
          to="https://github.com/bastianblem/DailyHabitsTracker"
          target="_blank"
          class="hover:text-accent transition"
          >GitHub</NuxtLink
        >
      </div>
      <div class="text-xs text-muted">
        © {{ new Date().getFullYear() }} HabitBuilder
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
