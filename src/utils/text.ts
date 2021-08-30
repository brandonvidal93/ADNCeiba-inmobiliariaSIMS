export const capitalize = (text: string): string =>
  text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const textRegex = /^[a-zA-Z ]*$/;
// RegEx for validating text input numbers and minumum number 1
export const numberRegex = /^[0-9]*$/;
