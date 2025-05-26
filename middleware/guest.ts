// middleware/guest.ts
// This middleware will prevent authenticated users from accessing guest-only routes (like login/register)
export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth(); // Assuming useAuth provides this

  if (isAuthenticated.value) {
    // If authenticated, redirect to dashboard or home
    return navigateTo('/');
  }
  // If not authenticated, allow navigation
});