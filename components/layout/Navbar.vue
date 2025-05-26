<template>
  <nav class="bg-white shadow-sm py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-green-600">
        Jjit.Ethiopia
      </NuxtLink>

      <div class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/" class="text-gray-600 hover:text-green-600 font-medium">Home</NuxtLink>
        <NuxtLink to="/post/new" class="text-gray-600 hover:text-green-600 font-medium">Post an Ad</NuxtLink>
        <NuxtLink to="/auth/login" class="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition duration-200 ease-in-out">Login</NuxtLink>
        <NuxtLink to="/auth/register" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200 ease-in-out">Register</NuxtLink>
      </div>

      <button @click="toggleMobileMenu" class="md:hidden text-gray-600 hover:text-green-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <transition name="slide-fade">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-lg py-4 border-t border-gray-100">
        <div class="flex flex-col items-center space-y-4 px-4">
          <NuxtLink to="/" class="block text-gray-800 hover:text-green-600 font-medium py-2 w-full text-center" @click="toggleMobileMenu">Home</NuxtLink>
          <NuxtLink to="/post/new" class="block text-gray-800 hover:text-green-600 font-medium py-2 w-full text-center" @click="toggleMobileMenu">Post an Ad</NuxtLink>
          <NuxtLink to="/auth/login" class="block px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 w-full text-center" @click="toggleMobileMenu">Login</NuxtLink>
          <NuxtLink to="/auth/register" class="block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 w-full text-center" @click="toggleMobileMenu">Register</NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Transition styles for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>