<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const { find } = useStrapi()
const nuxtApp = useNuxtApp()

const content = await find<Mention>("mention", { populate: 'deep' });
const legals = content.data.attributes

useHead({
  title: legals.meta.title,
  meta: [
    { name: 'description', content: legals.meta.description },
    { property: 'og:description', content: legals.meta.description },
    { property: 'og:title', content: legals.meta.title }
  ]
})
</script>

<template>
  <div>
    <div class="px-8 h-[45rem] relative flex justify-center items-end">
      <div class="absolute w-full h-full inset-0 z-0">
        <img
          :src="(runtimeConfig.public.apiBase + legals.imageHeader.data.attributes.url)"
          :alt="legals.imageHeader.data.attributes.alternativeText"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="max-w-screen-xl w-full mx-auto flex flex-col relative z-10">
        <h1 class="font-heebo text-white text-[5rem] leading-[6rem] font-bold pb-16">
          {{ legals.titre }}
        </h1>
      </div>
    </div>

    <div
      class="py-28 olliver-content px-8 max-w-screen-xl mx-auto"
      v-html="nuxtApp.$mdit.render(legals.contenu)"
    />
  </div>
</template>