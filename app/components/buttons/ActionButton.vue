<template>
  <component :is="componentTag" v-bind="componentProps" :class="buttonClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({ inheritAttrs: false });

type Variant = "primary" | "secondary" | "ghost" | "danger";

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    to?: string;
    href?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    type: "button",
    disabled: false,
  },
);

const attrs = useAttrs();

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-black text-white border border-black hover:bg-black/80 hover:scale-[1.02] shadow-sm",
  secondary:
    "bg-white/80 text-black border border-black hover:bg-white hover:scale-[1.02]",
  ghost:
    "bg-transparent text-text border border-border hover:bg-surface/80 hover:border-accent",
  danger:
    "bg-red-600 text-white border border-red-700 hover:bg-red-500 hover:scale-[1.02]",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-4 py-2 font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-50";

const buttonClass = computed(() => [
  baseClasses,
  variantClasses[props.variant],
]);

const componentTag = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  if (props.href) return "a";
  return "button";
});

const componentProps = computed(() => ({
  ...attrs,
  ...(props.to ? { to: props.to } : {}),
  ...(props.href
    ? { href: props.href, target: attrs.target ?? "_self", rel: attrs.rel }
    : {}),
  ...(props.href ? {} : { type: props.type }),
  disabled: props.href ? undefined : props.disabled,
}));
</script>
