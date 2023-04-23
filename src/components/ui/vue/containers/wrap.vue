<script setup lang="ts">
const props = defineProps<{
  space?: number;
}>();
</script>
<template>
  <div class="flex" :class="[`gap-${props.space ?? 1}`]">
    <slot />
  </div>
</template>
