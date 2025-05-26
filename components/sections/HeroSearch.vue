<template>
  <section class="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-20 px-4 text-center">
    <div class="container mx-auto">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Find Anything — Fast and Free!
      </h1>
      <p class="text-lg md:text-xl mb-8 opacity-90">
        Millions of products, services, and opportunities at your fingertips.
      </p>

      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <UiInput
          v-model="searchQuery"
          type="search"
          placeholder="What are you looking for?"
        />
        <UiSelect v-model="selectedCategory" placeholder="All Categories">
          <option v-for="category in categories" :key="category.slug" :value="category.slug">
            {{ category.name }}
          </option>
        </UiSelect>
        <UiSelect v-model="selectedLocation" placeholder="All Locations">
          <option v-for="location in locations" :key="location.slug" :value="location.slug">
            {{ location.name }}
          </option>
        </UiSelect>
        <UiButton @click="performSearch" variant="primary">
          Search
        </UiButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { categories } from '~/constants/categories'; // Import categories
import { locations } from '~/constants/locations';   // Import locations

const searchQuery = ref('');
const selectedCategory = ref('');
const selectedLocation = ref('');

const performSearch = () => {
  // In a real application, you'd navigate to a search results page
  // or trigger an API call based on these values.
  console.log('Search Query:', searchQuery.value);
  console.log('Category:', selectedCategory.value);
  console.log('Location:', selectedLocation.value);
  alert(`Searching for "${searchQuery.value}" in ${selectedCategory.value || 'All Categories'} near ${selectedLocation.value || 'All Locations'}`);

  // Example of programmatically navigating to a search results page:
  // const router = useRouter();
  // router.push({
  //   path: '/search',
  //   query: {
  //     q: searchQuery.value,
  //     category: selectedCategory.value,
  //     location: selectedLocation.value
  //   }
  // });
};
</script>