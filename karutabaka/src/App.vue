<template>
	<nav>
		<RouterLink :to="{ name: ROUTE_NAMES.HOME }">Go Home</RouterLink>
		<RouterLink :to="{ name: ROUTE_NAMES.RECITER }">Read please</RouterLink>
	</nav>
	<main>
		<RouterView />
	</main>
</template>

<script setup lang="ts">
import { ROUTE_NAMES } from './router/routes';
import { useFavicon, usePreferredDark } from '@vueuse/core';
import { computed } from 'vue';

const isDark = usePreferredDark();
const favicon = computed(() => (isDark.value ? 'favicon-momiji.ico' : 'favicon.ico'));

useFavicon(favicon);
</script>
