import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { employees as employeeList } from '@/constants/employees'
import type { Employee } from '@/types/employee'

export const useEmployeeStore = defineStore('employee', () => {
  const employees = ref<Employee[]>(employeeList)
  const selectedIds = ref<number[]>([])

  const filterStatus = ref<'All' | 'New Hire' | 'Draft'>('All')
  const filterType = ref<'All' | 'Employee' | 'Global Payroll' | 'Contractors'>('All')

  const filteredEmployees = computed(() => {
    let result = employees.value

    if (filterStatus.value !== 'All') {
      result = result.filter(emp => emp.status === filterStatus.value)
    }

    if (filterType.value !== 'All') {
      result = result.filter(emp => emp.type === filterType.value)
    }

    return result
  })

  const setFilterStatus = (status: 'All' | 'New Hire' | 'Draft') => {
    filterStatus.value = status
  }

  const setFilterType = (type: 'All' | 'Employee' | 'Global Payroll' | 'Contractors') => {
    filterType.value = type
  }

  const toggleSelection = (id: number) => {
    selectedIds.value = selectedIds.value.includes(id)
      ? selectedIds.value.filter(item => item !== id)
      : [...selectedIds.value, id]
  }

  const clearSelection = () => {
    selectedIds.value = []
  }

  return {
    employees,
    selectedIds,
    toggleSelection,
    clearSelection,
    filterStatus,
    filterType,
    setFilterStatus,
    setFilterType,
    filteredEmployees,
  }
})
