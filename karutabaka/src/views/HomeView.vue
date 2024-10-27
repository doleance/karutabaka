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
