<!-- src/components/table/FilterPanel.vue -->
<template>
    <div class="bg-white rounded-xl shadow p-4 w-full">
        <h3 class="text-lg font-semibold mb-4">Filter Employees</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label class="block text-sm font-medium mb-1">Type</label>
                <select v-model="selectedType" class="w-full border border-gray-300 rounded p-2">
                    <option value="">All</option>
                    <option value="Employee">Employee</option>
                    <option value="Global Payroll">Global Payroll</option>
                    <option value="Contractors">Contractors</option>
                </select>
            </div>
            <div>
                <label class="block text-sm font-medium mb-1">Country</label>
                <input type="text" v-model="country" class="w-full border border-gray-300 rounded p-2"
                    placeholder="Search Country" />
            </div>
        </div>

        <div class="flex justify-end mt-4 gap-2">
            <button class="text-sm text-gray-500" @click="resetFilters">Reset</button>
            <button class="bg-primary text-[#222222] text-sm font-medium px-4 py-2 rounded"
                @click="applyFilters">Apply</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedType = ref('')
const country = ref('')

const resetFilters = () => {
    selectedType.value = ''
    country.value = ''
}

const applyFilters = () => {
    // Placeholder: apply logic with Pinia later
    console.log('Type:', selectedType.value, 'Country:', country.value)
}
</script>