<template>
  <form v-if="!success" @submit.prevent="submit" class="flex flex-col gap-3">
    <div class="space-y-1">
      <label for="name">Your name</label>
      <input id="name" v-model="form.name" placeholder="name" />
    </div>
    <div class="space-y-1">
      <label for="email">Your email</label>
      <input id="email" v-model="form.email" placeholder="email" />
    </div>
    <div class="space-y-1">
      <label for="message">Your message</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="6"
        placeholder="Type in your message to us."
      />
    </div>
    <ActionButton
      type="submit"
      variant="secondary"
      width="compact"
      :disabled="loading"
      >{{ loading ? "Sending..." : "Send" }}</ActionButton
    >
  </form>

  <div v-else class="rounded-xl border border-border p-6 text-center">
    <h2 class="mb-2 text-xl font-semibold">Thank you!</h2>
    <p>
      Your message has been received. We will get back to you as soon as
      possible.
    </p>
  </div>
</template>
<script setup lang="ts">
import ActionButton from "../buttons/ActionButton.vue";

const { form, errors, loading, success, submit } = useContactForm();
</script>
