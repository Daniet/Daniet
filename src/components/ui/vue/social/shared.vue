<script setup lang="ts">
import { onMounted } from "vue";

const urlShared = "https://daniet.github.io/Daniet/profile/";

enum SHARE_LINK {
  FACEBOOK = "https://web.facebook.com/sharer/sharer.php?u=",
  TWITTER = "https://twitter.com/intent/tweet?",
  REDDIT = "https://www.reddit.com/submit?",
  LINKEDIN = "https://www.linkedin.com/shareArticle/?",
  PINTEREST = "https://co.pinterest.com/pin/create/button/?",
}
</script>
<template>
  <div>
    <ul>
      <li>
        <a :href="`${SHARE_LINK.FACEBOOK}${urlShared}`"> facebook </a>
      </li>
      <li>Twitter</li>
      <li>Reddit</li>
      <li>pinterest</li>
    </ul>
  </div>
</template>
