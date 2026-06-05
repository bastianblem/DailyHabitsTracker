<template>
  <Header />
  <main>
    <div class="mx-auto max-w-2xl space-y-6">
      <!-- Header -->
      <div>
        <h1 class="text-2xl font-semibold text-text">Account Settings</h1>
        <p class="text-sm text-muted">
          Manage your profile and account preferences.
        </p>
      </div>

      <!-- Profile -->
      <section
        class="rounded-card border border-border bg-surface/40 p-6 space-y-4"
      >
        <h2 class="text-sm font-medium text-text">Profile</h2>

        <div class="flex flex-col gap-1">
          <label class="text-xs text-muted">Name</label>
          <input value="John Doe" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-xs text-muted">Email</label>
          <input value="john@example.com" />
        </div>

        <button
          class="mt-2 text-sm text-accent hover:text-accent-strong transition"
        >
          Save changes
        </button>
      </section>

      <!-- Password -->
      <section
        class="rounded-card border border-border bg-surface/40 p-6 space-y-4"
      >
        <h2 class="text-sm font-medium text-text">Password</h2>

        <div class="flex flex-col gap-1">
          <label class="text-xs text-muted">Current password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-xs text-muted">New password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <button class="text-sm text-accent hover:text-accent-strong transition">
          Update password
        </button>
      </section>

      <!-- Danger Zone -->
      <section
        class="rounded-card border border-border bg-surface/20 p-6 space-y-4"
      >
        <h2 class="text-sm font-medium text-red-400">Acount deletion option</h2>

        <p class="text-xs text-muted">This action cannot be undone.</p>

        <button class="text-sm text-red-400 hover:text-red-300 transition">
          Delete account
        </button>
      </section>
    </div>
  </main>
  <Footer />
</template>
<script setup lang="ts">
import Footer from "~/components/footer/Footer.vue";
import Header from "~/components/header/Header.vue";
</script>
