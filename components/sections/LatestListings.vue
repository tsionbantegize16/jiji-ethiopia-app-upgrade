<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Latest Listings</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="ad in latestAds"
        :key="ad.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
      >
        <NuxtLink :to="`/product/${ad.id}`" class="block">
          <img :src="ad.imageUrl" :alt="ad.title" class="w-full h-48 object-cover" loading="lazy" />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800 truncate mb-2">{{ ad.title }}</h3>
            <p class="text-green-600 font-bold text-lg mb-2">{{ ad.price }}</p>
            <p class="text-gray-600 text-sm mb-1">📍 {{ ad.location }}</p>
            <p class="text-gray-500 text-xs">{{ ad.createdAt }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="text-center mt-8">
      <NuxtLink to="/category/all" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
        View All Ads
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { latestAds } from '~/constants/ads'; // Import latest ads
</script>