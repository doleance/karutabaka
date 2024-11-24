<script setup lang="ts">
import {
	DEFAULT_FILE_PATH_SCHEME,
	getJoka,
	TIME_AFTER_FIRST_PART,
	TIME_AFTER_SECOND_PART,
} from '@/constants/reciter.constants';
import { shuffleArray } from '@/utils/array.utils';
import { formatNumberToString } from '@/utils/number.utils';
import { onMounted, reactive, ref, useTemplateRef } from 'vue';

const audioElement = useTemplateRef('audioElement');
const playlistOrder = Array.from({ length: 100 }, (_, i) => i + 1);
const isPaused = ref(true);
const currentlyPlayed = reactive<{ arrayIndex: number; partIndex: number; filePath: string }>({
	arrayIndex: -1,
	partIndex: 2,
	filePath: getJoka(),
});

onMounted(() => {
	initPlaylist();
});

const initPlaylist = (): void => {
	currentlyPlayed.arrayIndex = -1;
	currentlyPlayed.partIndex = 2;
	currentlyPlayed.filePath = getJoka();
	if (audioElement.value) {
		audioElement.value.currentTime = 0;
	}
	shuffleArray(playlistOrder);
};

const continuePlaying = (): void => {
	if (currentlyPlayed.arrayIndex === 99) {
		initPlaylist();
		return;
	}
	let timeBetweenSongs;
	if (currentlyPlayed.partIndex === 1) {
		timeBetweenSongs = TIME_AFTER_FIRST_PART;
		currentlyPlayed.partIndex = 2;
	} else {
		timeBetweenSongs = TIME_AFTER_SECOND_PART;
		currentlyPlayed.arrayIndex = currentlyPlayed.arrayIndex + 1;
		currentlyPlayed.partIndex = 1;
	}
	setNewSong();
	setTimeout(() => {
		audioElement.value!.play();
	}, timeBetweenSongs);
};

const generateFileName = (arrayIndex: number, partIndex: number): string => {
	return DEFAULT_FILE_PATH_SCHEME.replace('${0}', formatNumberToString(playlistOrder[arrayIndex], 3)).replace(
		'${1}',
		partIndex.toString(),
	);
};

const setNewSong = (): void => {
	currentlyPlayed.filePath = generateFileName(currentlyPlayed.arrayIndex, currentlyPlayed.partIndex);
	audioElement.value!.load();
	audioElement.value!.currentTime = 0;
};

const updatePausedState = () => {
	isPaused.value = audioElement.value?.paused ?? true;
};

// eslint-disable-next-line complexity
const onTogglePlay = (): void => {
	if (audioElement.value?.paused) {
		audioElement.value.play();
	} else {
		audioElement.value?.pause();
		if (currentlyPlayed.partIndex === 1) {
			currentlyPlayed.partIndex = 2;
			setNewSong();
		} else {
			audioElement.value!.currentTime = 0;
		}
	}
};

const onResetPlaylist = (): void => {
	if (!audioElement.value?.paused) {
		audioElement.value?.pause();
	}
	initPlaylist();
};
</script>

<template>
	<button @click="onTogglePlay()">
		<span class="pi" :class="{ 'pi-caret-right': isPaused, 'pi-pause': !isPaused }"></span>
	</button>
	<p>Currently playing: {{ Math.max(currentlyPlayed.arrayIndex, 0) }} / 100</p>
	<button @click="onResetPlaylist()"><span class="pi pi-eject"></span></button>
	<audio ref="audioElement" @play="updatePausedState" @pause="updatePausedState" @ended="continuePlaying">
		<source :src="currentlyPlayed.filePath" type="audio/ogg" />
		Your browser does not support the audio element.
	</audio>
	<p>Song: {{ currentlyPlayed.filePath }}</p>
</template>

<style scoped></style>
