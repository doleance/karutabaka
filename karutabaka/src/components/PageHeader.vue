<template>
	<header class="header">
		<nav>
			<RouterLink v-for="(route, index) in routesToShow" :key="index" :to="{ name: route.name }">
				{{ route.meta?.navTitle }}
			</RouterLink>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { routes } from '../router/routes';

const routesToShow = computed(() => routes.filter((route) => route.meta?.navTitle));
</script>

<style lang="scss">
.header {
	background-image: url('/assets/images/patterns/header-bg-pattern.webp');
	background-repeat: repeat-x;
	background-size: auto 100%;
	height: 80px;
}
</style>
