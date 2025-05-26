<template>
  <NuxtLayout name="auth">
    <template #title>Reset Your Password</template>
    <form @submit.prevent="handleForgotPassword" class="space-y-6">
      <div>
        <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
        <UiInput id="email" v-model="email" type="email" placeholder="your@email.com" required />
      </div>
      <UiButton type="submit" fullWidth variant="primary">
        Send Reset Link
      </UiButton>
    </form>
    <p class="text-center text-gray-600 text-sm mt-6">
      <NuxtLink to="/auth/login" class="text-green-600 hover:underline">Back to Login</NuxtLink>
    </p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

const handleForgotPassword = async () => {
  console.log('Forgot password request for:', email.value);
  alert('Password reset link sent (if email exists). Functionality not implemented (frontend demo).');
  email.value = '';
};
</script>