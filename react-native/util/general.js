export const firstLetterUppercase = (string) => {
  // assume that the string might be in style of the camelCase
  const [first, last] = string.split(/(?=[A-Z])/);
  // if the last exist, there are 2 words
  if (last) {
    return (
      first.charAt(0).toUpperCase() + first.slice(1) + " " + last.toLowerCase()
    );
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};
