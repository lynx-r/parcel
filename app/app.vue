<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app'

useHead({
  title: 'Parcel',
  meta: [{ name: 'description', content: 'Parcel automation' }],
})
</script>
