// BACK-END TRANSLATION
// THERE IS SOME VALUE ARE COMING FROM BACKEND

// how to get all possible value
// just god know
const BOOK_NAME = [
  {
    value: '首冊',
    code: 'B00',
    t_key: 'VOLUME_0',
  },
  {
    value: '第一冊',
    code: 'B01',
    t_key: 'VOLUME_1',
  },
  {
    value: '第二冊',
    code: 'B02',
    t_key: 'VOLUME_2',
  },
  {
    value: '第三冊',
    code: 'B03',
    t_key: 'VOLUME_3',
  },
  {
    value: '第四冊',
    code: 'B04',
    t_key: 'VOLUME_4',
  },
  {
    value: '第五冊',
    code: 'B05',
    t_key: 'VOLUME_5',
  },
  {
    value: '第六冊',
    code: 'B06',
    t_key: 'VOLUME_6',
  },
  {
    value: '第七冊',
    code: 'B07',
    t_key: 'VOLUME_7',
  },
  {
    value: '第八冊',
    code: 'B08',
    t_key: 'VOLUME_8',
  },
  {
    value: '第九冊',
    code: 'B09',
    t_key: 'VOLUME_9',
  },
  {
    value: '第十冊',
    code: 'B10',
    t_key: 'VOLUME_10',
  },
  {
    value: '第十一冊',
    code: 'B11',
    t_key: 'VOLUME_11',
  },
  {
    value: '第十二冊',
    code: 'B12',
    t_key: 'VOLUME_12',
  },
  {
    value: '第十三冊',
    t_key: 'VOLUME_13',
  },
  {
    value: '第十四冊',
    t_key: 'VOLUME_14',
  },
  {
    value: '第十五冊',
    t_key: 'VOLUME_15',
  },
  {
    code: 'B97',
    value: '歷屆大考',
    t_key: 'previousMajorExams',
  },
  {
    code: 'B98',
    value: '總複習',
    t_key: 'generalReview',
  },
  {
    code: 'B99',
    value: '會考試題',
    t_key: 'VOLUME_30',
  },
];

const BOOK_NAME_H = [
  {
    value: '數學(一)',
    code: 'B01',
    t_key: 'HMA_VOLUME_1',
  },
  {
    value: '數學(二)',
    code: 'B02',
    t_key: 'HMA_VOLUME_2',
  },
  {
    value: '數學(三)A版',
    code: 'B03',
    t_key: 'HMA_VOLUME_3',
  },
  {
    value: '數學(三)B版',
    code: 'B04',
    t_key: 'HMA_VOLUME_4',
  },
  {
    value: '數學(四)A版',
    code: 'B05',
    t_key: 'HMA_VOLUME_5',
  },
  {
    value: '數學(四)B版',
    code: 'B06',
    t_key: 'HMA_VOLUME_6',
  },
  {
    value: '選修數學甲(上)',
    code: 'B07',
    t_key: 'HMA_VOLUME_7',
  },
  {
    value: '選修數學乙(上)',
    code: 'B08',
    t_key: 'HMA_VOLUME_8',
  },
  {
    value: '選修數學甲(下)',
    code: 'B09',
    t_key: 'HMA_VOLUME_9',
  },
  {
    value: '選修數學乙(下)',
    code: 'B10',
    t_key: 'HMA_VOLUME_10',
  },
  {
    code: 'B97',
    value: '歷屆大考',
    t_key: 'previousMajorExams',
  },
  {
    code: 'B98',
    value: '總複習',
    t_key: 'generalReview',
  }
];

// BOOK NAME = VOLUME
export const bookNameMapper = (value) => {
  let element = BOOK_NAME.find((e) => e.value === value || e.code === value || e.value === '第二' + value);
  if (!element) {
    element = BOOK_NAME_H.find((e) => e.value === value || e.code === value || e.value === '第二' + value);
  }
  if (!element) {
    window.console.warn('Can\'t find element for backend translation', { value });
    return null;
  }
  return `commonTranslation.bookName.${element.t_key}`;
};
