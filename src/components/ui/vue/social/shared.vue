<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  title: string;
  text: string;
}>();

const url = ref<string>();
enum SHARE_LINK {
  FACEBOOK = "https://web.facebook.com/sharer/sharer.php?u=",
  TWITTER = "https://twitter.com/intent/tweet?",
  REDDIT = "https://www.reddit.com/submit?",
  LINKEDIN = "https://www.linkedin.com/shareArticle/?",
  PINTEREST = "https://co.pinterest.com/pin/create/button/?",
}

onMounted(() => (url.value = `${location.origin}${location.pathname}`));
</script>
<template>
  <div>
    <ul>
      <li>
        <a target="_shared" :href="`${SHARE_LINK.FACEBOOK}${url}`">facebook</a>
      </li>
      <li>
        <a
          target="_shared"
          :href="`${SHARE_LINK.TWITTER}url=${url}&text=${text}`"
          >Twitter</a
        >
      </li>
      <li>
        <a
          target="_shared"
          :href="`${SHARE_LINK.REDDIT}url=${url}&title=${title}`"
          >Reddit</a
        >
      </li>
      <li>
        <a
          target="_shared"
          :href="`${SHARE_LINK.PINTEREST}url=${url}&description=${title}`"
          >pinterest</a
        >
      </li>
    </ul>
  </div>
</template>
