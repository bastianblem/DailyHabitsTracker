<template>
  <header
    class="mb-10 flex items-center justify-between rounded-card border border-border bg-surface/70 px-5 py-4 shadow-soft backdrop-blur"
  >
    <NuxtLink to="/" class="text-lg font-semibold tracking-tight text-text"
      >HabitsTracker</NuxtLink
    >

    <nav class="flex items-center gap-4 text-sm">
      <NuxtLink to="/" class="text-text/80 transition hover:text-text"
        >Dashboard</NuxtLink
      >
      <NuxtLink to="/" class="text-text/80 transition hover:text-text"
        >Contact</NuxtLink
      >
      <NuxtLink to="/" class="text-text/80 transition hover:text-text"
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
