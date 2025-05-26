<template>
  <nav class="bg-white shadow-md px-6 py-4 flex justify-between items-center">
    <div class="text-xl font-bold text-blue-600">Jjit Ethiopia</div>
    <ul class="flex space-x-6">
      <li><NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink></li>
      <li><NuxtLink to="/category/cars" class="hover:text-blue-600">Cars</NuxtLink></li>
      <li><NuxtLink to="/category/real-estate" class="hover:text-blue-600">Real Estate</NuxtLink></li>
      <li><NuxtLink to="/auth/login" class="hover:text-blue-600">Login</NuxtLink></li>
      <li><NuxtLink to="/auth/register" class="hover:text-blue-600">Register</NuxtLink></li>
    </ul>
  </nav>
</template>
