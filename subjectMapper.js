export const subjectMapper = (value) => {
  const element = SUBJECT.find(e => e.code === value || e.value === value);
  if (!element) {
    return undefined;
  }
  return `constants.subject.${element.t_key}`;
};

export const SUBJECT = [
  {
    code: "BI",
    value: "生物",
    t_t_key: "biology",
    t_key: "biology",
  },
  {
    code: "CE",
    value: "化學",
    t_key: "chemistry",
  },
  {
    code: "CS",
    value: "公民與社會",
    t_key: "civicsAndSociety",
  },
  {
    code: "CT",
    value: "公民",
    t_key: "civics",
  },
  {
    code: "EA",
    value: "地球科學",
    t_key: "earthScience",
  },
  {
    code: "EN",
    value: "英語",
    t_key: "english",
  },
  {
    code: "GE",
    value: "地理",
    t_key: "geography",
  },
  {
    code: "HI",
    value: "歷史",
    t_key: "history",
  },
  {
    code: "MA",
    value: "數學",
    t_key: "mathematics",
  },
  {
    code: "PC",
    value: "國文",
    t_key: "chinese",
  },
  {
    code: "PH",
    value: "物理",
    t_key: "physics",
  },
  {
    code: "PY",
    value: "理化",
    t_key: "physicalChemistry",
  },
  {
    code: "EW",
    value: "英文",
    t_key: "englishLanguage",
  },
];