export const cognitiveMapper = (value) => {
  const element = COGNITIVE.find(e => e.code === value || e.value === value);
  if (!element) {
    return undefined;
  }
  return `commonTranslation.cognitive.${element.t_key}`;
};

export const COGNITIVE = [
  {
    value: "記憶",
    code: "MEMORY",
    t_key: "__memory",
  },
  {
    value: "了解",
    code: "REALIZE",
    t_key: "__understanding",
  },
  {
    value: "應用",
    code: "USE",
    t_key: "__application",
  },
  {
    value: "分析",
    code: "ANALYZE",
    t_key: "__analysis",
  },
  {
    value: "應用",
    code: "USE",
    t_key: "__use",
  },
];