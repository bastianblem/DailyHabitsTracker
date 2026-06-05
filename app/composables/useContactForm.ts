import { reactive, ref } from "vue";

export const useContactForm = () => {
  const form = reactive({
    name: "",
    email: "",
    message: "",
  });
  const errors = reactive({
    name: "",
    email: "",
    message: "",
  });
  const loading = ref(false);
  const success = ref(false);

  const submit = async () => {
    loading.value = true;

    //Simulation API Call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    success.value = true;
    loading.value = false;
  };

  return {
    form,
    errors,
    loading,
    success,
    submit,
  };
};
