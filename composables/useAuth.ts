// composables/useAuth.ts
import { ref } from 'vue';
import type { User } from '~/types/user'; // Import User type

// Dummy user data
const currentUser = ref<User | null>(null);
const isAuthenticated = computed(() => !!currentUser.value);

export function useAuth() {
  const login = async (email: string, password: string) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          currentUser.value = { id: '123', email: 'test@example.com', name: 'Test User' };
          console.log('User logged in:', currentUser.value);
          resolve();
        } else {
          console.error('Login failed');
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    currentUser.value = null;
    console.log('User logged out');
  };

  const register = async (email: string, password: string) => {
    // Simulate API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          console.log('User registered:', email);
          resolve();
        } else {
          reject(new Error('Registration failed'));
        }
      }, 1000);
    });
  };

  const getUser = () => {
    return currentUser.value;
  };

  return {
    currentUser,
    isAuthenticated,
    login,
    logout,
    register,
    getUser,
  };
}