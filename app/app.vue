<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app'

useHead({
  title: 'Snake Game',
  meta: [
    { name: 'description', content: 'Classic Snake game built with Nuxt.js' }
  ]
})
