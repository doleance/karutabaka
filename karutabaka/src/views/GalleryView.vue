<template>
	<div class="gallery-view">
		<div class="card-filter">
			<label class="card-filter-input-label" for="card-filter-input">Search by kimariji or card number</label>
			<input id="card-filter-input" class="card-filter-input" type="search" :size="32" :maxlength="12" />
		</div>
		<div class="gallery-container">
			<div
				v-for="(card, index) of KARUTA_CARDS"
				:key="card.identifyingCharacters"
				class="gallery-item"
				@click="onOpenDialog(card)"
			>
				<img :src="card.imageSrc" class="gallery-item-image" />
				<p class="gallery-item-name">{{ index + 1 }}. {{ card.identifyingCharacters.toUpperCase() }}</p>
			</div>
			<dialog ref="karutaCardDialog" aria-labelledby="labeldiv" @click="onCloseDialog($event)">
				<button @click="karutaCardDialog?.close()">| X |</button>
				{{ selectedKarutaCard?.identifyingCharacters }}
				<!-- eslint-disable vue/no-v-html -->
				<p v-html="selectedKarutaCard?.verseFirstPart"></p>
				<p v-html="selectedKarutaCard?.verseSecondPart"></p>
				<!-- eslint-enable vue/no-v-html -->
			</dialog>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { KarutaCard } from '@/interfaces/karuta-card.interface';
import { KARUTA_CARDS } from '../constants/karuta-cards.constants';
import { ref, useTemplateRef } from 'vue';

const karutaCardDialog = useTemplateRef('karutaCardDialog');
const selectedKarutaCard = ref<KarutaCard | null>();

const onOpenDialog = (card: KarutaCard): void => {
	selectedKarutaCard.value = card;
	karutaCardDialog.value?.showModal();
};

// eslint-disable-next-line complexity
const onCloseDialog = (event: MouseEvent): void => {
	if (!karutaCardDialog.value) {
		return;
	}

	const rect = karutaCardDialog.value.getBoundingClientRect();
	const isInDialog =
		rect.top <= event.clientY &&
		event.clientY <= rect.top + rect.height &&
		rect.left <= event.clientX &&
		event.clientX <= rect.left + rect.width;

	if (!isInDialog) {
		selectedKarutaCard.value = null;
		karutaCardDialog.value.close();
	}
};
</script>

<style lang="scss">
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

		.gallery-item-name {
			text-align: center;
		}

		.gallery-item {
			max-width: 160px;
		}

		.gallery-item-image {
			&:hover {
				box-shadow: $box-shadow-card-hover;
				cursor: pointer;
			}
		}
	}
}
</style>
