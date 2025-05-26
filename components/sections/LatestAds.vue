<template>
  <section class="py-12 max-w-6xl mx-auto">
    <h2 class="text-3xl font-semibold mb-8 text-center">Latest Listings</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="ad in ads" :key="ad.id" class="border rounded-lg overflow-hidden hover:shadow-lg transition">
        <NuxtLink :to="`/product/${ad.id}`">
          <img :src="ad.image" alt="ad.title" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ ad.title }}</h3>
            <p class="text-blue-600 font-bold mb-1">{{ ad.price | currency }}</p>
            <p class="text-gray-500 text-sm">{{ ad.location }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ad } from '~/types/ad'

const ads = ref<Ad[]>([])

onMounted(async () => {
  // Replace this with your API call to fetch latest ads
  ads.value = [
    {
      id: '1',
      title: 'Toyota Corolla 2015',
      price: 1500000,
      image: '/images/toyota-corolla.jpg',
      category: 'cars',
      location: 'Addis Ababa',
      createdAt: '2025-05-20',
    },
    {
      id: '2',
      title: '3 Bedroom Apartment for Rent',
      price: 12000,
      image: '/images/apartment.jpg',
      category: 'real-estate',
      location: 'Bahir Dar',
      createdAt: '2025-05-21',
    },
    {
      id: '3',
      title: 'Samsung Galaxy S21',
      price: 25000,
      image: '/images/galaxy-s21.jpg',
      category: 'electronics',
      location: 'Addis Ababa',
      createdAt: '2025-05-22',
    },
  ]
})
</script>

<script lang="ts">
export default {
  filters: {
    currency(value: number) {
      return new Intl.NumberFormat('en-ET', {
        style: 'currency',
        currency: 'ETB',
      }).format(value)
    },
  },
}
</script>
