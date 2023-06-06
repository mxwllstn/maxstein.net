<template>
  <div class="mb4">
    <div class="flex-ns justify-between">
      <h2 class="normal mb2-ns mb1 lh-solid">{{ title }}</h2>
      <h2 class="normal mb2 lh-solid">
        <a class="link black underline truncate" :href="website" target="_blank">{{ website }}</a>
      </h2>
    </div>
    <a class="link" :href="website" target="_blank"><img class="shadow-4 w-100" :src="imagePath" :alt="title" /></a>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  website: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  }
})

const imagePath = computed(() => String(new URL(`../assets/img/${props.image}`, import.meta.url)))
</script>
