<template>
  <main class="main flex bg-site min-h-screen text-base">
    <!-- Sidebar -->
    <Sidebar class="desktop-sidebar hidden md:block" />
    <SidebarMobile class="mobile-sidebar block md:hidden" />

    <!-- Main content -->
    <div class="main-content flex-1">
      <!-- Top bar -->
      <Topbar class="hidden md:flex" />
      <TopbarMobile class="md:hidden" />

      <!-- Page Content -->
      <div class="page-content sm:p-8 p-3">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue'
import SidebarMobile from '@/components/layout/SidebarMobile.vue';
import Topbar from '@/components/layout/Topbar.vue';
import TopbarMobile from '@/components/layout/TopbarMobile.vue';
</script>