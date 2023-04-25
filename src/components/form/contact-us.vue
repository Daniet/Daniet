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
      class="bg-white rounded-md overflow-hidden transition-component"
      :class="[fieldAnimation.isShow ? 'px-3 py-3 my-0' : 'px-0 py-0 my-5']"
    >
      <div
        class="space-y-3 transition-component"
        ref="fields"
        :class="[
          fieldAnimation.isShow
            ? 'opacity-100 scale-100'
            : 'opacity-100 scale-0',
        ]"
        :style="{
          marginTop: fieldAnimation.isShow
            ? '0px'
            : `${fieldAnimation.height * -1}px`,
        }"
      >
        <UITextField name="name" field="nombre" v-model="contact.name" />
        <UITextField name="subject" field="asunto" v-model="contact.subject" />
        <UITextArea name="msg" field="mensaje" v-model="contact.msg" />
      </div>
      <div
        class="flex justify-center space-x-2 transition-component"
        :class="[fieldAnimation.isShow ? 'pt-3 my-0' : 'pt-0 my-1']"
      >
        <UIButton :type="TypeButton.SUBMIT" :state="stateFrom.stateButton"
          >Whatsapp</UIButton
        >
      </div>
    </form>
  </div>
</template>

<style scoped>
.transition-component {
  transition: 1s;
}
</style>
