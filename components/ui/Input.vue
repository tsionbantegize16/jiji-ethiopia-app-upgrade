<template>
  <input
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :placeholder="placeholder"
    :class="inputClasses"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

type InputType = 'text' | 'email' | 'password' | 'number' | 'search';

const props = withDefaults(defineProps<{
  modelValue: string | number;
  type?: InputType;
  placeholder?: string;
}>(), {
  type: 'text',
  placeholder: '',
});

const inputClasses = computed(() => {
  return 'w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out text-gray-800';
});

defineEmits(['update:modelValue']);
</script>