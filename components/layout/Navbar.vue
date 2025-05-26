<template>
  <nav :class="['py-4 shadow-sm transition-colors duration-300', colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800']">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-green-600 dark:text-green-400">
        Jjit.Ethiopia
      </NuxtLink>

      <div class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/post/new" class="nav-link">Post an Ad</NuxtLink>
        <NuxtLink to="/auth/login" class="nav-button border">Login</NuxtLink>
        <NuxtLink to="/auth/register" class="nav-button filled">Register</NuxtLink>
        <button @click="toggleColorMode" class="ml-2 text-xl" :title="`Switch to ${colorMode === 'dark' ? 'Light' : 'Dark'} mode`">
          <span v-if="colorMode === 'dark'">🌞</span>
          <span v-else>🌙</span>
        </button>
      </div>

      <button @click="toggleMobileMenu" class="md:hidden focus:outline-none">
        <svg class="w-6 h-6" :class="colorMode === 'dark' ? 'text-white' : 'text-gray-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <transition name="slide-fade">
      <div v-if="isMobileMenuOpen" class="md:hidden px-4 py-6 border-t" :class="colorMode === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'">
        <div class="flex flex-col items-center space-y-4">
          <NuxtLink to="/" class="mobile-link" @click="toggleMobileMenu">Home</NuxtLink>
          <NuxtLink to="/post/new" class="mobile-link" @click="toggleMobileMenu">Post an Ad</NuxtLink>
          <NuxtLink to="/auth/login" class="mobile-button border" @click="toggleMobileMenu">Login</NuxtLink>
          <NuxtLink to="/auth/register" class="mobile-button filled" @click="toggleMobileMenu">Register</NuxtLink>
          <button @click="toggleColorMode" class="text-xl">
            <span v-if="colorMode === 'dark'">🌞 Light</span>
            <span v-else>🌙 Dark</span>
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useColorMode } from '@vueuse/core'

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Dark/Light mode
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
/* Transition for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Desktop links */
.nav-link {
  @apply text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium;
}

/* Desktop buttons */
.nav-button {
  @apply px-4 py-2 rounded-md transition duration-200 ease-in-out;
}
.nav-button.border {
  @apply border border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900;
}
.nav-button.filled {
  @apply bg-green-600 text-white hover:bg-green-700;
}

/* Mobile links/buttons */
.mobile-link {
  @apply block w-full text-center text-gray-800 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 font-medium py-2;
}
.mobile-button {
  @apply block w-full text-center px-4 py-2 rounded-md;
}
.mobile-button.border {
  @apply border border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900;
}
.mobile-button.filled {
  @apply bg-green-600 text-white hover:bg-green-700;
}
</style>
