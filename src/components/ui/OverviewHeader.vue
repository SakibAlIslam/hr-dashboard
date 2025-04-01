<script setup lang="ts">
import type { OverviewHeaderProps } from '@/types/overview-header';
import Button from './Button.vue';

defineProps<OverviewHeaderProps>()
</script>

<template>
    <div class="flex items-start justify-between w-full mb-5">
        <!-- Left: Title & Subtitle -->
        <div>
            <h2 class="text-xl font-semibold text-highlight">{{ title }}</h2>
            <p class="text-sm text-secondary">{{ subtitle }}</p>
        </div>

        <!-- Right: Export Button -->
        <Button label="Export Report" variant="primary" size="md"></Button>
    </div>
</template>
