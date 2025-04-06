<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { useSidebarToggle } from '@/composables/useSidebarToggle'
import Icon from '@/components/ui/Icon.vue'

const theme = useThemeStore()
const { isOpen } = useSidebarToggle()
</script>

<template>
    <header
        class="md:hidden w-full flex items-center px-4 py-3 bg-white dark:bg-base shadow-sm sticky top-0 z-40">
        <!-- Left: Menu Button -->
        <div class="flex items-center gap-3">
            <!-- Mobile Sidebar Toggle Button -->
            <button class="md:hidden  bg-transparent text-black dark:text-white transition-transform duration-300"
                @click="isOpen = true">
                <Icon name="menuIcon" size="lg" classes="dark:text-white" />
            </button>
        </div>

        <!-- Logo -->
        <div class="flex flex-1 items-center justify-center">
            <a href="/">
                <img :src="theme.isDark ? 'https://i.ibb.co.com/ch0stXTv/Logo.png' : 'https://i.ibb.co.com/Myb5NvGB/Logo.png'" alt="Logo" class="w-50" />
            </a>
        </div>

        <!-- Right: Notification & Profile -->
        <div class="flex items-center gap-3">
            <!-- Notification Icon -->
            <button
                class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer relative">
                <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                <Icon name="notification" size="md" />
            </button>

            <!-- User Icon -->
            <button class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer">
                <Icon name="user" size="md" />
            </button>
        </div>
    </header>
</template>
