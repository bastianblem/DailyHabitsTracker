<template>
  <HeaderForGuests />
  <main class="mx-auto w-full max-w-6xl px-6 py-10">
    <div class="mt-8 flex-col justify-center gap-4">
      <h1 class="font-bold text-4xl">Welcome to Habit Builder!</h1>
      <p class="mt-4 mx-auto text-2xl tracking-tight text-text text-left">
        With us you can build your <span class="text-accent">habits</span> to
        increase your life's happiness and productiveness!
      </p>
      <div class="mt-8 flex gap-4 max-w-2xl">
        <ActionButton variant="secondary" to="/register"
          >Get Started</ActionButton
        >
        <ActionButton variant="primary" to="/login">Sign In</ActionButton>
      </div>
    </div>
    <section class="mt-20 grid gap-6 md:grid-cols-3">
      <div class="rounded-card border border-border bg-surface/40 p-6">
        <h2 class="mb-2 font-semibold">Track Daily Habits</h2>
        <p class="text-muted text-sm">
          Create habits and keep track of your daily progress.
        </p>
      </div>

      <div class="rounded-card border border-border bg-surface/40 p-6">
        <h2 class="mb-2 font-semibold">Build Streaks</h2>
        <p class="text-muted text-sm">
          Stay consistent and visualize your progress over time.
        </p>
      </div>

      <div class="rounded-card border border-border bg-surface/40 p-6">
        <h2 class="mb-2 font-semibold">Stay Motivated</h2>
        <p class="text-muted text-sm">
          Small improvements every day lead to big results.
        </p>
      </div>
    </section>
    <section class="mt-20">
      <div
        class="rounded-card border border-border bg-surface/40 p-8 shadow-soft"
      >
        <h2 class="mb-6 text-xl font-semibold">Your habits at a glance</h2>

        <div class="space-y-3">
          <div class="flex justify-between rounded-xl bg-surface-2 p-4">
            <span>Drink Water</span>
            <span class="text-accent">14 day streak</span>
          </div>

          <div class="flex justify-between rounded-xl bg-surface-2 p-4">
            <span>Read 10 Pages</span>
            <span class="text-accent">7 day streak</span>
          </div>

          <div class="flex justify-between rounded-xl bg-surface-2 p-4">
            <span>Morning Walk</span>
            <span class="text-accent">21 day streak</span>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-20 text-center">
      <blockquote class="text-2xl font-medium text-text">
        "We are what we repeatedly do. Excellence, then, is not an act, but a
        habit."
      </blockquote>

      <p class="mt-3 text-sm text-muted">— Kobe Brian</p>
    </section>
    <section class="mt-24 text-center">
      <h2 class="text-3xl font-semibold">
        Start building better habits today.
      </h2>

      <p class="mt-3 text-muted">Join Habit Builder and take the first step.</p>

      <div class="mt-6">
        <ActionButton to="/register"> Create Free Account </ActionButton>
      </div>
    </section>
  </main>
  <FooterForGuests />
</template>
<script setup lang="ts">
import ActionButton from "~/components/buttons/ActionButton.vue";
import FooterForGuests from "~/components/footer/FooterForGuests.vue";
import HeaderForGuests from "~/components/header/HeaderForGuests.vue";
</script>
