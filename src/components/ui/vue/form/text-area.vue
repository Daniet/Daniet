<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ field: string; name: string; modelValue: any }>();
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <div
    class="flex flex-col items-center pb-2 border-b-2 border-black justify-self-start"
  >
    <label class="w-full" :for="name">{{ field }}:</label>
    <textarea
      v-model="value"
      :id="name"
      class="appearance-none bg-transparent border-none w-full text-gray-700 py-1 leading-tight focus:outline-none"
      autocomplete="off"
    />
  </div>
</template>
