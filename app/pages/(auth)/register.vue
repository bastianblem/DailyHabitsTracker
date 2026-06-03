<template>
  <main class="flex flex-col justify-center items-center gap-4">
    <h1 class="font-bold text-4xl">Willkommen bei der Acccount-Erstellung!</h1>
    <p>Registriere dich, um unser umfängliches Angebot zu nutzen.</p>
    <div
      class="flex flex-col justify-center items-center text-center gap-2 mt-4"
    >
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
        <ActionButton variant="secondary" width="compact" to="/login">
          Registrieren
        </ActionButton>

        <NuxtLink to="/login">Ich habe bereits ein Konto.</NuxtLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import ActionButton from "~/components/buttons/ActionButton.vue";

definePageMeta({ layout: "auth" });
</script>
