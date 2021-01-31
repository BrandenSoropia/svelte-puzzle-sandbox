export const isCorrectCombination = (given, correctCombination) => {
  return !given.some((value, index) => correctCombination[index] !== value);
};
