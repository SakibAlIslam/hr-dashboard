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
    <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox"
            class="form-checkbox w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary disabled:cursor-not-allowed"
            :disabled="props.disabled" v-model="isChecked" />
    </label>
</template>

<style scoped>
input[type='checkbox'] {
    accent-color: #D9F27E;
}
</style>
