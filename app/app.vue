<template>
  <UApp>
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <!-- <AppFooter /> -->
  </UApp>
</template>

<script setup lang="ts">
import { useHead } from '#app'

useHead({
  title: 'Parcel',
  meta: [{ name: 'description', content: 'Parcel automation' }],
})
</script>
