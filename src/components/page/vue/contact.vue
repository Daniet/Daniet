<script setup lang="ts">
import { ref } from "vue";
import { UIPage } from "../../ui/vue/containers";
import { ContactUsView } from "../../form";
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
    <div class="flex h-full pb-24 pt-8">
      <div class="w-6/12 mx-auto h-full">
        <ContactUsView
          :questions="[
            '¿Como te llamas?',
            '¿Que te puedo Colaborar?',
            'Cuentame un poco mas',
          ]"
        />
        <UIShared :title="TITLE" :text="TEXT" />
      </div>
    </div>
  </UIPage>
</template>
