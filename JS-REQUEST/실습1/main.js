/*틀림 (URL 객체 사용)
const url1 = new URL("https://learn.codeit.kr/api/avatars");
url1.searchParams.append('offset', 10);
url1.searchParams.append('limit', 10);

const res1 = await fetch(url1);
const data1 = await res1.json()
console.log(data1);

const url2 = new URL("https://learn.codeit.kr/api/avatars");
url1.searchParams.append('offset', 5);
url1.searchParams.append('limit', 10);

const res2 = await fetch(url2);
const data2 = await res1.json()
console.log(data2);

const url3 = new URL("https://learn.codeit.kr/api/avatars");
url2.searchParams.append("id", 7);

const res3 = await fetch(url3);
const data3 = await res1.json()
console.log(data3);
*/

const res1 = await fetch('https://learn.codeit.kr/api/avatars/?offset=10&limit=10');
const data1 = await res1.json();
console.log(data1);

const res2 = await fetch('https://learn.codeit.kr/api/avatars/?offset=5&limit=10');
const data2 = await res2.json();
console.log(data2);

const res3 = await fetch('https://learn.codeit.kr/api/avatars/7');
const data3 = await res3.json();
console.log(data3);
