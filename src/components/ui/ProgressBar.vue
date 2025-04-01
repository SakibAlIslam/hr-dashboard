<script setup lang="ts">
interface Props {
    value: number
    max: number
    color: string
}

const props = defineProps<Props>()
const percent = Math.min((props.value / props.max) * 100, 100)
</script>

<template>
    <div class="w-full h-2 bg-gray-200 rounded-full">
        <div class="h-full rounded-full transition-all" :style="{ width: `${percent}%`, backgroundColor: props.color }">
        </div>
    </div>
</template>