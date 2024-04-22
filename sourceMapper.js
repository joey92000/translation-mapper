const SUB_SOURCE = [
	{
		code: "NS040",
		name: "番茄報報",
		t_key: "tomatoNewsletter",
	},
	{
		code: "NS041",
		name: "分科測驗試題",
		t_key: "subjectTestQuestions",
	},
	{
		code: "NS042",
		name: "超越盃試題",
		t_key: "transcendCupQuestions",
	},
	{
		code: "NS043",
		name: "家教試聽後測",
		t_key: "tutoringListeningPosttest",
	},
	{
		code: "NS044",
		name: "南一精選",
		t_key: "nanYiSelection",
	},
	{
		code: "NS045",
		name: "家教試聽前測",
		t_key: "tutoringListeningPretest",
	},
	{
		code: "NS046",
		name: "活動紀錄簿B",
		t_key: "activityRecordBookB",
	},
	{
		code: "NS047",
		name: "TEST",
		t_key: "test",
	},
	{
		code: "NS020",
		name: "會考模擬題本",
		t_key: "jointExamSimulatedQuestionBook",
	},
	{
		code: "NS037",
		name: "課本習題",
		t_key: "textbookExercises",
	},
	{
		code: "NS035",
		name: "語文習作",
		t_key: "languageExercises",
	},
	{
		code: "NS003",
		name: "習作",
		t_key: "exercise",
	},
	{
		code: "NS004",
		name: "習作類題",
		t_key: "exerciseTypeQuestions",
	},
	{
		code: "NS021",
		name: "最新試題",
		t_key: "latestQuestions",
	},
	{
		code: "NS032",
		name: "學習講義",
		t_key: "learningLectureNotes",
	},
	{
		code: "NS019",
		name: "精選試題",
		t_key: "selectedQuestions",
	},
	{
		code: "NS016",
		name: "輔助教材",
		t_key: "auxiliaryTeachingMaterials",
	},
	{
		code: "NS026",
		name: "十分鐘大作戰",
		t_key: "tenMinuteBattle",
	},
	{
		code: "NS008",
		name: "國際試題",
		t_key: "internationalExamQuestions",
	},
	{
		code: "NS006",
		name: "TASA類題",
		t_key: "tasaTypeQuestions",
	},
	{
		code: "NS013",
		name: "指定考試類題",
		t_key: "specifiedExamTypeQuestions",
	},
	{
		code: "NS022",
		name: "補充教材",
		t_key: "supplementaryTeachingMaterials",
	},
	{
		code: "NS031",
		name: "延伸讀本",
		t_key: "extendedReading",
	},
	{
		code: "NS018",
		name: "補救教學",
		t_key: "remedialTeaching",
	},
	{
		code: "NS001",
		name: "課本",
		t_key: "textbook",
	},
	{
		code: "NS036",
		name: "中華文化基本教材習作",
		t_key: "chineseCulturalBasicTextbookExercises",
	},
	{
		code: "NS014",
		name: "素養類題",
		t_key: "literacyTypeQuestions",
	},
	{
		code: "NS010",
		name: "學測試題",
		t_key: "academicExamQuestions",
	},
	{
		code: "NS017",
		name: "補充試題",
		t_key: "supplementaryQuestions",
	},
	{
		code: "NS025",
		name: "計算機試題",
		t_key: "computerQuestions",
	},
	{
		code: "NS033",
		name: "EZ講義",
		t_key: "ezLectureNotes",
	},
	{
		code: "NS002",
		name: "課本試題",
		t_key: "textbookQuestions",
	},
	{
		code: "NS009",
		name: "歷屆試題",
		t_key: "previousTestQuestions",
	},
	{
		code: "NS011",
		name: "指考試題",
		t_key: "collegeEntranceExamQuestions",
	},
	{
		code: "NS030",
		name: "實習手冊",
		t_key: "internshipManual",
	},
	{
		code: "NS007",
		name: "各校試題",
		t_key: "schoolQuestions",
	},
	{
		code: "NS012",
		name: "學測類題",
		t_key: "academicAbilityTestTypeQuestions",
	},
	{
		code: "NS034",
		name: "素養題本",
		t_key: "literacyPrimer",
	},
	{
		code: "NS024",
		name: "混合題組",
		t_key: "mixedQuestionGroup",
	},
	{
		code: "NS029",
		name: "探討活動紀錄簿",
		t_key: "discussionActivityRecordBook",
	},
	{
		code: "NS039",
		name: "總複習",
		t_key: "generalReview",
	},
	{
		code: "NS028",
		name: "實驗活動手冊",
		t_key: "experimentalActivityManual",
	},
	{
		code: "NS015",
		name: "素養閱讀綜合試題",
		t_key: "literacyReadingIntegratedQuestions",
	},
	{
		code: "NS023",
		name: "跨科整合試題",
		t_key: "crossDisciplinaryIntegratedQuestions",
	},
	{
		code: "NS038",
		name: "教師手冊",
		t_key: "teacherHandbook",
	},
	{
		code: "NS027",
		name: "每日數學",
		t_key: "dailyMathematics",
	},
	{
		code: "NS005",
		name: "紀錄簿習題",
		t_key: "recordBookExercises",
	},
];

export const sourceMapper = (value) => {
	const element = SUB_SOURCE.find((e) => e.name === value);
	if (!element) {
		return undefined;
	}
	return `commonTranslation.source.${element.t_key}`;
};
