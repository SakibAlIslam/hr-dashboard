<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { useSidebarToggle } from '@/composables/useSidebarToggle'

const route = useRoute()
const theme = useThemeStore()
const { isOpen } = useSidebarToggle()

const menu = [
    { label: 'Home', path: '/' },
    { label: 'Team', path: '/team' },
    { label: 'Hire & Onboard', path: '/hire-and-onboard' },
    { label: 'Payroll', path: '/payroll' },
    { label: 'Time Tracking', path: '/time-tracking' },
    { label: 'Benefits', path: '/benefits' },
    { label: 'Notification', path: '/notifications' },
    { label: 'Settings', path: '/settings' },
]
</script>

<template>
    <!-- Overlay -->
    <div v-if="isOpen" class="fixed inset-0 bg-black/40 z-40 md:hidden" @click="isOpen = false"></div>

    <!-- Mobile Sidebar Toggle Button -->
    <button class="md:hidden fixed top-5 left-5 z-50 bg-transparent text-black dark:text-white transition-transform duration-300"
        @click="isOpen = true">
        ☰
    </button>

    <!-- Sidebar Drawer -->
    <aside
        class="fixed top-0 left-0 z-50 max-w-xs h-screen bg-card text-base sidebar-shadow transform transition-transform duration-300 md:hidden"
        :class="{ '-translate-x-full': !isOpen, 'translate-x-0': isOpen }">
        <!-- Logo -->
        <div class="flex items-center gap-2 px-5 py-8">
            <a href="/">
                <img :src="theme.isDark ? '' : 'https://i.ibb.co.com/Myb5NvGB/Logo.png'" alt="Logo" />
            </a>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col gap-1 mt-4 px-5 py-0">
            <p class="uppercase font-medium text-sm text-secondary mb-3 pl-5">Menu</p>
            <RouterLink v-for="item in menu" :key="item.label" :to="item.path" @click="isOpen = false"
                class="flex items-center gap-3 px-5 py-4 text-secondary rounded-xl transition-all duration-200 hover:bg-primary hover:font-bold hover:shadow-[10px_0_0_0_#222222]"
                :class="{
                    'bg-primary text-black font-bold shadow-[10px_0_0_0_#222222]': route.path === item.path
                }">
                {{ item.label }}
            </RouterLink>
        </nav>
    </aside>
</template>

<style scoped>
/* optional: add blur backdrop */
</style>