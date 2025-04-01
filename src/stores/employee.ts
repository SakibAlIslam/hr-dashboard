import { defineStore } from 'pinia'
import { ref } from 'vue'
import { employees as employeeList } from '@/constants/employees'
import type { Employee } from '@/types/employee'

export const useEmployeeStore = defineStore('employee', () => {
    const allEmployees = ref<Employee[]>(employeeList)

    const selectedIds = ref<string[]>([])

    function toggleSelection(id: string) {
        if (selectedIds.value.includes(id)) {
            selectedIds.value = selectedIds.value.filter(item => item !== id)
        } else {
            selectedIds.value.push(id)
        }
    }

    function clearSelection() {
        selectedIds.value = []
    }

    return {
        allEmployees,
        selectedIds,
        toggleSelection,
        clearSelection,
    }
})
