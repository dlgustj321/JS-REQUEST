import { getColorSurveys, getColorSurvey, createColorSurveys } from "./api.js";

/* 데이터 전송
const surveyData = {
  mbti: 'ENFJ',
  colorCode: '#ABCD00',
  password: '0000'
};

const data = await createColorSurveys(surveyData);
console.log(data);
*/

/*
const data = await getColorSurvey(10);
console.log(data);
*/

/* 쿼리에 따라 값을 변경*/
try {
const data = await getColorSurveys({mbti : 'ENFJ' });
console.log(data);
} catch(error) {
  console.log('ERROR!');
  console.log(error.message);
} finally {
  console.log('Finished!');
}

/*
다양한 GET 리퀘스트 보내기(데이터 불러오기)
1. URL 객체를 사용
2. 쿼리 파라미터 : mbti, limit(몇개를 출력할 것인지), offset(몇개를 건너뛸 것인지)
*/

/*
const url = new URL('https://learn.codeit.kr/api/color-surveys');
url.searchParams.append('offset',10);
url.searchParams.append('limit', 10);

const res = await fetch(url);
const data = await res.json();
console.log(data);
*/

/*
3. fetch 안에 있는 url에 직접 쿼리를 입력

const res = await fetch('https://learn.codeit.kr/api/color-surveys/?offset=10&limit=10');
const data = await res.json();
console.log(data);
*/

/*
// result에 data 값을 햘당
const { results } = data;
// data 값이 있는 results을 survey에 햘당
const survey = results[0];
// 다시 survey을 각 변수에 햘당
const { id, mbti, colorCode, createdAt, updatedAt } = survey;
// 출력
console.log(id, mbti, colorCode, createdAt, updatedAt);
*/