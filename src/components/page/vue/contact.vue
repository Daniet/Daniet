<script setup lang="ts">
import { ref } from "vue";
import { UIPage } from "../../ui/vue/containers";
import { UITextField } from "../../ui/vue/form";
import { UIShared } from "../../ui/vue/social";

const {
  PUBLIC_WHATSAPP: WHATSAPP,
  PUBLIC_SHARED_TITLE: TITLE,
  PUBLIC_SHARED_TEXT: TEXT,
} = import.meta.env;

const contact = ref({ name: undefined, subject: undefined, msg: undefined });
const submit = () => {
  const { name, subject, msg } = contact.value;
  window.open(
    `https://api.whatsapp.com/send/?phone=${WHATSAPP}&text=hola soy ${name} te escribo para ${subject}, ${msg}`,
    `_whatsapp`
  );
};
</script>
<template>
  <UIPage id="/contact">
    <form @submit.prevent="submit" class="flex flex-col">
      <UITextField field="nombre" v-model="contact.name" />
      <UITextField field="asunto" v-model="contact.subject" />
      <UITextField field="mensaje" v-model="contact.msg" />
      <button type="submit">enviar</button>
    </form>
    <UIShared :title="TITLE" :text="TEXT" />
  </UIPage>
</template>
