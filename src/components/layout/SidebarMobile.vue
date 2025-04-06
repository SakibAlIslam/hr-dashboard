<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { useSidebarToggle } from '@/composables/useSidebarToggle'
import { menu } from '@/constants/menu'
import { useAttrs, ref, defineOptions } from 'vue'
import Icon from '@/components/ui/Icon.vue'

defineOptions({ inheritAttrs: false })
const attrs = useAttrs()

const route = useRoute()
const theme = useThemeStore()
const { isOpen } = useSidebarToggle()

const selectedTheme = ref(theme.isDark ? 'dark' : 'light')

const toggleTheme = (mode: 'light' | 'dark') => {
  selectedTheme.value = mode
  theme.isDark = mode === 'dark'
}
</script>

<template>
  <!-- Overlay -->
  <div v-if="isOpen" class="fixed inset-0 bg-black/40 z-40 md:hidden" @click="isOpen = false"></div>

  <!-- Sidebar Drawer -->
  <aside
    v-bind="attrs"
    class="fixed top-0 left-0 z-50 max-w-xs min-w-xs h-screen bg-card text-base sidebar-shadow transform transition-transform duration-300 flex flex-col justify-between md:hidden"
    :class="{ '-translate-x-full': !isOpen, 'translate-x-0': isOpen }"
  >
    <div>
      <!-- Logo -->
      <div class="flex items-center gap-2 px-5 py-8">
        <a href="/">
          <img :src="theme.isDark ? 'https://i.ibb.co.com/ch0stXTv/Logo.png' : 'https://i.ibb.co.com/Myb5NvGB/Logo.png'" alt="Logo" class="w-30" />
        </a>
      </div>

      <!-- Navigation Links -->
      <nav class="flex flex-col gap-1 mt-4 px-5 py-0">
        <p class="uppercase font-medium text-sm text-secondary mb-3 pl-5">Menu</p>
        <RouterLink
          v-for="item in menu"
          :key="item.label"
          :to="item.path"
          @click="isOpen = false"
          class="flex items-center gap-3 px-5 py-4 text-secondary rounded-xl transition-all duration-200 hover:bg-primary hover:font-bold hover:shadow-[10px_0_0_0_#222222]"
          :class="{
            'bg-primary text-black font-bold shadow-[10px_0_0_0_#222222]': route.path === item.path
          }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </div>

    <!-- Theme Toggle -->
    <div class="p-4 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center bg-site dark:bg-gray-700 rounded-lg p-2 max-w-fit">
        <button
          @click="toggleTheme('light')"
          class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-100 cursor-pointer"
          :class="selectedTheme === 'light' ? 'bg-primary text-[#222]' : 'bg-transparent text-secondary'"
        >
          <Icon name="sun" size="md" /> Light
        </button>
        <button
          @click="toggleTheme('dark')"
          class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-100 cursor-pointer"
          :class="selectedTheme === 'dark' ? 'bg-primary text-secondary' : 'bg-transparent text-[#222]'"
        >
          <Icon name="moon" size="md" class="text-[#718096] dark:text-white" /> Dark
        </button>
      </div>
    </div>
  </aside>
</template>
