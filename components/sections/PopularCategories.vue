<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Popular Categories</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      <div
        v-for="category in categories"
        :key="category.slug"
        class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
      >
        <NuxtLink :to="`/category/${category.slug}`" class="block">
          <div class="text-5xl mb-4 text-green-600">{{ category.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ category.name }}</h3>
          <p v-if="category.count" class="text-gray-500 text-sm">{{ category.count }} listings</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { categories } from '~/constants/categories'; // Import categories
</script>