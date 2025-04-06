<template>
    <aside class="w-64 bg-card text-base sidebar-shadow">
        <!-- Logo & primary -->
        <div class="flex items-center gap-2 px-5 py-8">
            <a href="/">
                <img :src="theme.isDark ? 'https://i.ibb.co.com/Myb5NvGB/Logo.png' : 'https://i.ibb.co.com/Myb5NvGB/Logo.png'" alt="Logo" />
            </a>
        </div>

        <!-- Navigation Links -->
        <nav class="flex flex-col gap-1 mt-4 px-5 py-0">
            <p class="uppercase font-medium text-sm text-secondary mb-3 pl-5">Menu</p>
            <RouterLink v-for="item in menu" :key="item.label" :to="item.path"
                class="flex items-center gap-3 px-5 py-4 text-secondary rounded-xl transition-all duration-200 hover:bg-primary hover:font-bold hover:shadow-[10px_0_0_0_#222222]" :class="{
                    'bg-primary text-black font-bold shadow-[10px_0_0_0_#222222]': route.path === item.path,
                }">
                <Icon :name="item.icon" size="md" />
                {{ item.label }}
            </RouterLink>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { menu } from '@/constants/menu'
import Icon from '../ui/Icon.vue'

const route = useRoute()
const theme = useThemeStore()
</script>