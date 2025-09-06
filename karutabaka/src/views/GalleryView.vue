<template>
	<div class="gallery-view">
		<div class="card-filter">
			<label class="card-filter-input-label" for="card-filter-input">Search by kimariji or card number</label>
			<input id="card-filter-input" class="card-filter-input" type="search" :size="32" :maxlength="12" />
		</div>
		<ul class="gallery-container">
			<li v-for="(card, index) of KARUTA_CARDS" :key="card.identifyingCharacters">
				<button class="gallery-item" @click="onOpenDialog(card)">
					<img :src="card.imageSrc" class="gallery-item-image" />
					<p class="gallery-item-name">{{ index + 1 }}. {{ card.identifyingCharacters.toUpperCase() }}</p>
				</button>
			</li>
		</ul>
		<dialog
			v-if="selectedKarutaCard"
			ref="card-dialog"
			aria-labelledby="labeldiv"
			class="gallery-item-dialog"
			@click="onCloseDialog($event)"
		>
			<div class="gallery-item-dialog-title">
				<h1>{{ selectedKarutaCard.identifyingCharacters.toUpperCase() }}</h1>
				<button class="gallery-item-dialog-close-btn" @click="cardDialog?.close()">
					<i class="pi pi-times"></i>
				</button>
			</div>
			<div class="gallery-item-dialog-content">
				<img :src="selectedKarutaCard.imageSrc" class="gallery-item-dialog-image" />
				<div class="gallery-item-dialog-verses">
					<h2>Romaji</h2>
					<p v-html="selectedKarutaCard.verseFirstPart"></p>
					<p v-html="selectedKarutaCard.verseSecondPart"></p>
					<h2>Translation</h2>
					<p>placeholder first verse</p>
					<p>placeholder second verse</p>
				</div>
			</div>
		</dialog>
	</div>
</template>

<script setup lang="ts">
import type { KarutaCard } from '@/interfaces/karuta-card.interface';
import { KARUTA_CARDS } from '../constants/karuta-cards.constants';
import { nextTick, ref, useTemplateRef } from 'vue';

const cardDialog = useTemplateRef('card-dialog');
const selectedKarutaCard = ref<KarutaCard | null>();

const onOpenDialog = async (card: KarutaCard): void => {
	selectedKarutaCard.value = card;
	await nextTick();
	cardDialog.value?.showModal();
};

// eslint-disable-next-line complexity
const onCloseDialog = (event: MouseEvent): void => {
	if (!cardDialog.value) {
		return;
	}

	const rect = cardDialog.value.getBoundingClientRect();
	const isInDialog =
		rect.top <= event.clientY &&
		event.clientY <= rect.top + rect.height &&
		rect.left <= event.clientX &&
		event.clientX <= rect.left + rect.width;

	if (!isInDialog) {
		selectedKarutaCard.value = null;
		cardDialog.value.close();
	}
};
</script>

<style lang="scss" scoped>
.gallery-view {
	display: flex;
	flex-direction: column;
	gap: 16px;
	justify-content: center;

	.card-filter {
		display: flex;
		flex-direction: column;
		justify-content: center;

		.card-filter-input-label {
			align-self: center;
		}

		.card-filter-input {
			align-self: center;
			border-radius: 8px;
			padding: 4px 8px;
			width: fit-content;
		}
	}

	.gallery-container {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
		margin-bottom: 40px;
		max-width: 900px;

		.gallery-item {
			@include card(small);
			display: flex;
			flex-direction: column;
			gap: 8px;
			justify-content: center;
			max-width: 160px;

			.gallery-item-name {
				text-align: center;
			}
		}
	}

	.gallery-item-dialog {
		margin: auto;

		.gallery-item-dialog-title {
			align-items: center;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 16px;

			.gallery-item-dialog-close-btn {
				border-radius: 100%;
				height: fit-content;
				padding: 8px;
				text-align: center;

				&:hover i {
					font-weight: bolder;
				}
			}
		}

		.gallery-item-dialog-content {
			align-items: center;
			display: flex;
			flex-direction: row;
			gap: 28px;
			justify-content: space-between;

			.gallery-item-dialog-image {
				height: 400px;
			}

			.gallery-item-dialog-verses {
				display: flex;
				flex-direction: column;
				gap: 4px;

				p:nth-of-type(2) {
					margin-bottom: 20px;
				}
			}
		}
	}
}
</style>
