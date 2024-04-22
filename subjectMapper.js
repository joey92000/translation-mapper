export const subjectMapper = (value) => {
  const element = SUBJECT.find(e => e.code === value || e.value === value);
  if (!element) {
    return undefined;
  }
  return `commonTranslation.subject.${element.t_key}`;
};

const SUBJECT = [
	{
		type: "SUBJECT",
		code: "BI",
		name: "生物",
		t_key: "biology",
	},
	{
		type: "SUBJECT",
		code: "CE",
		name: "化學",
		t_key: "chemistry",
	},
	{
		type: "SUBJECT",
		code: "CH",
		name: "國語",
		t_key: "chinese",
	},
	{
		type: "SUBJECT",
		code: "CN",
		name: "華語",
		t_key: "mandarin",
	},
	{
		type: "SUBJECT",
		code: "CO",
		name: "綜合活動",
		t_key: "comprehensiveActivities",
	},
	{
		type: "SUBJECT",
		code: "CS",
		name: "公民與社會",
		t_key: "civicsAndSociety",
	},
	{
		type: "SUBJECT",
		code: "CT",
		name: "公民",
		t_key: "civics",
	},
	{
		type: "SUBJECT",
		code: "EA",
		name: "地球科學",
		t_key: "earthScience",
	},
	{
		type: "SUBJECT",
		code: "EN",
		name: "英語",
		t_key: "english",
	},
	{
		type: "SUBJECT",
		code: "EW",
		name: "英文",
		t_key: "englishLanguage",
	},
	{
		type: "SUBJECT",
		code: "GE",
		name: "地理",
		t_key: "geography",
	},
	{
		type: "SUBJECT",
		code: "HI",
		name: "歷史",
		t_key: "history",
	},
	{
		type: "SUBJECT",
		code: "IT",
		name: "資訊科技",
		t_key: "informationTechnology",
	},
	{
		type: "SUBJECT",
		code: "LI",
		name: "生活",
		t_key: "life",
	},
	{
		type: "SUBJECT",
		code: "LT",
		name: "生活科技",
		t_key: "lifeTechnology",
	},
	{
		type: "SUBJECT",
		code: "MA",
		name: "數學",
		t_key: "mathematics",
	},
	{
		type: "SUBJECT",
		code: "NA",
		name: "自然與生活科技",
		t_key: "natureAndLifeScience",
	},
	{
		type: "SUBJECT",
		code: "NT",
		name: "自然",
		t_key: "nature",
	},
	{
		type: "SUBJECT",
		code: "PC",
		name: "國文",
		t_key: "chineseLanguage",
	},
	{
		type: "SUBJECT",
		code: "PE",
		name: "健康與體育",
		t_key: "physicalEducationAndHealth",
	},
	{
		type: "SUBJECT",
		code: "PH",
		name: "物理",
		t_key: "physics",
	},
	{
		type: "SUBJECT",
		code: "PY",
		name: "理化",
		t_key: "physicalChemistry",
	},
	{
		type: "SUBJECT",
		code: "SO",
		name: "社會",
		t_key: "socialStudies",
	},
	{
		type: "SUBJECT",
		code: "TC",
		name: "科技",
		t_key: "technology",
	},
];