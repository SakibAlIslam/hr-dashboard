<template>
    <div class="flex bg-site min-h-screen text-base text-base dark:text-white dark:bg-gray-900">
        <!-- Sidebar -->
        <Sidebar />

        <!-- Main content area -->
        <div class="flex-1 ml-64 p-6">
            <!-- Top bar -->
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-bold">Page Title</h1>

                <!-- Light/Dark Toggle Button -->
                <button class="bg-brand px-4 py-2 rounded text-black font-medium shadow" @click="toggleDark">
                    Toggle {{ isDark ? 'Light' : 'Dark' }} Mode
                </button>
            </div>

            <!-- Content Slot (Router View) -->
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
</script>