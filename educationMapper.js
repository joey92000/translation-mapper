const EDU = [
  {
    value: "E",
    name: "國小",
    t_key: "__elementarySchool",
  },
  {
    value: "J",
    name: "國中",
    t_key: "__juniorHighSchool",
  },
  {
    value: "H",
    name: "高中",
    t_key: "__highSchool",
  },

];
export const educationMapper = (value) => {
  let edu = EDU.find(e => e.value === value || e.name === value);

  if (!edu) {
    return undefined;
  }
  return `commonTranslation.edu.${edu.t_key}`;
};