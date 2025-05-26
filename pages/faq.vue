<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6 text-center text-gray-800">Frequently Asked Questions</h1>
    <p class="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
      Find quick answers to the most common questions about using Jjit.Ethiopia.
    </p>

    <div class="max-w-3xl mx-auto space-y-4">
      <div v-for="(item, index) in faqs" :key="index" class="bg-white rounded-lg shadow-md">
        <button
          @click="toggleAccordion(index)"
          class="w-full text-left p-6 font-semibold text-lg text-gray-800 flex justify-between items-center focus:outline-none"
          :aria-expanded="activeAccordion === index"
          :aria-controls="`faq-content-${index}`"
        >
          <span>{{ item.question }}</span>
          <svg
            :class="{'rotate-180': activeAccordion === index}"
            class="w-5 h-5 text-green-600 transform transition-transform duration-200"
            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div
          v-show="activeAccordion === index"
          :id="`faq-content-${index}`"
          role="region"
          :aria-labelledby="`faq-question-${index}`"
          class="px-6 pb-6 text-gray-600 leading-relaxed"
        >
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({ layout: 'default' });

const activeAccordion = ref<number | null>(null);

const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index;
};

const faqs = [
  {
    question: "How do I post an ad on Jjit.Ethiopia?",
    answer: "To post an ad, simply click on the 'Post an Ad' button in the navigation bar. You'll need to create an account or log in if you haven't already. Then, follow the simple steps to describe your item, add photos, and set your price."
  },
  {
    question: "Is it free to post an ad?",
    answer: "Yes, posting a standard ad on Jjit.Ethiopia is completely free! We offer optional premium features for increased visibility, but basic posting is always free."
  },
  {
    question: "How can I contact a seller?",
    answer: "On each ad's detail page, you will find the seller's contact information, usually a phone number or a 'Chat' button. You can use these options to get in touch directly with the seller."
  },
  {
    question: "What items are not allowed to be sold?",
    answer: "We prohibit the sale of illegal items, weapons, drugs, stolen goods, live animals for illegal trade, and adult content. Please refer to our Terms of Service for a full list of prohibited items."
  },
  {
    question: "How do I report a suspicious ad?",
    answer: "If you come across an ad that seems suspicious or violates our policies, please click the 'Report Ad' button (usually found on the ad's detail page) or contact our support team directly at support@jjit.et."
  }
];
</script>