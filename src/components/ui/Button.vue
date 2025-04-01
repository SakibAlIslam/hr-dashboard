<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { ButtonProps } from '@/types/button'

defineOptions({ name: 'Button' })

const props = defineProps<ButtonProps>()
const slots = useSlots()

const hasIconOnly = computed(() => !props.label && (slots.default || slots.icon))

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-100 text-gray-800'
    case 'ghost':
      return 'bg-transparent text-gray-700 border border-gray-300'
    default:
      return 'bg-primary text-[#222222]'
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm px-3 py-1'
    case 'lg':
      return 'text-base px-5 py-3'
    default:
      return 'text-sm px-4 py-2'
  }
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center gap-2 rounded font-medium transition hover:brightness-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
    :class="[variantClass, sizeClass, { 'w-10 h-10 p-0': hasIconOnly }]"
    v-bind="$attrs"
  >
    <slot name="icon" />
    <span v-if="label">
      {{ label }}
    </span>
    <slot />
  </button>
</template>
