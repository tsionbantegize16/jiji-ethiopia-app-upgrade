<template>
  <footer class="bg-gray-800 text-gray-300 py-8 mt-12">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Jjit.Ethiopia</h3>
        <p class="text-sm">Your trusted classifieds platform in Ethiopia. Find anything, sell anything, fast and free!</p>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="/" class="hover:text-green-500 transition duration-200">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-green-500 transition duration-200">About Us</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-green-500 transition duration-200">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/faq" class="hover:text-green-500 transition duration-200">FAQ</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Categories</h3>
        <ul class="space-y-2">
          <li><NuxtLink to="/category/vehicles" class="hover:text-green-500 transition duration-200">Vehicles</NuxtLink></li>
          <li><NuxtLink to="/category/real-estate" class="hover:text-green-500 transition duration-200">Real Estate</NuxtLink></li>
          <li><NuxtLink to="/category/electronics" class="hover:text-green-500 transition duration-200">Electronics</NuxtLink></li>
          <li><NuxtLink to="/category/jobs" class="hover:text-green-500 transition duration-200">Jobs</NuxtLink></li>
          <li><NuxtLink to="/category/all" class="hover:text-green-500 transition duration-200">View All</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Follow Us</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-green-500 transition duration-200" aria-label="Facebook">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.016 3.657 9.177 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195V8.5h-1.242c-1.229 0-1.62.768-1.62 1.564V12h2.77l-.443 2.89h-2.327v6.988C18.343 21.177 22 17.016 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-green-500 transition duration-200" aria-label="Telegram">
             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.184 8.78L8.143 14.86c-.9.367-1.464-.175-1.2-.95l1.9-6.93c.277-1.018 1.41-.65 2.11-.27l6.63 4.29c.8.52-.164 1.776-.952 1.34L12 12.86l-2.43 2.37c-.36.353-.88.16-1.07-.34l-.84-2.82c-.11-.36.21-.52.54-.42l4.8 3.09c.67.43 1.25.13 1.5-.7L16.27 11c.21-.69-.47-1.2-.95-1.05z"/></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-green-500 transition duration-200" aria-label="Instagram">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.95 2 7.824 2.015 6.452 2.08c-1.408.065-2.072.193-2.614.414-.543.222-1.004.536-1.466.998-.462.462-.776.923-.998 1.466-.221.542-.349 1.206-.414 2.614-.065 1.372-.08 2.498-.08 5.452s.015 4.08.08 5.452c.065 1.408.193 2.072.414 2.614.222.543.536 1.004.998 1.466.462.462.776.923.998 1.466-.221.542-.349 1.206-.414 2.614-.065 1.372-.08 2.498-.08 5.452s-.015-4.08-.08-5.452c-.065-1.408-.193-2.072-.414-2.614-.222-.543-.536-1.004-.998-1.466-.462-.462-.923-.776-1.466-.998-.542-.221-1.206-.349-2.614-.414C16.05 2.015 14.924 2 12 2zm0 1.62c2.977 0 3.606.01 4.708.06s1.954.195 2.502.408c.55.213.905.495 1.302.892.397.397.679.752.892 1.302.213.548.348 1.4.408 2.502.05 1.102.06 1.73.06 4.708s-.01 3.606-.06 4.708c-.06 1.102-.195 1.954-.408 2.502-.213.55-.495.905-.892 1.302-.397.397-.752.679-1.302.892-.548.213-1.4.348-2.502.408-1.102.05-1.73.06-4.708.06s-3.606-.01-4.708-.06c-1.102-.06-1.954-.195-2.502-.408-.55-.213-.905-.495-1.302-.892-.397-.397-.679-.752-.892-1.302-.213-.548-.348-1.4-.408-2.502-.05-1.102-.06-1.73-.06-4.708s.01-3.606.06-4.708c.06-1.102.195-1.954.408-2.502.213-.55.495-.905.892-1.302.397-.397.752-.679 1.302-.892.548-.213 1.4-.348 2.502-.408C8.394 3.63 9.023 3.62 12 3.62zm0 2.404c-3.238 0-5.876 2.638-5.876 5.876s2.638 5.876 5.876 5.876 5.876-2.638 5.876-5.876-2.638-5.876-5.876-5.876zm0 9.61c-2.05 0-3.734-1.684-3.734-3.734s1.684-3.734 3.734-3.734 3.734 1.684 3.734 3.734-1.684 3.734-3.734 3.734zM16.947 5.76c-.525 0-.95-.425-.95-.95s.425-.95.95-.95.95.425.95.95-.425.95-.95.95z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
      &copy; {{ currentYear }} Jjit.Ethiopia. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>