<template>
  <div class="container mx-auto px-4 py-12">
    <div v-if="product" class="bg-white rounded-lg shadow-md p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <img :src="product.imageUrl" :alt="product.title" class="w-full h-96 object-cover rounded-lg shadow-lg mb-4" />
        <div class="grid grid-cols-4 gap-2">
          <img :src="product.imageUrl" class="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition" />
          <img src="https://via.placeholder.com/100x80/fde047/FFFFFF?text=View2" class="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition" />
          <img src="https://via.placeholder.com/100x80/a78bfa/FFFFFF?text=View3" class="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition" />
          <img src="https://via.placeholder.com/100x80/fbbf24/FFFFFF?text=View4" class="w-full h-20 object-cover rounded-md cursor-pointer hover:opacity-80 transition" />
        </div>
      </div>

      <div>
        <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ product.title }}</h1>
        <p class="text-green-600 font-extrabold text-3xl mb-6">{{ product.price }}</p>

        <div class="space-y-3 text-gray-700 mb-8">
          <p class="flex items-center"><span class="font-semibold w-24">Category:</span> <span class="capitalize">{{ product.category }}</span></p>
          <p class="flex items-center"><span class="font-semibold w-24">Location:</span> {{ product.location }}</p>
          <p class="flex items-center"><span class="font-semibold w-24">Posted:</span> {{ product.createdAt }}</p>
          <p class="flex items-center"><span class="font-semibold w-24">Condition:</span> Used (example)</p>
        </div>

        <h2 class="text-2xl font-bold text-gray-800 mb-4">Description</h2>
        <p class="text-gray-700 leading-relaxed mb-8">
          This is a detailed description of the {{ product.title }}. It's in excellent condition, well-maintained, and ready for its new owner. Perfect for daily commutes or long journeys. Serious inquiries only. Negotiable within reasonable limits.
          </p>

        <h2 class="text-2xl font-bold text-gray-800 mb-4">Seller Information</h2>
        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
          <p class="text-gray-700 font-semibold mb-2">Seller: John Doe (Verified)</p>
          <p class="text-gray-700 mb-2">Member since: Jan 2023</p>
          <UiButton class="w-full mb-2" variant="primary">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            Chat with Seller
          </UiButton>
          <UiButton class="w-full" variant="outline">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z"></path></svg>
            Show Phone Number
          </UiButton>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-600 text-xl mt-12">
      Product not found.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { latestAds } from '~/constants/ads'; // Our dummy ad data
import type { Ad } from '~/types/ad'; // Import Ad type

definePageMeta({ layout: 'default' });

const route = useRoute();
const productId = ref(route.params.id as string);
const product = ref<Ad | undefined>(undefined);

// In a real application, you would fetch product data from an API
// For now, we'll find it from our dummy data
watchEffect(() => {
  product.value = latestAds.find(ad => ad.id === productId.value);
  if (product.value) {
    useHead({
      title: product.value.title,
      meta: [
        { name: 'description', content: product.value.title + ' for sale in ' + product.value.location },
        { property: 'og:image', content: product.value.imageUrl }
      ]
    });
  }
});
</script>