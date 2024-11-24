export const DEFAULT_FILE_PATH_SCHEME = '/assets/audio/hiromoto/hiromoto_${0}_${1}.ogg';
export const TIME_AFTER_FIRST_PART = 3000;
export const TIME_AFTER_SECOND_PART = 3000;

export const getJoka = (): string => {
	return DEFAULT_FILE_PATH_SCHEME.replace('${0}', '000').replace('${1}', '2');
};
