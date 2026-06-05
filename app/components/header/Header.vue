<template>
  <header
    class="mx-auto mt-8 mb-10 flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-surface/40 px-5 py-4 shadow-soft backdrop-blur-xl"
  >
    <NuxtLink to="/" class="text-lg font-semibold tracking-tight text-text"
      >Habit Builder</NuxtLink
    >

    <nav class="flex items-center gap-4 text-sm">
      <NuxtLink to="/" class="text-text/80 transition hover:text-text"
        >Dashboard</NuxtLink
      >
      <NuxtLink to="/contact" class="text-text/80 transition hover:text-text"
        >Contact</NuxtLink
      >
      <NuxtLink to="/settings" class="text-text/80 transition hover:text-text"
        >Settings</NuxtLink
      >
      <ActionButton variant="secondary" width="compact" to="/guest">
        Logout
      </ActionButton>
    </nav>
  </header>
</template>
<script setup lang="ts">
import ActionButton from "../buttons/ActionButton.vue";
</script>
