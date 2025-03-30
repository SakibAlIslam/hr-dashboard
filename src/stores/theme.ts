import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const isDark = ref(localStorage.getItem('theme') === 'dark')

    const toggleDark = () => {
        isDark.value = !isDark.value
    }

    // Apply to HTML <html class="dark">
    watch(isDark, (val) => {
        const html = document.documentElement
        html.classList.toggle('dark', val)
        localStorage.setItem('theme', val ? 'dark' : 'light')
    }, { immediate: true })

    return { isDark, toggleDark }
})
