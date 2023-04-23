<script setup lang="ts">
import { ref } from "vue";
import markdown from "@wcj/markdown-to-html";

import { UIPage } from "../../ui/vue/containers";

const props = defineProps<{
  data: [{ title: string; content: string }];
}>();

const selectedJob = ref<number>();

const selectJob = (select: number) => (selectedJob.value = select);
</script>
<template>
  <UIPage id="/jobs">
    <div class="flex flex-col justify-between h-full">
      <div>
        <div v-for="(job, key) in data" :key="key">
          <article
            :class="[key == selectedJob ? '' : 'hidden']"
            v-html="markdown(job.content)"
          />
        </div>
      </div>
      <div class="w-full flex space-x-4 mb-16">
        <div v-for="(job, key) in data" :key="key">
          <a class="cursor-pointer" @click="() => selectJob(key)">
            {{ job.title }}
          </a>
        </div>
      </div>
    </div>
  </UIPage>
</template>

<style scoped>
p {
  text-align: justify;
}
</style>
