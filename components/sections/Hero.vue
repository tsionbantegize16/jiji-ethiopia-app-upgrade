<template>
  <section class="bg-blue-600 text-white py-20 px-6 text-center">
    <h1 class="text-5xl font-bold mb-4">Welcome to Jjit Ethiopia</h1>
    <p class="text-lg mb-8">Find the best deals in Ethiopia easily</p>
    <form @submit.prevent="onSearch" class="max-w-xl mx-auto flex gap-2">
      <Input v-model="searchQuery" placeholder="What are you looking for?" />
      <Button primary type="submit">Search</Button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '~/components/ui/Button.vue'
import Input from '~/components/ui/Input.vue'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const router = useRouter()

function onSearch() {
  if (!searchQuery.value.trim()) return
  router.push({ path: '/category/cars', query: { q: searchQuery.value } })
}
</script>
