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
        <input
          type="text"
          placeholder="Passwort wiederholen"
          class="p-4 py-2 rounded-full border border-gray-500"
        />
      </div>
      <div class="flex flex-col gap-2">
        <button
          class="bg-black/80 text-white font-medium px-4 py-2 rounded-full border border-black transition hover:bg-black hover:scale-105"
        >
          Registrieren
        </button>
        <p>Ich habe bereits ein Konto.</p>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts"></script>
