<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
    <p class="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
      Have questions or need assistance? Reach out to us through the form below or our direct contact details.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
        <form @submit.prevent="submitContactForm" class="space-y-6">
          <div>
            <label for="name" class="block text-gray-700 text-sm font-semibold mb-2">Your Name</label>
            <UiInput id="name" v-model="form.name" placeholder="John Doe" />
          </div>
          <div>
            <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Your Email</label>
            <UiInput id="email" v-model="form.email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label for="message" class="block text-gray-700 text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out text-gray-800"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <UiButton type="submit" fullWidth>
            Send Message
          </UiButton>
        </form>
      </div>

      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Our Contact Details</h2>
        <div class="space-y-4">
          <p class="text-gray-700 flex items-center">
            <svg class="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5V11h2v6.5zm0-8H13V7h-2v2z"/></svg>
            Email: <a href="mailto:support@jjit.et" class="text-green-600 hover:underline ml-2">support@jjit.et</a>
          </p>
          <p class="text-gray-700 flex items-center">
            <svg class="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z"/></svg>
            Phone: <a href="tel:+251912345678" class="text-green-600 hover:underline ml-2">+251 912 345 678</a>
          </p>
          <p class="text-gray-700 flex items-center">
            <svg class="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-.83 0-1.5-.67-1.5-1.5S11.17 8.5 12 8.5s1.5.67 1.5 1.5S12.83 11.5 12 11.5z"/></svg>
            Address: Bole Road, Addis Ababa, Ethiopia
          </p>
        </div>
        <div class="mt-8">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Find us on the map</h3>
          <div class="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.354706509657!2d38.7619213753556!3d9.006939791010377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c13e61c5b5%3A0x867b7f1e779a5b3a!2sBole%20Road%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1701389781234!5m2!1sen!2set"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({ layout: 'default' });

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitContactForm = () => {
  // Here you would typically send this data to your backend API
  console.log('Contact form submitted:', form.value);
  alert('Thank you for your message! We will get back to you shortly.');
  // Reset form
  form.value = { name: '', email: '', message: '' };
};
</script>