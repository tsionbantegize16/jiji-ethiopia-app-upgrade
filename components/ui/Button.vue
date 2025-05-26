<template>
  <button :class="buttonClasses" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

const props = withDefaults(defineProps<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  fullWidth?: boolean;
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  fullWidth: false,
});

const buttonClasses = computed(() => {
  const base = 'font-semibold rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  const width = props.fullWidth ? 'w-full' : 'inline-flex items-center justify-center';

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-300',
  };

  return [base, sizes[props.size], variants[props.variant], width];
});
</script>