<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ field: string; modelValue: any }>();
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
  <label>
    {{ field }}
    <input v-model="value" />
  </label>
</template>
