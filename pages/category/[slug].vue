<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6 text-gray-800 text-center">Category: <span class="text-green-600 capitalize">{{ categorySlug.replace(/-/g, ' ') }}</span></h1>
    <p class="text-lg text-gray-700 text-center mb-10">Currently displaying listings for {{ categorySlug.replace(/-/g, ' ') }}.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <aside class="md:col-span-1 bg-white p-6 rounded-lg shadow-md hidden md:block">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Filters</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold text-gray-700 mb-2">Location</h3>
            <UiSelect v-model="filterLocation" placeholder="Select Location">
              <option v-for="loc in locations" :key="loc.slug" :value="loc.slug">{{ loc.name }}</option>
            </UiSelect>
          </div>
          <div>
            <h3 class="font-semibold text-gray-700 mb-2">Price Range</h3>
            <div class="flex space-x-2">
              <UiInput v-model="minPrice" type="number" placeholder="Min Price" class="w-1/2" />
              <UiInput v-model="maxPrice" type="number" placeholder="Max Price" class="w-1/2" />
            </div>
          </div>
          <UiButton @click="applyFilters" fullWidth>Apply Filters</UiButton>
          <UiButton @click="resetFilters" variant="outline" fullWidth>Reset Filters</UiButton>
        </div>
      </aside>

      <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="ad in filteredAds"
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
    </div>

    <div v-if="filteredAds.length === 0" class="text-center text-gray-600 text-xl mt-12">
      No listings found for this category or filters.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { latestAds } from '~/constants/ads'; // Our dummy ad data
import { locations } from '~/constants/locations'; // Our dummy location data
import type { Ad } from '~/types/ad'; // Import Ad type

definePageMeta({ layout: 'default' });

const route = useRoute();
const categorySlug = ref(route.params.slug as string);

// Filter states
const filterLocation = ref('');
const minPrice = ref<number | null>(null);
const maxPrice = ref<number | null>(null);

const applyFilters = () => {
  // In a real application, this would trigger an API call with filters
  console.log('Applying filters:', {
    location: filterLocation.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
  });
  // For now, computed property will handle client-side filtering
};

const resetFilters = () => {
  filterLocation.value = '';
  minPrice.value = null;
  maxPrice.value = null;
};

const filteredAds = computed<Ad[]>(() => {
  let adsToFilter = latestAds.filter(ad => {
    // Filter by category slug (case-insensitive and handle spaces/dashes)
    const adCategorySlug = ad.category.toLowerCase().replace(/\s+/g, '-');
    return categorySlug.value === 'all' || adCategorySlug === categorySlug.value;
  });

  // Apply location filter
  if (filterLocation.value) {
    adsToFilter = adsToFilter.filter(ad =>
      ad.location.toLowerCase().replace(/\s+/g, '-') === filterLocation.value
    );
  }

  // Apply price range filter (simple logic, assumes price format is "ETB X,XXX")
  if (minPrice.value !== null && minPrice.value > 0) {
    adsToFilter = adsToFilter.filter(ad => {
      const priceNum = parseFloat(ad.price.replace(/[^0-9.-]+/g,"")); // Extract number from price string
      return priceNum >= minPrice.value!;
    });
  }
  if (maxPrice.value !== null && maxPrice.value > 0) {
    adsToFilter = adsToFilter.filter(ad => {
      const priceNum = parseFloat(ad.price.replace(/[^0-9.-]+/g,""));
      return priceNum <= maxPrice.value!;
    });
  }

  return adsToFilter;
});
</script>