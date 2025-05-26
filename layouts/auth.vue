<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="text-3xl font-bold text-green-600">
          Jjit.Ethiopia
        </NuxtLink>
        <h2 class="text-2xl font-semibold text-gray-800 mt-4">
          <slot name="title">Welcome</slot>
        </h2>
      </div>
      <slot /> </div>
  </div>
</template>

<script setup lang="ts">
// No specific script logic needed for this auth layout
</script>