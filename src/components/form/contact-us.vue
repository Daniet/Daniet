<script setup lang="ts">
import { ref } from "vue";
import { UITextArea, UITextField } from "../../components/ui/vue/form";
import { TypeButton, UIButton } from "../../components/ui/vue/buttons";
import { StateButton } from "../ui/vue/buttons/type";

const { PUBLIC_WHATSAPP: WHATSAPP } = import.meta.env;

const contact = ref({ name: undefined, subject: undefined, msg: undefined });
const fields = ref();
const fieldAnimation = ref({
  isShow: true,
  height: 0,
});

const stateFrom = ref({
  stateButton: StateButton.NORMAL,
});

const submit = () => {
  fieldAnimation.value.height = fields.value.clientHeight;
  stateFrom.value = {
    stateButton: StateButton.MIN,
  };
  // const { name, subject, msg } = contact.value;
  // window.open(
  //     `https://api.whatsapp.com/send/?phone=${WHATSAPP}&text=hola soy ${name} te escribo para ${subject}, ${msg}`,
  //     `_whatsapp`
  // );
  // console.log(fields.value.clientHeight)
  fieldAnimation.value.isShow = false;
  setTimeout(() => {
    fieldAnimation.value.isShow = true;
    stateFrom.value = {
      stateButton: StateButton.NORMAL,
    };
  }, 2000);
};
</script>
<template>
  <div
    class="transition-component flex flex-col justify-center"
    :style="{
      padding: fieldAnimation.isShow
        ? '0px 0px'
        : `${fieldAnimation.height / 2}px 0px`,
    }"
  >
    <form
      @submit.prevent="submit"
      class="rounded-md overflow-hidden transition-component"
      :class="[fieldAnimation.isShow ? 'px-3 py-3 my-0' : 'px-0 py-0 my-5']"
    >
      <div class="text-white bg-black mx-2 mt-2 mb-6 rounded-xl px-3 py-1">
        Heyy
      </div>
      <div class="h-96"></div>
      <div class="">
        <div class="px-3 py-1 mx-2 my-2 bg-blue-500 text-white rounded-xl">
          mensaje
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.transition-component {
  transition: 1s;
}
</style>
