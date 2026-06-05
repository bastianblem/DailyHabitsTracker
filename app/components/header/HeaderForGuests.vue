<template>
  <header
    class="mb-10 flex items-center justify-between rounded-card border border-border bg-surface/70 px-5 py-4 shadow-soft backdrop-blur"
  >
    <NuxtLink class="text-lg font-semibold tracking-tight text-text"
      >Habit Builder</NuxtLink
    >

    <nav class="flex items-center gap-4 text-sm">
      <NuxtLink to="/guest" class="text-text/80 transition hover:text-text"
        >How To</NuxtLink
      >
      <NuxtLink to="/guest" class="text-text/80 transition hover:text-text"
        >About</NuxtLink
      >
      <NuxtLink to="/guest" class="text-text/80 transition hover:text-text"
        >Contact</NuxtLink
      >
      <ActionButton variant="primary" width="compact" to="/login">
        Login
      </ActionButton>

      <ActionButton variant="secondary" width="compact" to="/register">
        Start Now
      </ActionButton>
    </nav>
  </header>
</template>
<script setup lang="ts">
import ActionButton from "../buttons/ActionButton.vue";
</script>
