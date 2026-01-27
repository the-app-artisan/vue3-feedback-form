import { reactive, ref } from 'vue';
import type { Feedback } from '../types/feedback';

export default function useFeedbackForm() {
  const name = ref('');
  const email = ref('');
  const category = ref('');
  const rating = ref(0);
  const message = ref('');
  const notify = ref(true);

  const form = reactive<Feedback>({
    name: '',
    email: '',
    category: '',
    rating: 0,
    message: '',
    notify: true,
  });

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
    form.name = '';
    form.email = '';
    form.category = '';
    form.rating = 0;
    form.message = '';
    form.notify = true;
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
