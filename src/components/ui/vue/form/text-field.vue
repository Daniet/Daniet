<script setup lang="ts">
import { computed } from "vue";
import type { TypeTextField as type } from "./type";

const props = defineProps<{
  field?: string;
  name?: string;
  modelValue: any;
  type?: type;
}>();
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
  <div class="flex items-center pb-2 border-b-2 border-black">
    <label :for="name">{{ field }}</label>
    <input
      v-model="value"
      :id="name"
      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      autocomplete="off"
    />
  </div>
</template>
