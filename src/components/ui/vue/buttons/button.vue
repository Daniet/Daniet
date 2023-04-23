<script setup lang="ts">
import { TypeButton as type } from "./type";

const props = defineProps<{
  type?: type;
}>();
</script>
<template>
  <button class="px-2 py-1 bg-blue-400 text-white" :type="type">
    <slot />
  </button>
</template>
