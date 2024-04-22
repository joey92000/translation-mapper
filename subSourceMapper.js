const SUB_SOURCE = [
	{
		code: "131",
		name: "指考試題",
		t_key: "collegeEntranceExamQuestions",
	},
	{
		code: "108",
		name: "課本隨堂練習",
		t_key: "textbookClassroomPractice",
	},
	{
		code: "156",
		name: "實驗活動手冊",
		t_key: "experimentalActivityManual",
	},
	{
		code: "168",
		name: "番茄報報",
		t_key: "tomatoNewsletter",
	},
	{
		code: "172",
		name: "分科測驗試題",
		t_key: "subjectTestQuestions",
	},
	{
		code: "999",
		name: "超越盃試題",
		t_key: "transcendCupQuestions",
	},
	{
		code: "998",
		name: "家教試聽後測",
		t_key: "tutoringListeningPosttest",
	},
	{
		code: "128",
		name: "南一精選",
		t_key: "nanYiSelection",
	},
	{
		code: "997",
		name: "家教試聽前測",
		t_key: "tutoringListeningPretest",
	},
	{
		code: "900",
		name: "歷屆試題",
		t_key: "pastYearsQuestions",
	},
	{
		code: "173",
		name: "活動紀錄簿B",
		t_key: "activityRecordBookB",
	},
	{
		code: "142",
		name: "素養試題",
		t_key: "literacyQuestions",
	},
	{
		code: "125",
		name: "指考模擬題",
		t_key: "collegeEntranceExamSimulatedQuestions",
	},
	{
		code: "147",
		name: "計算機試題",
		t_key: "computerQuestions",
	},
	{
		code: "158",
		name: "實習手冊",
		t_key: "internshipManual",
	},
	{
		code: "153",
		name: "習作",
		t_key: "exercise",
	},
	{
		code: "121",
		name: "精選試題",
		t_key: "selectedQuestions",
	},
	{
		code: "134",
		name: "康軒版新寫題",
		t_key: "kangXuanNewQuestions",
	},
	{
		code: "138",
		name: "翰林習作",
		t_key: "hanLinExercise",
	},
	{
		code: "111",
		name: "課本類題",
		t_key: "textbookTypeQuestions",
	},
	{
		code: "132",
		name: "康軒課本",
		t_key: "kangXuanTextbook",
	},
	{
		code: "105",
		name: "課本自我評量",
		t_key: "textbookSelfAssessment",
	},
	{
		code: "169",
		name: "延伸讀本",
		t_key: "extendedReading",
	},
	{
		code: "109",
		name: "教師手冊延伸題",
		t_key: "teacherHandbookExtendedQuestions",
	},
	{
		code: "123",
		name: "輔材",
		t_key: "auxiliaryMaterials",
	},
	{
		code: "101",
		name: "課本",
		t_key: "textbook",
	},
	{
		code: "129",
		name: "會考模擬題",
		t_key: "jointExamSimulatedQuestions",
	},
	{
		code: "107",
		name: "課本練習做做看",
		t_key: "textbookPracticeTryItOut",
	},
	{
		code: "135",
		name: "康軒仿寫題",
		t_key: "kangXuanImitationQuestions",
	},
	{
		code: "170",
		name: "語文習作",
		t_key: "languageExercises",
	},
	{
		code: "150",
		name: "學習講義",
		t_key: "learningLectureNotes",
	},
	{
		code: "122",
		name: "配套",
		t_key: "matching",
	},
	{
		code: "115",
		name: "各校試題",
		t_key: "schoolQuestions",
	},
	{
		code: "171",
		name: "中華文化基本教材習作",
		t_key: "chineseCulturalBasicTextbookExercises",
	},
	{
		code: "139",
		name: "翰林版新寫題",
		t_key: "hanlinNewQuestions",
	},
	{
		code: "126",
		name: "特招試題",
		t_key: "specialAdmissionQuestions",
	},
	{
		code: "106",
		name: "課本例題",
		t_key: "textbookExamples",
	},
	{
		code: "154",
		name: "十分鐘大作戰",
		t_key: "tenMinuteBattle",
	},
	{
		code: "146",
		name: "混合題組",
		t_key: "mixedQuestionGroup",
	},
	{
		code: "145",
		name: "跨科整合試題",
		t_key: "crossDisciplinaryIntegratedQuestions",
	},
	{
		code: "104",
		name: "課本小試身手",
		t_key: "textbookTestSkills",
	},
	{
		code: "137",
		name: "翰林課本",
		t_key: "hanlinTextbook",
	},
	{
		code: "141",
		name: "適翰版輔材",
		t_key: "appropriateHanlinSupplementaryMaterials",
	},
	{
		code: "127",
		name: "會考試題",
		t_key: "jointExaminationQuestions",
	},
	{
		code: "130",
		name: "學測試題",
		t_key: "academicAbilityTestQuestions",
	},
	{
		code: "136",
		name: "適康版輔材",
		t_key: "appropriateKangVersionSupplementaryMaterials",
	},
	{
		code: "116",
		name: "國際試題",
		t_key: "internationalQuestions",
	},
	{
		code: "110",
		name: "教師手冊",
		t_key: "teacherManual",
	},
	{
		code: "157",
		name: "探討活動紀錄簿",
		t_key: "explorationActivityRecordBook",
	},
	{
		code: "103",
		name: "紀錄簿習題",
		t_key: "recordBookExercises",
	},
	{
		code: "112",
		name: "TASA類題",
		t_key: "tasaTypeQuestions",
	},
	{
		code: "155",
		name: "每日數學",
		t_key: "dailyMath",
	},
	{
		code: "133",
		name: "康軒習作",
		t_key: "kangXuanExercises",
	},
	{
		code: "152",
		name: "素養題本",
		t_key: "literacyPrimer",
	},
	{
		code: "118",
		name: "習作類題",
		t_key: "exerciseTypeQuestions",
	},
	{
		code: "151",
		name: "EZ講義",
		t_key: "ezLectureNotes",
	},
	{
		code: "102",
		name: "習作",
		t_key: "exercises",
	},
	{
		code: "144",
		name: "素養閱讀綜合試題",
		t_key: "literacyReadingIntegratedQuestions",
	},
	{
		code: "117",
		name: "基測試題",
		t_key: "basicCompetenceTestQuestions",
	},
	{
		code: "119",
		name: "補充試題",
		t_key: "supplementaryQuestions",
	},
	{
		code: "159",
		name: "課本習題",
		t_key: "textbookExercises",
	},
	{
		code: "120",
		name: "補充試題—補救教學",
		t_key: "supplementaryQuestionsRemedialTeaching",
	},
	{
		code: "143",
		name: "素養類題",
		t_key: "literacyTypeQuestions",
	},
	{
		code: "149",
		name: "課本試題",
		t_key: "textbookQuestions",
	},
	{
		code: "124",
		name: "學測模擬題",
		t_key: "academicAbilityTestSimulatedQuestions",
	},
	{
		code: "140",
		name: "翰林仿寫題",
		t_key: "hanlinImitationQuestions",
	},
];

export const subSourceMapper = (value) => {
	const element = SUB_SOURCE.find((e) => e.name === value);
	if (!element) {
		return undefined;
	}
	return `commonTranslation.subSource.${element.t_key}`;
};
