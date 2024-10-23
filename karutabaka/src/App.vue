<template>
	<PageHeader />
	<main>
		<RouterView />
	</main>
</template>

<script setup lang="ts">
import { useFavicon, usePreferredDark } from '@vueuse/core';
import { computed } from 'vue';
import PageHeader from './components/PageHeader.vue';

const isDark = usePreferredDark();
const favicon = computed(() => (isDark.value ? 'favicon-momiji.ico' : 'favicon.ico'));

useFavicon(favicon);
</script>
