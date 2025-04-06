<script setup lang="ts">
import type { StatCardProps } from '@/types/stat-card'
import Icon from './Icon.vue';

const props = defineProps<StatCardProps>()
const { icon, title, count, percentage } = props
</script>

<template>
    <div class="bg-card rounded-xl p-6 border border-[#eeeeee] w-full">
        <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
                <Icon :name="icon" classes="w-15 h-15" />
                <p class="text-highlight font-semibold text-lg leading-none">
                    {{ title }}
                </p>
            </div>
            <button>
                <svg class="w-5 h-5 text-[#212121] dark:text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6 12h.008v.008H6V12zm6 0h.008v.008H12V12zm6 0h.008v.008H18V12z" />
                </svg>
            </button>
        </div>

        <!-- Count -->
        <p class="text-[42px] font-semibold text-highlight mt-[14px] leading-none">
            {{ count }}
        </p>

        <!-- Description -->
        <div class="flex items-center justify-between text-sm mt-2">
            <p class="text-secondary text-sm">
                Total Applied last year were <span class="text-highlight">780</span> candidate
            </p>
            <div
                class="flex items-center gap-2 px-3 py-1 border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium">
                <Icon name="trendUp" />
                <span class="text-sm dark:text-white text-[#222222]">{{ percentage }}</span>
            </div>
        </div>
    </div>
</template>
