<script setup lang="ts">
import { useEmployeeStore } from '@/stores/employee'
import Checkbox from '@/components/ui/Checkbox.vue'
import StatusBadge from '@/components/table/StatusBadge.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import type { Employee } from '@/types/employee'

const props = defineProps<{ employee: Employee }>()
const store = useEmployeeStore()
</script>

<template>
    <tr class="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
        <!-- Checkbox -->
        <td class="px-4 py-3">
            <Checkbox :model-value="store.selectedIds.includes(props.employee.id)"
                @update:model-value="() => store.toggleSelection(props.employee.id)" />
        </td>

        <!-- Employee Info -->
        <td class="px-4 py-3 whitespace-nowrap">
            <div class="flex items-center gap-3">
                <img :src="employee.avatar" class="w-8 h-8 rounded-full object-cover" />
                <div>
                    <p class="font-medium">{{ employee.name }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">ID: {{ employee.employeeId }}</p>
                </div>
            </div>
        </td>

        <!-- Type -->
        <td class="px-4 py-3 text-sm">{{ employee.type }}</td>

        <!-- Country -->
        <td class="px-4 py-3 text-sm">{{ employee.flag }} {{ employee.country }}</td>

        <!-- Progress -->
        <td class="px-4 py-3">
            <ProgressBar :value="employee.usage.current" :max="employee.usage.total" :color="employee.usage.color" />
        </td>

        <!-- Status -->
        <td class="px-4 py-3">
            <StatusBadge :status="employee.status" />
        </td>
    </tr>
</template>