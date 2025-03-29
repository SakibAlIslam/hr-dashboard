import { ref, watchEffect } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
    const toggleDark = () => {
        isDark.value = !isDark.value
    }

    watchEffect(() => {
        const html = document.documentElement;
        if (isDark.value) {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
    })

    return { isDark, toggleDark }
}
