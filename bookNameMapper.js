const BOOK_NAME = [
  {
    value: "第一冊",
    t_key: "VOLUME_1",
  },
  {
    value: "第二冊",
    t_key: "VOLUME_2",
  },
  {
    value: "第三冊",
    t_key: "VOLUME_3",
  },
  {
    value: "第四冊",
    t_key: "VOLUME_4",
  },
  {
    value: "第五冊",
    t_key: "VOLUME_5",
  },
  {
    value: "第六冊",
    t_key: "VOLUME_6",
  },
  {
    value: "第七冊",
    t_key: "VOLUME_7",
  },
  {
    value: "第八冊",
    t_key: "VOLUME_8",
  },
  {
    value: "第九冊",
    t_key: "VOLUME_9",
  },
  {
    value: "第十冊",
    t_key: "VOLUME_10",
  },
  {
    value: "第十一冊",
    t_key: "VOLUME_11",
  },
  {
    value: "第十二冊",
    t_key: "VOLUME_12",
  },
  {
    value: "第十三冊",
    t_key: "VOLUME_13",
  },
  {
    value: "第十四冊",
    t_key: "VOLUME_14",
  },
  {
    value: "第十五冊",
    t_key: "VOLUME_15",
  },
  {
    value: "第十六冊",
    t_key: "VOLUME_16",
  },
  {
    value: "第十七冊",
    t_key: "VOLUME_17",
  },
  {
    value: "第十八冊",
    t_key: "VOLUME_18",
  },
  {
    value: "第十九冊",
    t_key: "VOLUME_19",
  },
  {
    value: "第二十冊",
    t_key: "VOLUME_20",
  },
  {
    value: "第二十一冊",
    t_key: "VOLUME_21",
  },
  {
    value: "第二十二冊",
    t_key: "VOLUME_22",
  },
  {
    value: "第二十三冊",
    t_key: "VOLUME_23",
  },
  {
    value: "第二十四冊",
    t_key: "VOLUME_24",
  },
  {
    value: "第二十五冊",
    t_key: "VOLUME_25",
  },
  {
    value: "第二十六冊",
    t_key: "VOLUME_26",
  },
  {
    value: "第二十七冊",
    t_key: "VOLUME_27",
  },
  {
    value: "第二十八冊",
    t_key: "VOLUME_28",
  },
  {
    value: "第二十九冊",
    t_key: "VOLUME_29",
  },
  {
    value: "第三十冊",
    t_key: "VOLUME_30",
  },
];

// BOOK NAME = VOLUME
export const bookNameMapper = (value) => {
  const element = BOOK_NAME.find(e => e.value === value);
  if (!element) {
    window.console.warn("Can't find element for backend translation");
  }
  return `commonTranslation.bookName.${element.t_key}`;
};
