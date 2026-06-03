<template>
  <Header />
  <main class="flex flex-col justify-center items-center gap-2 mt-28">
    <h1 class="font-bold text-4xl">Willkommen auf der HomePage!</h1>
    <p>
      Hier kannst du deine täglichen/wöchentlichen/monatlichen Habits tracken
      und verwalten.
    </p>
    <div class="flex justify-center items-center gap-2 mt-4"></div>
  </main>
</template>
<script setup lang="ts">
import Header from "~/components/header/Header.vue";
</script>
