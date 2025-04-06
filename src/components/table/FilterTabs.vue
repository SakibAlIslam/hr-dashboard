<script setup lang="ts">
import { computed } from 'vue'
import { useEmployeeStore } from '@/stores/employee'

const tabs: { label: string; value: 'All' | 'New Hire' | 'Draft' }[] = [
  { label: 'All', value: 'All' },
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
    <div class="flex flex-1 gap-2 bg-site p-1.5 rounded-xl">
        <button v-for="tab in tabs" :key="tab.value" class="px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer"
            :class="selected === tab.value
                ? 'bg-white text-highlight dark:text-site'
                : 'bg-transparent text-secondary'"
            @click="selected = tab.value">
            {{ tab.label }}
        </button>
    </div>
</template>
