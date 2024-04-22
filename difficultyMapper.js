const DIFFICULTY = [
	{
		value: "BEGIN",
		name: "易",
		t_key: "begin",
	},

	{
		value: "BASIC",
		name: "中偏易",
		t_key: "easy",
	},
	{
		value: "INTERMEDIATE",
		name: "中",
		t_key: "middle",
	},
	{
		value: "ADVANCED",
		name: "中偏難",
		t_key: "advanced",
	},
	{
		value: "EXPERT",
		name: "難",
		t_key: "expert",
	},
];

export const difficultyMapper = (value) => {
  const difficulty = DIFFICULTY.find(e => e.value === value || e.name === value);
  if (!difficulty) {
    return undefined;
  }
  return `commonTranslation.difficulty.${difficulty.t_key}`;
};
