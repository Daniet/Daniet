<script setup lang="ts">
import iconFacebook from "../../../../assets/images/icons/facebook.svg";
import iconPinterest from "../../../../assets/images/icons/pinterest.svg";
import iconReddit from "../../../../assets/images/icons/reddit.svg";
import iconTwitter from "../../../../assets/images/icons/twitter.svg";
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

const social = ref();

onMounted(() => {
  url.value = `${location.origin}${location.pathname}`;
  social.value = [
    {
      href: `${SHARE_LINK.FACEBOOK}${url.value}`,
      icon: iconFacebook,
      name: "facebook",
    },
    {
      href: `${SHARE_LINK.TWITTER}url=${url.value}&text=${props.text}`,
      icon: iconTwitter,
      name: "twitter",
    },
    {
      href: `${SHARE_LINK.REDDIT}url=${url.value}&title=${props.title}`,
      icon: iconReddit,
      name: "reddit",
    },
    {
      href: `${SHARE_LINK.PINTEREST}url=${url.value}&description=${props.title}`,
      icon: iconPinterest,
      name: "pinterest",
    },
  ];
});
</script>
<template>
  <div class="flex space-x-3 items-center w-full justify-between px-3 py-1">
    <div class="flex space-x-2">
      <a
        v-for="(item, key) in social"
        :key="key"
        target="_shared"
        :href="item.href"
      >
        <img class="w-8 h-8 object-contain" :src="item.icon" :alt="item.name" />
      </a>
    </div>
    <span
      class="material-symbols-rounded cursor-pointer bg-black text-white p-1 rounded-md"
    >
      share
    </span>
  </div>
</template>
