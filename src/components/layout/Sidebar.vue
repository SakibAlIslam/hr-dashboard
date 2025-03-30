<template>
    <aside class="w-64 h-screen bg-card text-base border-r border-gray-200 dark:border-gray-700">
        <!-- Logo & primary -->
        <div class="flex items-center gap-2 px-5 py-8 border-b border-gray-200 dark:border-gray-700">
            <a href="/">
                <img src="https://i.ibb.co.com/Myb5NvGB/Logo.png" alt="Logo" />
            </a>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col gap-1 mt-4 px-2">
            <RouterLink v-for="item in menu" :key="item.label" :to="item.path"
                class="flex items-center gap-3 px-4 py-2 text-secondary rounded hover:bg-gray-100 dark:hover:bg-gray-700" :class="{
                    'bg-primary text-black font-semibold': route.path === item.path,
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