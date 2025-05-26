<template>
  <section class="py-12 max-w-6xl mx-auto">
    <h2 class="text-3xl font-semibold mb-8 text-center">Browse Categories</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <NuxtLink
        v-for="category in categories"
        :key="category.slug"
        :to="`/category/${category.slug}`"
        class="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition"
      >
        <span class="text-5xl mb-2">{{ category.icon }}</span>
        <span class="text-lg font-medium">{{ category.name }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { categories } from '~/constants/categories'
</script>
