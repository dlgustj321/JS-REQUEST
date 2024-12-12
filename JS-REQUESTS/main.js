/*
POST 리퀘스트 보내보기(데이터 추가하기)
*/

//추가할 데이터
const surveyData = {
  mbti: 'ENFP',
  colorCode: '#ABCDEF',
  password: '0000',
};
// 데이터 전송(POST) 
const res = await fetch('https://learn.codeit.kr/api/color-surveys', {
  method: 'POST',
  body: JSON.stringify(surveyData), // 문자열 데이터
  headers: {
    'Content-Type' : 'application/json', // 타입
  },
});

const data = await res.json();
console.log(data);