<template>
	<RouterLink to="to" class="navigation-tile" aria-labelledby="tile-title">
		<div class="tile-container">
			<h3 id="tile-title" class="tile-title">Tile Title</h3>
			<div class="tile-content">
				<img src="/assets/images/bara-head.webp" height="148" width="180" alt="" />
				<p class="tile-description">Short description of the destination page.</p>
			</div>
		</div>
	</RouterLink>
</template>

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
