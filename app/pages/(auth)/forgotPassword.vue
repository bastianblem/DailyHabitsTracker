<template>
  <main class="flex flex-col justify-center items-center gap-4">
    <h1 class="font-bold text-4xl">You forgot your Password?</h1>
    <p>
      Type in your email adress. We will send you a password reset via email. Be
      ready.
    </p>
    <div
      class="flex flex-col justify-center items-center text-center gap-2 mt-4"
    >
      <div class="flex flex-col gap-2">
        <input
          type="text"
          placeholder="email adress"
          class="p-4 py-2 rounded-full border border-gray-500"
        />
      </div>
      <div class="flex flex-col gap-2">
        <ActionButton variant="secondary" width="compact" to="/login">
          Request reset
        </ActionButton>
        <div class="flex flex-col gap-1">
          <NuxtLink to="/login">Back to login</NuxtLink>
          <NuxtLink to="/register">Back to register</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import ActionButton from "~/components/buttons/ActionButton.vue";

definePageMeta({
  layout: "auth",
});
</script>
