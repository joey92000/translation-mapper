const PUBLISHER = [
	{
		code: "A",
		name: "教務",
		t_key: "academicAffairs",
	},
	{
		code: "B",
		name: "部編",
		t_key: "departmentalEditing",
	},
	{
		code: "CW",
		name: "全華",
		t_key: "quanHua",
	},
	{
		code: "G",
		name: "綜合",
		t_key: "comprehensive",
	},
	{
		code: "H",
		name: "翰林",
		t_key: "hanLin",
	},
	{
		code: "HE",
		name: "何嘉仁",
		t_key: "heJiaren",
	},
	{
		code: "K",
		name: "康軒",
		t_key: "kangXuan",
	},
	{
		code: "KX",
		name: "康熹",
		t_key: "kangXi",
	},
	{
		code: "L",
		name: "龍騰",
		t_key: "longTeng",
	},
	{
		code: "N",
		name: "南一",
		t_key: "nanYi",
	},
	{
		code: "S",
		name: "三民",
		t_key: "sanMin",
	},
	{
		code: "T",
		name: "泰宇",
		t_key: "taiYu",
	},
];

export const publisherMapper = (value) => {
	const element = PUBLISHER.find((e) => e.code === value || e.name === value);
	if (!element) {
		return undefined;
	}
	return `commonTranslation.publisher.${element.t_key}`;
};
