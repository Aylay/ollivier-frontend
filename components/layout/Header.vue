<script lang="ts" setup>
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const { find } = useStrapi()

const layout = await find<Layout>("layout", { populate: 'deep' });
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
    <div class="px-8 max-w-screen-xl mx-auto flex max-lg:flex-col max-lg:gap-8 py-6 lg:py-12 justify-between items-center">
      <NuxtLink
        to="/"
        :title="content.logo.data.attributes.alternativeText"
      >
        <img
          :src="runtimeConfig.public.apiBase + content.logo.data.attributes.url"
          :alt="content.logo.data.attributes.alternativeText"
          class="h-auto w-full max-w-[20rem] lg:max-w-2xl"
        />
      </NuxtLink>
      <div class="flex flex-col gap-4 max-lg:items-center">
        <div
          class="flex gap-4 items-center"
        >
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
        <div
          class="flex gap-4 items-center cursor-pointer justify-end"
          @click="scrollToForm"
          v-if="route.name === 'index'"
        >
          <EnvelopeIcon class="h-auto w-6 text-science-blue" />
          <p class="text-white font-heebo font-medium text-[1.6rem] leading-8 tracking-wide">
            {{ content.EcrivezNous }}
          </p>
        </div>
      </div>
    </div>
  </header>
</template>