<template>
  <main class="flex flex-col justify-center items-center gap-4">
    <h1 class="font-bold text-4xl">Willkommen beim Login!</h1>
    <p>Logge dich ein, um unser umfängliches Angebot zu nutzen.</p>
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
      </div>
      <div class="flex flex-col gap-2">
        <ActionButton variant="secondary" width="compact" to="/">
          Login
        </ActionButton>
        <div class="flex flex-col gap-1">
          <NuxtLink to="/forgotPassword">Forgot your password?</NuxtLink>
          <NuxtLink to="/register">I have no account yet.</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import ActionButton from "~/components/buttons/ActionButton.vue";
definePageMeta({ layout: "auth" });
</script>
