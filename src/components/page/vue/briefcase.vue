<script setup lang="ts">
import { UIPage } from "../../ui/vue/containers";

const props = defineProps<{
  data: [{ title: string; icon: string; content: string }];
}>();
</script>
<template>
  <UIPage id="/briefcase">
    <div v-for="(item, key) in data" :key="key">
      {{ item.icon }}
      {{ item.title }}
    </div>
  </UIPage>
</template>
