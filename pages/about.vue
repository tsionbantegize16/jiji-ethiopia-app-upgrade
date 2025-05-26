<template>
  <div class="container mx-auto px-4 py-12 text-center">
    <h1 class="text-4xl font-bold mb-4 text-gray-800">About Jjit.Ethiopia</h1>
    <p class="text-lg text-gray-700 max-w-2xl mx-auto">
      Jjit.Ethiopia is your premier online classifieds platform dedicated to connecting buyers and sellers across Ethiopia. Our mission is to provide a free, fast, and secure marketplace for everyone to find what they need or sell what they don't.
    </p>
    <div class="mt-8 flex justify-center space-x-4">
      <NuxtLink to="/contact" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200">Contact Us</NuxtLink>
      <NuxtLink to="/post/new" class="border border-green-600 text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-md transition duration-200">Post an Ad</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' });
</script>