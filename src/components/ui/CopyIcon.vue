<script setup lang="ts">
import { ref } from 'vue'
import { copyToClipboard } from '@/utils/clipboard'
import Icon from './Icon.vue';

const props = defineProps<{ text: string }>()
const copied = ref(false)

const handleCopy = async () => {
    const success = await copyToClipboard(props.text);
    const TIMEOUT = 1500;
    
    if (success) {
        copied.value = true
        setTimeout(() => (copied.value = false), TIMEOUT)
    }
}
</script>

<template>
    <div class="relative group flex">
        <button @click="handleCopy" class="hover:text-primary transition cursor-pointer">
            <Icon name="copyIcon" class="w-4 h-4" />
        </button>
        <transition name="fade">
            <div v-if="copied"
                class="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 z-10">
                Copied!
            </div>
        </transition>
    </div>
</template>
