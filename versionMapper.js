// input E, J, H -> translation key
const VERSION = [
	{
		label: "南一版",
		value: "南一版",
		t_key: "nanyiEdition",
	},
	{
		label: "康軒版",
		value: "康軒版",
		t_key: "kangXuanEdition",
	},
	{
		label: "翰林版",
		value: "翰林版",
		t_key: "hanlinEdition",
	},
];

export const versionMapper = (value) => {
	const edu = VERSION.find((e) => e.value === value || e.value.substring(0, 2) === value);
	if (!edu) {
		return undefined;
	}
	return `commonTranslation.version.${edu.t_key}`;
};
