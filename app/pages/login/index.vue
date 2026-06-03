<template>
  <main class="flex flex-col justify-center items-center gap-4 mt-28">
    <h1 class="font-bold text-4xl">Willkommen beim Login!</h1>
    <p>Logge dich ein, um unser umfängliches Angebot zu nutzen.</p>
    <div class="flex flex-col justify-center items-center gap-2 mt-4">
      <div class="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Benutzername"
          class="p-4 py-2 rounded-full border border-gray-500"
        />
        <input
          type="text"
          placeholder="Passwort"
          class="p-4 py-2 rounded-full border border-gray-500"
        />
      </div>
      <div class="flex flex-col gap-2">
        <NuxtLink to="/" custom v-slot="{ navigate, isActive }">
          <button
            type="button"
            @click="navigate"
            :aria-current="isActive ? 'page' : undefined"
            class="bg-black/80 text-white font-medium px-4 py-2 rounded-full border border-black transition hover:bg-black hover:scale-105"
          >
            Login
          </button>
        </NuxtLink>
        <div class="flex flex-col gap-1">
          <NuxtLink to="/guest">Passwort vergessen</NuxtLink>
          <NuxtLink to="/register">Ich habe noch kein Konto.</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts"></script>
