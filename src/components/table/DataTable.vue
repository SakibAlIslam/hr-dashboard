<!-- src/components/table/DataTable.vue -->
<script setup lang="ts">
import { useEmployeeStore } from '@/stores/employee'
import DataTableHeader from './DataTableHeader.vue';
import DataTableRow from './DataTableRow.vue';

const store = useEmployeeStore()
</script>

<template>
  <div class="bg-white dark:bg-base p-4 rounded-xl shadow-sm overflow-auto">
    <!-- Table -->
    <table class="w-full text-left">
      <thead>
        <DataTableHeader />
      </thead>
      <tbody>
        <DataTableRow v-for="employee in store.filteredEmployees" :key="employee.id" :employee="employee" />
      </tbody>
    </table>
  </div>
</template>