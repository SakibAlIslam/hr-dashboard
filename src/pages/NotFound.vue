<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-site text-center px-4">
        <h1 class="text-6xl font-bold text-highlight mb-4">404</h1>
        <p class="text-lg text-secondary mb-6">Oops! The page you're looking for doesn't exist.</p>
        <RouterLink to="/"
            class="inline-block bg-primary text-[#222222] px-6 py-3 rounded font-medium hover:brightness-95 transition">
            Go Back Home
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>