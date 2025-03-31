import { ref } from 'vue'

const isOpen = ref(false)

export const useSidebarToggle = () => {
  return { isOpen }
}
