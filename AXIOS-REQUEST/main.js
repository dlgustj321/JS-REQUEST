import { getColorSurveys, getColorSurvey, createColorSurveys } from "./axiosApi.js";

console.log('GET /color-surveys');
try {
const data = await getColorSurveys({ offset: 10, limit: 5});
console.log(data);
} catch(e) {
  console.log('오류가 발생했습니다 :');
  console.log(e.response.status);
  console.log(e.response.data);
}

console.log('GET /color-surveys/:id');
//axios 오류 처리
try {
const survey = await getColorSurvey(20);
console.log(survey);
} catch (e) {
  console.log('오류가 발생했습니다:');
  console.log(e.response.status);
  console.log(e.response.data);
}
console.log('POST /color-surveys');
const surveyData = {
  mbti: 'ISFP',
  colorCode: '#123456',
  password: '0000',
};
try{
const newColorSurvey = await createColorSurveys(surveyData);
console.log(newColorSurvey);
} catch(e) {
  if (e.response) {
    console.log(e.response.status);
    console.log(e.response.data);
  }else {
  // 올바른 URL 통해서 요청했는지 확인
  console.log('리퀘스트 오류가 발생했습니다:');
  }
}