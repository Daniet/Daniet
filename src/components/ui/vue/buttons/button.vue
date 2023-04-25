<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { StateButton as State, TypeButton as type } from "./type";

const props = defineProps<{
  type?: type;
  state?: State;
}>();

const styleBase = ref({
  marginLeft: 0,
  opacity: 1,
});

const styleAnimate = ref<{
  marginLeft?: number;
  opacity?: number;
}>();

const style = ref<{
  marginLeft: string;
  opacity: number;
}>();

const btn = ref();

const setStyle = () => {
  const changeStyle = { ...styleBase.value, ...styleAnimate.value };
  style.value = {
    marginLeft: `${changeStyle.marginLeft}px`,
    opacity: changeStyle.opacity,
  };
};

watch(styleAnimate, setStyle);

watch(props, () => {
  if (props.state == State.NORMAL) styleAnimate.value = {};
  if (props.state == State.MIN)
    styleAnimate.value = {
      marginLeft: btn.value.clientWidth * -1 + 10,
      opacity: 0,
    };
});

onMounted(setStyle);
</script>
<template>
  <button class="bg-blue-400 text-white overflow-hidden" :type="type">
    <span class="px-3 py-1 flex align-center" ref="btn" :style="style">
      <slot />
    </span>
  </button>
</template>
<style>
span {
  transition: 1s;
}
</style>
