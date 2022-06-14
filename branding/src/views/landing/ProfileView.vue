<template>
  <div>
    <h1>Profile</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  beforeCreate() {
    window.location.href = `https://www.figma.com/proto/zkA9NMAP9slC1NL7UEVIhw/Marca-presonal?node-id=9%3A46&viewport=-1528%2C334%2C0.88&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=9%3A46`;
  },
});
</script>
