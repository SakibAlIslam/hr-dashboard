<template>
    <div class="flex bg-site min-h-screen text-base">
      <!-- Sidebar -->
      <Sidebar class="desktop-sidebar hidden md:block"/>
      <SidebarMobile class="mobile-sidebar block md:hidden"/>
  
      <!-- Main content -->
      <div class="flex-1 ml-10 p-6">
        <!-- Top bar -->
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold">Page Title</h1>
  
          <!-- Dark Mode Toggle Button -->
          <button
            class="bg-primary px-4 py-2 rounded text-black dark:text-white font-medium shadow"
            @click="theme.toggleDark"
          >
            Toggle {{ theme.isDark ? 'Light' : 'Dark' }}
          </button>
        </div>
  
        <!-- Page Content -->
        <RouterView />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Sidebar from '@/components/layout/Sidebar.vue'
import SidebarMobile from '@/components/layout/SidebarMobile.vue';
  import { useThemeStore } from '@/stores/theme'
  
  // 🟢 Store instance
  const theme = useThemeStore()
  </script>
  