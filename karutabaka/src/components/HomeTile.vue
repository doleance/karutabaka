<template>
	<RouterLink :to="{ name: routeName }" class="navigation-tile" :aria-labelledby="tileId">
		<div class="tile-container">
			<h3 :id="tileId" class="tile-title">{{ title }}</h3>
			<div class="tile-content">
				<img :src="iconSrc" height="148" width="180" alt="" />
				<p class="tile-description">{{ description }}</p>
			</div>
		</div>
	</RouterLink>
</template>

<script setup lang="ts">
import type { RouteName } from '../router/routes';

export interface HomeTileProps {
	description: string;
	iconSrc: string;
	title: string;
	routeName: RouteName;
}

const { routeName } = defineProps<HomeTileProps>();

const tileId = `tile-title-${routeName}`;
</script>

<style lang="scss" scoped>
@use '../assets/styles/colors' as *;

.navigation-tile {
	background: $card-background;
	border-radius: 16px;
	box-shadow: $box-shadow-card;
	color: $text-color-main;
	display: block;
	height: 428px;
	margin: 20px;
	max-width: 248px;
	padding: 20px;
	text-decoration: none;

	& .tile-container {
		border-radius: 4px;
		border: 2px $text-color-main solid;
		height: 100%;
		width: 100%;

		& .tile-title {
			font-size: 40px;
			text-align: center;
		}

		& .tile-content {
			border-top: 2px $text-color-main solid;
			display: flex;
			flex-direction: column;
			gap: 40px;
			padding: 32px 12px;

			& .tile-description {
				font-size: 16px;
				text-align: center;
			}
		}
	}
}
</style>
