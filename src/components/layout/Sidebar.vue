<template>
    <aside class="w-64 h-screen bg-sidebar text-base border-r border-gray-200 dark:border-gray-700">
        <!-- Logo & Brand -->
        <div class="flex items-center gap-2 p-4 border-b border-gray-200 dark:border-gray-700">
            <img src="@/assets/vue.svg" alt="Logo" class="h-6 w-6" />
            <h1 class="text-lg font-bold text-brand">HUREN</h1>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col gap-1 mt-4 px-2">
            <RouterLink v-for="item in menu" :key="item.label" :to="item.path"
                class="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700" :class="{
                    'bg-brand text-black font-semibold': route.path === item.path,
                }">
                <!-- <item.icon class="w-4 h-4" /> -->
                {{ item.label }}
            </RouterLink>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const menu = [
    { label: 'Home', path: '/dashboard' },
    { label: 'Team', path: '/team' },
    { label: 'Hire & Onboard', path: '/hire-and-onboard' },
    { label: 'Payroll', path: '/payroll' },
    { label: 'Time Tracking', path: '/time-tracking' },
    { label: 'Benefits', path: '/benefits' },
    { label: 'Notification', path: '/notifications' },
    { label: 'Settings', path: '/settings' },
]
</script>