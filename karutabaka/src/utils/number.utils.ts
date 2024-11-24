export const padNumber = (numberToFormat: number, digits = 1): string => {
	return numberToFormat.toString().padStart(digits, '0')
};