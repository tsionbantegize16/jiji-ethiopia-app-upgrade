<template>
  <button
    :class="[
      'px-4 py-2 rounded-md font-semibold transition-colors',
      primary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ primary?: boolean }>()
</script>
