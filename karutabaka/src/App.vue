<template>
	<PageHeader class="header-margin" />
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

<style lang="scss" scoped>
.header-margin {
	margin: 44px 0px;
}

main {
	display: flex;
	justify-content: center;
	margin: 0 16px;
}
</style>
