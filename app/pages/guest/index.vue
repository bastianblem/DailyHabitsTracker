<template>
  <HeaderForGuests />
  <main class="flex flex-col justify-center items-center gap-2 mt-28">
    <h1 class="font-bold text-4xl">Willkommen auf der Seite für Gäste!</h1>
    <p>Logge dich ein, um deine Habits zu tracken!</p>
    <ActionButton variant="ghost" to="/guest">Als Gast fortfahren</ActionButton>
    <div class="flex justify-center items-center gap-2 mt-4"></div>
  </main>
</template>
<script setup lang="ts">
import ActionButton from "~/components/buttons/ActionButton.vue";
import HeaderForGuests from "~/components/header/HeaderForGuests.vue";
</script>
