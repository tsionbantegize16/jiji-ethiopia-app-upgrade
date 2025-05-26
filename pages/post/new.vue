<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6 text-center text-gray-800">Post a New Ad</h1>
    <p class="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
      Fill out the details below to list your item or service on Jjit.Ethiopia. It's quick, easy, and free!
    </p>

    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <form @submit.prevent="submitAd" class="space-y-6">
        <div>
          <label for="title" class="block text-gray-700 text-sm font-semibold mb-2">Ad Title <span class="text-red-500">*</span></label>
          <UiInput id="title" v-model="adForm.title" placeholder="e.g., iPhone 13 Pro Max for Sale" required />
        </div>

        <div>
          <label for="category" class="block text-gray-700 text-sm font-semibold mb-2">Category <span class="text-red-500">*</span></label>
          <UiSelect id="category" v-model="adForm.category" placeholder="Select a Category" required>
            <option v-for="cat in categories" :key="cat.slug" :value="cat.name">{{ cat.name }}</option>
          </UiSelect>
        </div>

        <div>
          <label for="price" class="block text-gray-700 text-sm font-semibold mb-2">Price (ETB)</label>
          <UiInput id="price" v-model="adForm.price" type="number" placeholder="e.g., 45000 (leave empty for negotiable)" />
        </div>

        <div>
          <label for="location" class="block text-gray-700 text-sm font-semibold mb-2">Location <span class="text-red-500">*</span></label>
          <UiSelect id="location" v-model="adForm.location" placeholder="Select a Location" required>
            <option v-for="loc in locations" :key="loc.slug" :value="loc.name">{{ loc.name }}</option>
          </UiSelect>
        </div>

        <div>
          <label for="description" class="block text-gray-700 text-sm font-semibold mb-2">Description <span class="text-red-500">*</span></label>
          <textarea
            id="description"
            v-model="adForm.description"
            rows="6"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out text-gray-800"
            placeholder="Describe your item in detail..."
            required
          ></textarea>
        </div>

        <div>
          <label for="images" class="block text-gray-700 text-sm font-semibold mb-2">Upload Images</label>
          <input
            id="images"
            type="file"
            multiple
            accept="image/*"
            @change="handleImageUpload"
            class="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-green-50 file:text-green-700
                   hover:file:bg-green-100"
          />
          <p class="text-xs text-gray-500 mt-1">Max 5 images. Each image up to 5MB.</p>
          <div v-if="adForm.images.length" class="mt-4 flex flex-wrap gap-2">
            <div v-for="(image, i) in adForm.images" :key="i" class="relative">
              <img :src="image.url" class="w-24 h-24 object-cover rounded-md border border-gray-200" />
              <button
                @click="removeImage(i)"
                class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs leading-none"
                aria-label="Remove image"
              >
                &times;
              </button>
            </div>
          </div>
        </div>

        <UiButton type="submit" fullWidth variant="primary">
          Post My Ad
        </UiButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { categories } from '~/constants/categories';
import { locations } from '~/constants/locations';

definePageMeta({ layout: 'default' });

interface AdForm {
  title: string;
  category: string;
  price: number | null;
  location: string;
  description: string;
  images: { file: File, url: string }[];
}

const adForm = ref<AdForm>({
  title: '',
  category: '',
  price: null,
  location: '',
  description: '',
  images: [],
});

const handleImageUpload = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (adForm.value.images.length < 5 && file.size < 5 * 1024 * 1024) { // Max 5 images, 5MB each
        const reader = new FileReader();
        reader.onload = (e) => {
          adForm.value.images.push({ file, url: e.target?.result as string });
        };
        reader.readAsDataURL(file);
      } else {
        alert('File too large or too many images (max 5, 5MB each).');
      }
    }
  }
};

const removeImage = (index: number) => {
  adForm.value.images.splice(index, 1);
};

const submitAd = () => {
  // In a real application, you would send this form data to your backend API
  // This would typically involve:
  // 1. Client-side validation
  // 2. Creating FormData to send files
  // 3. Making an HTTP POST request (e.g., using $fetch or Axios)
  console.log('Ad Form Submitted:', adForm.value);
  alert('Your ad has been submitted for review! (This is a frontend demo)');
  // Reset form after submission
  adForm.value = {
    title: '',
    category: '',
    price: null,
    location: '',
    description: '',
    images: [],
  };
};
</script>