import { DEFAULT_FILE_PATH_SCHEME } from "@/constants/reciter.constants";
import { PoemAudio } from "@/interfaces/poem-audio.interface";
import { padNumber } from "@/utils/number.utils";
import { Reactive, ref, ShallowRef } from "vue";

const DEFAULT_POEM_ORDER =Array.from({ length: 100 }, (_, i) => i + 1);


export const usePoemPlayer = (audioElement: Readonly<ShallowRef<HTMLAudioElement | null>>, currentPoem: Reactive<PoemAudio>, poems = DEFAULT_POEM_ORDER) => {
    const isPaused = ref(true);
    

    const setPausedState = (value = true) => {
        isPaused.value = value;
    };

    const loadPoem = (): void => {
	currentPoem.filePath = generateFileName(currentPoem.arrayIndex, currentPoem.partIndex);
	audioElement.value!.load();
	audioElement.value!.currentTime = 0;
    }
    
    const playPoem = (): void => {
        audioElement.value!.play();
	    setPausedState(false);
    }
    const pausePoem = (): void => {
        audioElement.value!.pause();
	    setPausedState(true);
    }

    const generateFileName = (arrayIndex: number, partIndex: number): string => {
        return DEFAULT_FILE_PATH_SCHEME.replace('${0}', padNumber(poems[arrayIndex], 3)).replace(
            '${1}',
            partIndex.toString(),
        );
    };

    return {isPaused, loadPoem, playPoem, pausePoem};
}