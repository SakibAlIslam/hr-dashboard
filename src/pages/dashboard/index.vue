<script setup lang="ts">
import DataTable from '@/components/table/DataTable.vue';
import OverviewHeader from '@/components/ui/OverviewHeader.vue';
import StatCard from '@/components/ui/StatCard.vue';
import FilterTabs from '@/components/table/FilterTabs.vue'
</script>

<template>
    <OverviewHeader
        title="Open Hiring"
        subtitle="Overview of your company’s various hirings"
    />
    <div class="stat-cards grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard title="Total Applied" :count="920" percentage="+2.68%" />
        <StatCard title="Total Invitation" :count="54" percentage="+4.87%" />
        <StatCard title="Total Hiring" :count="84" percentage="+9.12%" />
    </div>
    <div class="custom-table-container my-8 bg-white dark:bg-base p-6 rounded-xl">
        <FilterTabs class="mb-6" />
        <div class="custom-table mb-6">
            <DataTable />
        </div>
    </div>
</template>