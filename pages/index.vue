<template>
  <div>
    <SectionsHeroSearch />
    <SectionsPopularCategories />
    <SectionsLatestListings />
    </div>
</template>

<script setup lang="ts">
// This page will use the 'default' layout defined in layouts/default.vue
definePageMeta({
  layout: 'default'
});
</script>