<script setup lang="ts">
import type { OverviewHeaderProps } from '@/types/overview-header';
import Button from './Button.vue';

defineProps<OverviewHeaderProps>()
</script>

<template>
    <div class="flex items-start justify-between w-full mb-5 gap-2">
        <div class="ml-1">
            <h2 class="text-lg sm:text-xl font-semibold text-highlight">{{ title }}</h2>
            <p class="text-xs sm:text-sm text-secondary">{{ subtitle }}</p>
        </div>

        <Button label="Export Report" variant="primary" icon="export"></Button>
    </div>
</template>
