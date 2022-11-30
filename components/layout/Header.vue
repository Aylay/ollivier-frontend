<script lang="ts" setup>
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const runtimeConfig = useRuntimeConfig()
import type { Strapi4Response } from "@nuxtjs/strapi"
const { find } = useStrapi4()

const layout = await find<Strapi4Response<Layout>>("layout", { populate: 'deep' });
const content = layout.data.attributes

function displayTel (tel: { toString: () => string }) {
  const newTel = '0' + tel.toString()
  
  let displayNewTel = '';
  for (let [index, value] of newTel.split('').entries()) {
    if (index % 2 === 1) {
      displayNewTel += value + ' '
    } else {
      displayNewTel += value
    }
  }
  return displayNewTel
}

function scrollToForm () {
  const contactDiv = document.getElementById("contact-us")
  contactDiv ? contactDiv.scrollIntoView({behavior: "smooth"}) : null;
}

</script>

<template>
  <header class="absolute top-0 left-0 z-50 w-full">
    <div class="max-w-screen-xl mx-auto flex justify-between py-12">
      <div class="flex gap-4 items-center">
        <PhoneIcon class="h-auto w-6 text-science-blue" />
        <NuxtLink
          :to="'tel:+33' + content.tel1"
          class="text-white font-heebo font-medium text-[1.6rem] leading-8 tracking-wide"
        >
          {{ displayTel(content.tel1) }}
        </NuxtLink>
        <span class="text-science-blue font-heebo font-medium text-[1.6rem] leading-8 tracking-wide">
          |
        </span>
        <NuxtLink
          :to="'tel:+33' + content.tel2"
          class="text-white font-heebo font-medium text-[1.6rem] leading-8 tracking-wide"
        >
          {{ displayTel(content.tel2) }}
        </NuxtLink>
      </div>
      <NuxtLink
        to="/"
        :title="content.logo.data.attributes.alternativeText"
      >
        <img
          :src="runtimeConfig.public.apiBase + content.logo.data.attributes.url"
          :alt="content.logo.data.attributes.alternativeText"
          class="h-auto w-full max-w-sm"
        />
      </NuxtLink>
      <div
        class="flex gap-4 items-center cursor-pointer"
        @click="scrollToForm"
      >
        <EnvelopeIcon class="h-auto w-6 text-science-blue" />
        <p class="text-white font-heebo font-medium text-[1.6rem] leading-8 tracking-wide">
          {{ content.EcrivezNous }}
        </p>
      </div>
    </div>
  </header>
</template>