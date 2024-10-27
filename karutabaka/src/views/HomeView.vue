<template>
	<div class="home-tile-container">
		<HomeTile v-for="tile of HOME_TILES" v-bind="tile" :key="tile.title" />
	</div>
</template>

<script setup lang="ts">
import HomeTile, { type HomeTileProps } from '../components/HomeTile.vue';

const HOME_TILES: HomeTileProps[] = [
	{
		routeName: 'home',
		title: 'Home',
		description: 'Main dashboard and latest updates.',
		iconSrc: '/assets/images/bara-head.webp',
	},
	{
		routeName: 'learning',
		title: 'Learning',
		description: 'Access learning materials and tutorials to improve your karuta skills.',
		iconSrc: '/assets/images/bara-head-momiji.webp',
	},
	{
		routeName: 'gallery',
		title: 'Gallery',
		description: 'Explore the collection of the 100 karuta cards.',
		iconSrc: '/assets/images/bara-head.webp',
	},
	{
		routeName: 'reciter',
		title: 'Reciter',
		description: 'Utilize the reciter program for gameplay or to improve your listening and reading skills.',
		iconSrc: '/assets/images/bara-head-momiji.webp',
	},
];
</script>

<style lang="scss" scoped>
.home-tile-container {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: auto;
	gap: 20px;

	@include tablet {
		gap: 32px;
		grid-template-columns: repeat(2, 1fr);
	}

	@include desktop {
		gap: 44px;
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>
