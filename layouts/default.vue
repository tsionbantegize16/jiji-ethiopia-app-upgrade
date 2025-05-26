<template>
  <div class="min-h-screen flex flex-col">
    <LayoutNavbar /> <main class="flex-grow">
      <slot /> </main>
    <LayoutFooter /> </div>
</template>

<script setup lang="ts">
// No specific script logic needed for this simple default layout
</script>