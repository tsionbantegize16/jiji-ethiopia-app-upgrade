<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// The useHead composable automatically manages your document head
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Jjit.Ethiopia` : 'Jjit.Ethiopia - Find anything, sell anything!';
  },
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: 'Your trusted classifieds platform in Ethiopia. Find jobs, cars, real estate, electronics, and more.' },
    { name: 'author', content: 'Jjit.Ethiopia Team' },
    { property: 'og:title', content: 'Jjit.Ethiopia - Find anything, sell anything!' },
    { property: 'og:description', content: 'Your trusted classifieds platform in Ethiopia. Buy and sell online.' },
    // Add more Open Graph (OG) or Twitter Card meta tags for social sharing
  ],
})
</script>