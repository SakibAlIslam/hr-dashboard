// src/stores/employee.ts

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { employees as employeeList } from '@/constants/employees'
import type { Employee } from '@/types/employee'

export const useEmployeeStore = defineStore('employee', () => {
    const allEmployees = ref<Employee[]>(employeeList)
    const selectedIds = ref<string[]>([])

    const filterStatus = ref<'all' | 'New Hire' | 'Draft'>('all')

    const filteredEmployees = computed(() =>
        filterStatus.value === 'all'
            ? allEmployees.value
            : allEmployees.value.filter(emp => emp.status === filterStatus.value)
    )

    function setFilterStatus(status: 'all' | 'New Hire' | 'Draft') {
        filterStatus.value = status
    }

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
        filterStatus,
        setFilterStatus,
        filteredEmployees,
    }
})
