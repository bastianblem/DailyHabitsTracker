<template>
  <header
    class="mx-auto mt-8 mb-10 flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-surface/40 px-5 py-4 shadow-soft backdrop-blur-xl"
  >
    <NuxtLink to="/" class="text-lg font-semibold tracking-tight text-text"
      >Habit Builder</NuxtLink
    >

    <nav class="flex items-center gap-4 text-sm">
      <NuxtLink to="/guest" class="text-text/80 transition hover:text-text"
        >About</NuxtLink
      >
      <NuxtLink to="/contact" class="text-text/80 transition hover:text-text"
        >Contact</NuxtLink
      >
      <NuxtLink
        to="https://github.com/bastianblem/DailyHabitsTracker"
        target="_blank"
        class="text-text/80 transition hover:text-text"
        >GitHub</NuxtLink
      >
      <div class="flex gap-1">
        <ActionButton variant="secondary" width="compact" to="/login">
          Login
        </ActionButton>
        <ActionButton variant="primary" width="compact" to="/register">
          Register
        </ActionButton>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import ActionButton from "../buttons/ActionButton.vue";
</script>
