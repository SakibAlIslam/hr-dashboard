<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    modelValue: boolean
    disabled?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const isChecked = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})
</script>

<template>
    <label class="inline-flex items-center rounded-sm">
        <input type="checkbox"
            class="form-checkbox w-4.5 h-4.5 rounded-sm text-primary disabled:cursor-not-allowed cursor-pointer"
            :disabled="props.disabled" v-model="isChecked" />
    </label>
</template>

<style scoped>
input[type='checkbox'] {
    accent-color: #222222;
}
</style>
