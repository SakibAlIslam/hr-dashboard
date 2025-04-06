<script setup lang="ts">
import { useEmployeeStore } from '@/stores/employee'
import Checkbox from '@/components/ui/Checkbox.vue'
import StatusBadge from '@/components/table/StatusBadge.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import FlagIcon from '@/components/ui/FlagIcon.vue'
import type { Employee } from '@/types/employee'
import CopyIcon from '../ui/CopyIcon.vue'

const props = defineProps<{ employee: Employee }>()
const store = useEmployeeStore()
</script>

<template>
  <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200 cursor-pointer">
    <!-- Checkbox -->
    <td class="px-4 py-3">
      <Checkbox
        :model-value="store.selectedIds.includes(employee.id)"
        @update:model-value="() => store.toggleSelection(employee.id)"
      />
    </td>

    <!-- Employee Name -->
    <td class="px-4 py-3 whitespace-nowrap">
      <div class="flex items-center gap-3">
        <img :src="employee.avatar" class="w-8 h-8 rounded-full object-cover" />
        <div>
          <p class="font-medium text-secondary">{{ employee.name }}</p>
        </div>
      </div>
    </td>

    <!-- Employee ID -->
    <td class="px-4 py-3">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-3">
          <p class="text-xs text-secondary">{{ employee.employmentId }}</p>
          <CopyIcon :text="employee.employmentId" />
        </div>
      </div>
    </td>

    <!-- Type -->
    <td class="px-4 py-3 text-sm text-secondary">
      {{ employee.type }}
    </td>

    <!-- Country -->
    <td class="px-4 py-3 text-sm text-secondary">
      <div class="flex items-center gap-2">
        <FlagIcon :code="employee.country.flag" />
        <span>{{ employee.country.name }}</span>
      </div>
    </td>

    <!-- License Usage -->
    <td class="px-4 py-3 text-sm text-secondary">
      <div class="flex flex-col gap-1">
        <ProgressBar
          :value="employee.licenseUsed"
          :max="employee.licenseTotal"
          :color="employee.licenseColor"
        />
        <span class="text-xs">{{ employee.licenseUsed }}/{{ employee.licenseTotal }}</span>
      </div>
    </td>

    <!-- Status -->
    <td class="px-4 py-3">
      <StatusBadge :status="employee.status" />
    </td>
  </tr>
</template>
