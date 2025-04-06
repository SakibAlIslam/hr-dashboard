<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { ref } from 'vue'
import { useAttrs } from 'vue'
import Icon from '../ui/Icon.vue'

const theme = useThemeStore()
const attrs = useAttrs()

const selectedTheme = ref(theme.isDark ? 'dark' : 'light')

const toggleTheme = (mode: 'light' | 'dark') => {
    selectedTheme.value = mode
    theme.isDark = mode === 'dark'
}
</script>

<template>
    <header v-bind="attrs"
        class="w-full flex items-center justify-between gap-4 px-6 py-4 bg-white dark:bg-base sticky top-0 z-30">
        <!-- Left: Search Box -->
        <div class="flex-1 max-w-md relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
            <input type="text" placeholder="Search"
                class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-site dark:bg-gray-800 text-sm text-secondary focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>

        <div class="flex items-center gap-6">
            <div class="flex items-center bg-site dark:bg-gray-700 rounded-lg p-2">
                <button @click="toggleTheme('light')"
                    class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-100 cursor-pointer"
                    :class="selectedTheme === 'light' ? 'bg-primary text-[#222]' : 'bg-transparent text-secondary'">
                    <Icon name="sun" size="md" class="" /> Light
                </button>
                <button @click="toggleTheme('dark')"
                    class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-100 cursor-pointer"
                    :class="selectedTheme === 'dark' ? 'bg-primary text-secondary' : 'bg-transparent text-[#222]'">
                    <Icon name="moon" size="md" class="text-[#718096] dark:text-white" /> Dark
                </button>
            </div>

            <button class="relative w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                <Icon name="notification" size="md" />
            </button>

            <button class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                <Icon name="user" size="md" />
            </button>

            <div class="flex items-center gap-2">
                <div class="text-left hidden sm:block">
                    <p class="text-sm font-medium text-[#1F2937] dark:text-white">Benjamin</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">New York, USA</p>
                </div>
                <img src="https://i.pravatar.cc/40" alt="User" class="w-8 h-8 rounded-full object-cover" />
            </div>
        </div>
    </header>
</template>
