<script setup lang="ts">
import { computed } from 'vue'
import { useEmployeeStore } from '@/stores/employee'
import Checkbox from '@/components/ui/Checkbox.vue'

const store = useEmployeeStore()

const isAllSelected = computed(() => {
    return store.allEmployees.length > 0 && store.selectedIds.length === store.allEmployees.length
})

const toggleAll = (value: boolean) => {
    if (value) {
        store.selectedIds = store.allEmployees.map((emp) => emp.id)
    } else {
        store.clearSelection()
    }
}
</script>

<template>
    <tr class="bg-gray-100 dark:bg-gray-800 text-left text-sm font-medium text-gray-600 dark:text-gray-300">
        <!-- Checkbox column -->
        <th class="px-4 py-3">
            <Checkbox :model-value="isAllSelected" @update:model-value="toggleAll" />
        </th>
        <th class="px-4 py-3">Name</th>
        <th class="px-4 py-3">Type</th>
        <th class="px-4 py-3">Country</th>
        <th class="px-4 py-3">License Used</th>
        <th class="px-4 py-3">Status</th>
    </tr>
</template>