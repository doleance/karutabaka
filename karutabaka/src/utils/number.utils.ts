export const formatNumberToString = (numberToFormat: number, digits = 1, useGrouping = false): string => {
	return numberToFormat.toLocaleString('en-US', { minimumIntegerDigits: digits, useGrouping });
};
