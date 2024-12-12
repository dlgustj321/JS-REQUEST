// 함수 안에서 await을 사용할 때는 async 사용한다.
// 개발을 할때는 이렇게 api를 따로 보관하는면서 main에 import해서 사용하는 것이 좋다.

// GET 리퀘스트(쿼리 파라미터에 따라서 출력, limit, offset)
export async function getColorSurveys(Params = {}) {
  const url = new URL("https://learn.codeit.kr/api/color-surveys");
  Object.keys(Params).forEach((key) =>
    url.searchParams.append(key, Params[key])
  );

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

// GET 리퀘스트(해당 ID를 출력)
export async function getColorSurvey(id) {
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);
  const data = await res.json();
  return data;
}

// POST 리퀘스트(원하는 데이터를 전송)
export async function createColorSurveys(surveyData) {
  const res = await fetch("https://learn.codeit.kr/api/color-surveys", {
    method: "POST",
    body: JSON.stringify(surveyData), // 문자열 데이터
    headers: {
      "Content-Type": "application/json", // 타입
    },
  });

  const data = await res.json();
  return data;
}
