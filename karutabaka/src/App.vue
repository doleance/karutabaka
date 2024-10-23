<script setup lang="ts">
import { ROUTE_NAMES } from './router/routes';
</script>

<template>
  <nav>
    <RouterLink :to="{name: ROUTE_NAMES.HOME}">Go Home</RouterLink>
    <RouterLink :to="{name: ROUTE_NAMES.RECITER}">Read please</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
