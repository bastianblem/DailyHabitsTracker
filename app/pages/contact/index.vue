<template>
  <Header />
  <main class="px-6 py-12">
    <div class="mx-auto max-w-2xl">
      <h1 class="mb-8 text-4xl font-bold">Kontakt</h1>
      <ContactForm />
    </div>
  </main>
  <Footer />
</template>
<script setup lang="ts">
import Footer from "~/components/footer/Footer.vue";
import ContactForm from "~/components/forms/ContactForm.vue";
import Header from "~/components/header/Header.vue";
</script>
