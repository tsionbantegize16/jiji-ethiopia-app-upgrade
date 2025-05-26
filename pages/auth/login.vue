<template>
  <NuxtLayout name="auth">
    <template #title>Login to Your Account</template>
    <form @submit.prevent="handleLogin" class="space-y-6">
      <div>
        <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
        <UiInput id="email" v-model="loginForm.email" type="email" placeholder="your@email.com" required />
      </div>
      <div>
        <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
        <UiInput id="password" v-model="loginForm.password" type="password" placeholder="********" required />
      </div>
      <div class="flex justify-between items-center text-sm">
        <label class="flex items-center text-gray-600">
          <input type="checkbox" class="form-checkbox text-green-600 rounded" v-model="loginForm.rememberMe">
          <span class="ml-2">Remember me</span>
        </label>
        <NuxtLink to="/auth/forgot-password" class="text-green-600 hover:underline">Forgot Password?</NuxtLink>
      </div>
      <UiButton type="submit" fullWidth variant="primary">
        Login
      </UiButton>
    </form>
    <p class="text-center text-gray-600 text-sm mt-6">
      Don't have an account? <NuxtLink to="/auth/register" class="text-green-600 hover:underline">Register here</NuxtLink>
    </p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// You might use a composable here like `useAuth`
// const { login } = useAuth(); // If you create useAuth composable

const loginForm = ref({
  email: '',
  password: '',
  rememberMe: false,
});

const handleLogin = async () => {
  console.log('Login attempt with:', loginForm.value);
  // In a real app, this would be an API call to authenticate the user
  // await login(loginForm.value.email, loginForm.value.password);
  alert('Login functionality not implemented (frontend demo).');
  // On success: router.push('/') or dashboard
};
</script>