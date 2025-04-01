<script setup lang="ts">
import { computed } from 'vue'
import { useEmployeeStore } from '@/stores/employee'

const tabs: { label: string; value: 'all' | 'New Hire' | 'Draft' }[] = [
  { label: 'All', value: 'all' },
  { label: 'New Hire', value: 'New Hire' },
  { label: 'Draft', value: 'Draft' },
]

const store = useEmployeeStore()
const selected = computed({
    get: () => store.filterStatus,
    set: (val) => store.setFilterStatus(val)
})
</script>

<template>
    <div class="flex gap-2 bg-base dark:bg-base p-2 rounded-xl border border-gray-200 dark:border-gray-700">
        <button v-for="tab in tabs" :key="tab.value" class="px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
            :class="selected === tab.value
                ? 'bg-primary text-black shadow'
                : 'bg-white dark:bg-base text-secondary border border-gray-300 dark:border-gray-600'"
            @click="selected = tab.value">
            {{ tab.label }}
        </button>
    </div>
</template>
