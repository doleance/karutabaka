<template>
	<div class="home-tile-container">
		<HomeTile v-for="tile of HOME_TILES" v-bind="tile" :key="tile.title" />
	</div>
</template>

<script setup lang="ts">
import HomeTile, { type HomeTileProps } from '../components/HomeTile.vue';

const HOME_TILES: HomeTileProps[] = [
	{
		routeName: 'learning',
		title: 'Learning',
		description: 'Access learning materials and tutorials to improve your karuta skills.',
		iconSrc: '/assets/images/tile-icons/bara-learning.webp',
	},
	{
		routeName: 'gallery',
		title: 'Gallery',
		description: 'Explore the collection of the 100 karuta cards.',
		iconSrc: '/assets/images/tile-icons/bara-magnifying.webp',
	},
	{
		routeName: 'reciter',
		title: 'Reciter',
		description: 'Utilize the reciter program for gameplay or to improve your listening and reading skills.',
		iconSrc: '/assets/images/tile-icons/bara-singing.webp',
	},
	{
		routeName: 'rules',
		title: 'Rules',
		description: 'Learn the official rules and guidelines of Hyakunin Isshu Kyougi Karuta.',
		iconSrc: '/assets/images/tile-icons/bara-judge.webp',
	},
];
</script>

<style lang="scss" scoped>
.home-tile-container {
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: auto;

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
