<template>
  <main class="flex flex-col justify-center items-center gap-2 mt-28">
    <h1 class="font-bold text-4xl">Willkommen auf der Seite für Gäste!</h1>
    <p>Logge dich ein, um deine Habits zu tracken!</p>
    <div class="flex justify-center items-center gap-2 mt-4">
      <NuxtLink to="/login" custom v-slot="{ navigate, isActive }">
        <button
          type="button"
          @click="navigate"
          :aria-current="isActive ? 'page' : undefined"
          class="bg-black/80 text-white font-medium px-4 py-2 rounded-full border border-black transition hover:bg-black hover:scale-105"
        >
          Zum Login
        </button></NuxtLink
      >
      <NuxtLink to="/register" custom v-slot="{ navigate, isActive }">
        <button
          type="button"
          @click="navigate"
          :aria-current="isActive ? 'page' : undefined"
          class="bg-amber-500/80 font-medium px-4 py-2 rounded-full border border-black transition hover:bg-amber-500 hover:scale-105"
        >
          Registrieren
        </button></NuxtLink
      >
    </div>
  </main>
</template>
<script setup lang="ts"></script>
