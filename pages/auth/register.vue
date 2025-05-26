<template>
  <NuxtLayout name="auth">
    <template #title>Create Your Account</template>
    <form @submit.prevent="handleRegister" class="space-y-6">
      <div>
        <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
        <UiInput id="email" v-model="registerForm.email" type="email" placeholder="your@email.com" required />
      </div>
      <div>
        <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
        <UiInput id="password" v-model="registerForm.password" type="password" placeholder="********" required />
      </div>
      <div>
        <label for="confirmPassword" class="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
        <UiInput id="confirmPassword" v-model="registerForm.confirmPassword" type="password" placeholder="********" required />
      </div>
      <p v-if="passwordMismatch" class="text-red-500 text-sm">Passwords do not match.</p>

      <UiButton type="submit" fullWidth variant="primary">
        Register
      </UiButton>
    </form>
    <p class="text-center text-gray-600 text-sm mt-6">
      Already have an account? <NuxtLink to="/auth/login" class="text-green-600 hover:underline">Login here</NuxtLink>
    </p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const registerForm = ref({
  email: '',
  password: '',
  confirmPassword: '',
});

const passwordMismatch = computed(() => {
  return registerForm.value.password && registerForm.value.confirmPassword &&
         registerForm.value.password !== registerForm.value.confirmPassword;
});

const handleRegister = async () => {
  if (passwordMismatch.value) {
    alert('Passwords do not match!');
    return;
  }
  console.log('Register attempt with:', registerForm.value.email);
  // In a real app, this would be an API call to register the user
  alert('Registration functionality not implemented (frontend demo).');
  // On success: router.push('/auth/login') or directly login
};
</script>