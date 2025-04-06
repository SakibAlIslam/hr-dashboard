<script setup lang="ts">
import { useEmployeeStore } from '@/stores/employee'

const store = useEmployeeStore()

const options = ['All', 'Employee', 'Global Payroll', 'Contractors']
</script>

<template>
    <div class="relative">
        <select
            class="border border-gray-300 text-sm text-secondary px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-brand"
            v-model="store.filterType">
            <option v-for="option in options" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>
