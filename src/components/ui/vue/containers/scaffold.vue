<script setup lang="ts">
import backgound from "../../../../assets/images/background.jpg";
</script>
<template>
  <main class="h-screen w-full">
    <img :src="backgound" class="w-screen h-screen fixed -z-50" />
    <slot />
  </main>
</template>
