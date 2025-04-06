<script setup lang="ts">
import type { OverviewHeaderProps } from '@/types/overview-header';
import Button from './Button.vue';

defineProps<OverviewHeaderProps>()
</script>

<template>
    <div class="flex items-start justify-between w-full mb-5">
        <div>
            <h2 class="text-xl font-semibold text-highlight">{{ title }}</h2>
            <p class="text-sm text-secondary">{{ subtitle }}</p>
        </div>

        <Button label="Export Report" variant="primary" size="md" icon="export"></Button>
    </div>
</template>
