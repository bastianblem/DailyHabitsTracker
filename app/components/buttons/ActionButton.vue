<template>
  <NuxtLink v-if="props.to" :to="props.to" v-bind="attrs" :class="classes">
    <slot />
  </NuxtLink>

  <a v-else-if="props.href" :href="props.href" v-bind="attrs" :class="classes">
    <slot />
  </a>

  <button
    v-else
    :type="props.type"
    v-bind="attrs"
    :class="classes"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ inheritAttrs: false });

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";
type Width = "auto" | "compact" | "full";

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    size?: Size;
    width?: Width;
    to?: string;
    href?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    size: "md",
    width: "auto",
    type: "button",
    disabled: false,
  },
);

const variantClasses: Record<Variant, string> = {
  primary: "bg-black text-white border border-black hover:bg-black/80",
  secondary: "bg-white/80 text-black border border-black hover:bg-white",
  ghost: "bg-transparent text-text border border-border hover:bg-surface/80",
  danger: "bg-red-600 text-white border border-red-700 hover:bg-red-500",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const widthClasses: Record<Width, string> = {
  auto: "w-fit",
  compact: "min-w-[10rem]",
  full: "w-full",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium transition duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50";

const classes = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
  widthClasses[props.width],
]);

const attrs = useAttrs();
</script>
