<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
import type { Strapi4Response } from "@nuxtjs/strapi"
const { find } = useStrapi4()

const layout = await find<Strapi4Response<Layout>>("layout", { populate: 'deep' });
const content = layout.data.attributes

</script>

<template>
  <footer class="bg-science-blue relative before:absolute before:w-full before:h-3 before:content-[''] before:top-0 before:left-0 before:bg-turbo after:absolute after:w-full after:h-3 after:content-[''] after:top-3 after:left-0 after:bg-cerise pt-16 pb-10 flex flex-col items-center gap-8 px-8">
    <img
      :src="runtimeConfig.public.apiBase + content.logo.data.attributes.url"
      :alt="content.logo.data.attributes.alternativeText"
      class="h-auto w-full max-w-sm"
    />
    <div class="flex max-lg:flex-col max-lg:items-center justify-center gap-6">
      <p class="text-[1.6rem] leading-8 font-barlow font-bold text-downriver max-lg:text-center">
        {{ content.copyright }}
      </p>
      <span class="text-[1.6rem] leading-8 font-barlow font-bold text-downriver max-lg:hidden">
        |
      </span>
      <NuxtLink
        to="/mentions-legales"
        class="text-[1.6rem] leading-8 hover:underline font-barlow font-bold text-downriver"
      >
        Mentions légales
      </NuxtLink>
      <span class="text-[1.6rem] leading-8 font-barlow font-bold text-downriver max-lg:hidden">
        |
      </span>
      <NuxtLink
        to="/politique-rgpd"
        class="text-[1.6rem] leading-8 hover:underline font-barlow font-bold text-downriver"
      >
        Politique RGPD
      </NuxtLink>
    </div>
    <p class="text-[1.6rem] leading-8 text-white font-barlow font-bold">
      Réalisé avec amour par <NuxtLink class="underline hover:no-underline" title="Beavers, agence digitale" to="https://beavers-agency.fr" target="_blank">Beavers, l'agence des 🦫</NuxtLink>
    </p>
  </footer>
</template>