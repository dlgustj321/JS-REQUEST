// axios
/*
* axios 또한 Promise를 리턴하기 때문에 await을 써야한다.
* axios.(get 또는 post) : fetch의 역할(get을 사용할 경우: axios.get/ post을 사용할 경우: axios.post)
* res.옵션(data, status, headers ..) : 옵션을 사용할 수 있다.
* GET 리퀘스트에서 쿼리 파라미터 선언 시 URL 매서드 대신 url 뒤에 ,{ Params }을 대신 사용할 수 있다.
* POST 리퀘스트에서 Data을 전송할 떄 url 뒤에 ,변수명Data 을 대신 사용할 수 있다.
*/

// instance
/*
* instance을 사용하면 axios.get/post => instance.get/post로 변경
* baseURL을 선언했다면 해당하는 부분을 생략할 수 있다. ex) 전체URL:'https://learn.codeit.kr/api/color-surveys
* baseURL:'https://learn.codeit.kr/api'
* instance에서 사용할 URL은 baseURL을 제외한 나머지 '/color-surveys' 가 된다.
*/
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://learn.codeit.kr/api',
  timeout : 3000,
});

export async function getColorSurveys(params = {}) {
  const res = await instance.get('/color-surveys', { 
    params 
  });
  return res.data;
}

// GET 리퀘스트(해당 ID를 출력)
export async function getColorSurvey(id) {
  const res = await instance.get(`/color-surveys/${id}`);
  return res.data;
}

// POST 리퀘스트(원하는 데이터를 전송)
export async function createColorSurveys(surveyData) {
  const res = await instance.post('/color-surveys' ,surveyData);
  return res.data;
}
