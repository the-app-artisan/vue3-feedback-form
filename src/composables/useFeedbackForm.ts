import { ref } from 'vue';

export default function useFeedbackForm() {
  const name = ref('');
  const email = ref('');
  const category = ref('');
  const rating = ref(0);
  const message = ref('');
  const notify = ref(true);

  return {
    name,
    email,
    category,
    rating,
    message,
    notify,
  };
}
