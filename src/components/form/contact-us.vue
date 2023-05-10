<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import { sleep } from "../../util";

const props = defineProps<{
  questions: string[];
}>();

const textField = ref();
const newMsg = ref();
const stepQuestion = ref(0);

const inputChat = ref("");
const msg = ref<string[]>([]);

const msgAnimation = ref<{ status: boolean; isUser: boolean; style: any }>({
  status: false,
  isUser: false,
  style: {
    height: "40px",
    width: "100%",
    transition: "0s",
    transform: `translate(0px, 100%)`,
  },
});

const setStyleMsg = (style: any) => {
  msgAnimation.value = {
    ...msgAnimation.value,
    style: { ...msgAnimation.value.style, ...style },
  };
};

const msgAnimated = async (style: any, time: number) => {
  setStyleMsg({ ...style, transition: `${time}s` });
  await sleep(time);
};

const addHistory = async (content: string) => {
  if (content.trim() != "") {
    const width = newMsg.value.clientWidth;
    await msgAnimated(
      {
        width: `${textField.value.clientWidth}px`,
        transform: `translate(0px, 100%)`,
      },
      0
    );
    await msgAnimated(
      { width: `${width}px`, transform: `translate(0px, 0%)` },
      1
    );
    msg.value = [...msg.value, content];
    inputChat.value = "";
    msgAnimation.value = { ...msgAnimation.value, status: false };
    await msgAnimated({ width: `100%`, transform: `translate(0px, 100%)` }, 0);
    msgAnimation.value = { ...msgAnimation.value, isUser: false };
  }
};

const submit = async () => {
  addHistory(inputChat.value);
  nextQuestion();
};

const nextQuestion = async () => {
  // if (stepQuestion.value < props.questions.length) {
  await sleep(1);
  addHistory(`mensaje ${stepQuestion.value}`);
  stepQuestion.value++;
  // }
};

watch(inputChat, () => {
  msgAnimation.value = { ...msgAnimation.value, isUser: true };
  setStyleMsg({ heigth: `${textField.value.clientHeight}px` });
});

onMounted(nextQuestion);
</script>
<template>
  <div class="w-full h-full flex flex-col w-full">
    <div
      class="h-full h-full flex flex-col jufity-end justify-end overflow-hidden"
    >
      <div class="bg-white" :style="{ width: `${msgAnimation.style.width}px` }">
        {{ msgAnimation.isUser ? inputChat : `mensaje ${stepQuestion - 1}` }}
      </div>
      <div v-for="(item, key) in msg" :key="key" class="pb-2 flex">
        <div class="bg-white px-2 py-1">{{ item }}</div>
      </div>
      <div :style="{ opacity: msgAnimation.status ? 1 : 1 }">
        <div
          class="new-msg bg-red-500 flex"
          :style="{ ...msgAnimation?.style }"
        >
          <div ref="newMsg" class="px-2 py-2">
            {{
              msgAnimation.isUser ? inputChat : `mensaje ${stepQuestion - 1}`
            }}
          </div>
        </div>
      </div>
      <form
        @submit.prevent="submit"
        class="flex space-x-2 w-full"
        :style="{
          transition: `${msgAnimation.status ? 1 : 0}s`,
          paddingTop: msgAnimation.status
            ? `${textField.clientHeight}px`
            : `0px`,
        }"
      >
        <div
          ref="textField"
          class="w-full px-2 py-2 bg-white"
          :style="{ opacity: msgAnimation.status ? 0 : 1 }"
        >
          <input
            v-model="inputChat"
            :readonly="msgAnimation.status"
            class="w-full"
          />
        </div>
        <button type="submit" class="p-1 bg-white">enviar</button>
      </form>
    </div>
  </div>
</template>
<style>
form {
  transform: translate(0px, 0px);
}
</style>
