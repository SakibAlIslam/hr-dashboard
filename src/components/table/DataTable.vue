<template>
  <div class="w-full overflow-x-auto max-w-table">
    <table class="w-full min-w-fit text-left whitespace-nowrap">
      <thead>
        <DataTableHeader />
      </thead>
      <tbody>
        <DataTableRow
          v-for="employee in store.filteredEmployees"
          :key="employee.id"
          :employee="employee"
        />
      </tbody>
    </table>
  </div>
</template>


<script setup lang="ts">
import { useEmployeeStore } from '@/stores/employee'
import DataTableHeader from './DataTableHeader.vue';
import DataTableRow from './DataTableRow.vue';

const store = useEmployeeStore()
</script>
