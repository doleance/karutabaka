<script setup lang="ts">
import { usePoemPlayer } from '@/composables/poem-player.composable';
import {
	DEFAULT_FILE_PATH_SCHEME,
	TIME_AFTER_FIRST_PART,
	TIME_AFTER_SECOND_PART,
} from '@/constants/reciter.constants';
import { PoemAudio } from '@/interfaces/poem-audio.interface';
import { shuffleArray } from '@/utils/array.utils';
import { onMounted, reactive, useTemplateRef } from 'vue';

const getJoka = (): string => {
	return DEFAULT_FILE_PATH_SCHEME.replace('${0}', '000').replace('${1}', '2');
};

const audioElement = useTemplateRef('audioElement');
const playlistOrder = Array.from({ length: 100 }, (_, i) => i + 1);
const currentlyPlayed = reactive<PoemAudio>({
	arrayIndex: -1,
	partIndex: 2,
	filePath: getJoka(),
});
const {isPaused, loadPoem, playPoem, pausePoem} = usePoemPlayer(audioElement, currentlyPlayed, playlistOrder);

const initPlaylist = (): void => {
	currentlyPlayed.arrayIndex = -1;
	currentlyPlayed.partIndex = 2;
	currentlyPlayed.filePath = getJoka();
	if (audioElement.value) {
	audioElement.value!.load();
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
	loadPoem();
	setTimeout(() => {
		playPoem();
	}, timeBetweenSongs);
};

const onTogglePlay = (): void => {
	if (isPaused.value) {
		playPoem();
		return;
	}

	pausePoem();
	if (currentlyPlayed.partIndex === 1) {
		currentlyPlayed.partIndex = 2;
		loadPoem();
	} else {
		audioElement.value!.currentTime = 0;
	}
};

const onResetPlaylist = (): void => {
	pausePoem();
	initPlaylist();
};

onMounted(() => {
	initPlaylist();
});
</script>

<template>
	<button @click="onTogglePlay()">
		<span class="pi" :class="{ 'pi-caret-right': isPaused, 'pi-pause': !isPaused }"></span>
	</button>
	<p>Currently playing: {{ Math.max(currentlyPlayed.arrayIndex + 1, 0) }} / 100</p>
	<button @click="onResetPlaylist()"><span class="pi pi-eject"></span></button>
	<audio ref="audioElement" @ended="continuePlaying">
		<source :src="currentlyPlayed.filePath" type="audio/ogg" />
		Your browser does not support the audio element. ばか！
	</audio>
	<p>Song: {{ currentlyPlayed.filePath }}</p>
</template>

<style scoped></style>
