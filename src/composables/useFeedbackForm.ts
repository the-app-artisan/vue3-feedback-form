import { ref } from 'vue';

export default function useFeedbackForm() {
  const name = ref('');
  const email = ref('');
  const category = ref('');
  const rating = ref(0);
  const message = ref('');
  const notify = ref(true);
  const isSubmitting = ref(false);

  // Simulate form submission
  // TODO: Replace with actual API call
  const sendRequest = async () => {
    // Wait for 1 sec
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted with data:', {
      name: name.value,
      email: email.value,
      category: category.value,
      rating: rating.value,
      message: message.value,
      notify: notify.value,
    });
  };

  const reset = () => {
    name.value = '';
    email.value = '';
    category.value = '';
    rating.value = 0;
    message.value = '';
    notify.value = true;
  };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    if (isSubmitting.value) return;
    isSubmitting.value = true;

    await sendRequest();
    isSubmitting.value = false;

    reset();
  };

  return {
    name,
    email,
    category,
    rating,
    message,
    notify,
    isSubmitting,
    handleSubmit,
  };
}
