<script lang="ts" setup>
  const { data: equipe } = await useFetch('https://admin.imagine2050.fr/api/equipe?populate=deep')
  const dataEquipe = equipe._rawValue.data.attributes
</script>

<template>
  <div>
    {{ dataEquipe.bloc1Titre }}
  </div>
</template>