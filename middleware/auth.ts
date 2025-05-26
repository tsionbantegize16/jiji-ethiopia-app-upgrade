// middleware/auth.ts
// This middleware will protect routes that require authentication
export default defineNuxtRouteMiddleware((to, from) => {
  // In a real app, you would check an auth token or Pinia store state
  const { isAuthenticated } = useAuth(); // Assuming useAuth provides this

  if (!isAuthenticated.value) {
    // Redirect to login page if not authenticated
    return navigateTo('/auth/login');
  }
  // If authenticated, allow navigation
});