<script setup lang="ts">
import { computed } from 'vue'
import { useEmployeeStore } from '@/stores/employee'
import Checkbox from '@/components/ui/Checkbox.vue'

const store = useEmployeeStore()

const isAllSelected = computed(() => {
    return store.employees.length > 0 && store.selectedIds.length === store.employees.length
})

const toggleAll = (value: boolean) => {
    if (value) {
        store.selectedIds = store.employees.map((emp) => emp.id)
    } else {
        store.clearSelection()
    }
}
</script>

<template>
    <tr class="bg-transparent text-left text-sm font-medium text-highlight border border-[#EEEEEF] dark:border-[#2A2A2E] rounded-lg">
        <th class="px-4 py-3">
            <Checkbox :model-value="isAllSelected" @update:model-value="toggleAll" />
        </th>
        <th class="px-4 py-3">Name</th>
        <th class="px-4 py-3">Employment ID</th>
        <th class="px-4 py-3">Type of hire</th>
        <th class="px-4 py-3">Country</th>
        <th class="px-4 py-3">License Use</th>
        <th class="px-4 py-3">Status</th>
    </tr>
</template>