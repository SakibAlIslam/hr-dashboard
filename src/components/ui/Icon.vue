<script setup lang="ts">
import type { IconProps } from '@/types/icon';

defineOptions({ name: 'Icon' })
defineProps<IconProps>()

const sizeClass = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
}
</script>

<template>
  <svg :class="['fill-current', sizeClass[size || 'md']]" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>

</template>
