// 함수 안에서 await을 사용할 때는 async 사용한다.
// 개발을 할때는 이렇게 api를 따로 보관하는면서 main에 import해서 사용하는 것이 좋다.

// GET 리퀘스트(쿼리 파라미터에 따라서 출력, limit, offset)
export async function getColorSurveys(Params = {}) {
  const url = new URL("https://learn.codeit.kr/api/color-surveys");
  Object.keys(Params).forEach((key) =>
    url.searchParams.append(key, Params[key])
  );
    /*
     * promise가 fulfilled 상태가 안된다면 res 값이 없고 없으면 error가 뜨게 설정
     * 코드에 오류가 발생을 해도 promise 값이 fulfilled 상태가 되면 오류가 발생하지 않기 때문에
     * 직접 오류처리를 해주는 것이 좋다.
     */ 
  const res = await fetch(url);
  if (!res.ok) {
     throw new Error('데이터를 불러오는데 실패했습니다!');
  } else {
    console.log('데이터를 불러오는데 성공했습니다!');
  }
  const data = await res.json();
  console.log(data);
}

// GET 리퀘스트(해당 ID를 출력)
export async function getColorSurvey(id) {
  const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);
  if(!res.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  } else {
    console.log('데이터를 불러오는데 성공했습니다.')
  }
  const data = await res.json();
  return data;
}

// POST 리퀘스트(원하는 데이터를 전송)
export async function createColorSurvey(surveyData) {
  const res = await fetch("https://learn.codeit.kr/api/color-surveys", {
    method: "POST",
    body: JSON.stringify(surveyData), // 문자열 데이터
    headers: {
      "Content-Type": "application/json", // 타입
    },
  });

  if(!res.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  } else {
    console.log('데이터를 불러오는데 성공했습니다.');
  }

  const data = await res.json();
  return data;
}
