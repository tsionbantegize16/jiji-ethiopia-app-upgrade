// composables/useModal.ts
import { ref } from 'vue';

const isModalOpen = ref(false);
const modalContent = ref<any>(null); // Can be a component, string, etc.
const modalProps = ref<any>({});

export function useModal() {
  const openModal = (content: any, props: Record<string, any> = {}) => {
    modalContent.value = content;
    modalProps.value = props;
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
    modalContent.value = null;
    modalProps.value = {};
  };

  return {
    isModalOpen,
    modalContent,
    modalProps,
    openModal,
    closeModal,
  };
}