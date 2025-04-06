<script setup lang="ts">
defineOptions({ name: 'FlagIcon' })

defineProps<{
  code: string
  alt?: string
  size?: number
}>()
</script>

<template>
  <img
    :src="`https://flagcdn.com/w${size || 20}/${code.toLowerCase()}.png`"
    :alt="alt || code"
    :class="[`rounded object-cover`, `w-[${size || 20}px] h-auto`]"
    loading="lazy"
  />
</template>