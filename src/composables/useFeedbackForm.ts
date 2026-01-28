import { reactive, ref } from 'vue';
import type { Feedback } from '../types/feedback';

export default function useFeedbackForm() {
  const createInitialFormState = () => ({
    name: '',
    email: '',
    category: '',
    rating: 0,
    message: '',
    notify: true,
  });

  const form = reactive<Feedback>(createInitialFormState());

  const isSubmitting = ref(false);
  const showSuccess = ref(false);

  // Simulate form submission
  // TODO: Replace with actual API call
  const sendRequest = async () => {
    // Wait for 1 sec
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted with data:', form);
  };

  const reset = () => {
    Object.assign(form, createInitialFormState());
  };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    if (isSubmitting.value) return;
    isSubmitting.value = true;

    try {
      await sendRequest();
      showSuccess.value = true;
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      isSubmitting.value = false;
    }

    reset();
  };

  return {
    form,
    isSubmitting,
    showSuccess,
    handleSubmit,
  };
}
