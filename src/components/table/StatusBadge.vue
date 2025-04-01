<script setup lang="ts">
interface Props {
    status: 'Draft' | 'New Hire'
}

const props = defineProps<Props>()
</script>

<template>
    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" :class="{
        'bg-orange-100 text-orange-800': props.status === 'Draft',
        'bg-green-100 text-green-800': props.status === 'New Hire',
    }">
        {{ props.status }}
    </span>
</template>
