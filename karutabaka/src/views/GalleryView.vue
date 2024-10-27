<template>
	<div class="gallery-container">
		<div
			v-for="card of KARUTA_CARDS"
			:key="card.identifyingCharacters"
			class="gallery-item"
			@click="onOpenDialog(card)"
		>
			<img :src="card.imageSrc" class="gallery-item-image" />
			<p class="gallery-item-name">{{ card.identifyingCharacters.toUpperCase() }}</p>
		</div>
		<dialog ref="karutaCardDialog" aria-labelledby="labeldiv" @click="onCloseDialog($event)">
			<button @click="karutaCardDialog?.close()">| X |</button>
			{{ selectedKarutaCard?.identifyingCharacters }}
		</dialog>
	</div>
</template>

<script setup lang="ts">
import type { KarutaCard } from '@/interfaces/karuta-card.interface';
import { KARUTA_CARDS } from '../constants/karuta-cards';
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
