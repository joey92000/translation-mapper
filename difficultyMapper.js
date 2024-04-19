// input E, J, H -> translation key
const DIFFICULTY = [
  {
    value: "BEGIN",
    name: "易",
    t_key: "easy",
  },
  {
    value: "INTERMEDIATE",
    name: "中",
    t_key: "middle",
  },
  {
    value: "EXPERT",
    name: "難",
    t_key: "hard",
  },
];
export const difficultyMapper = (value) => {
  const difficulty = DIFFICULTY.find(e => e.value === value || e.name === value);
  if (!difficulty) {
    return undefined;
  }
  return `constants.question.difficulty.${difficulty.t_key}`;
};
