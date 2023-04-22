<script setup lang="ts">
const props = defineProps<{ id?: string }>();
</script>
<template>
  <div :id="id" class="h-screen">
    <slot />
  </div>
</template>
