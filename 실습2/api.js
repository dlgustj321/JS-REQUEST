export async function getAvatars(params = {}) {
  const url = new URL("https://learn.codeit.kr/api/avatars");
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getAvatar(id) {
  const res = await fetch('https://learn.codeit.kr/api/avatars');
  const data = await res.json();
  return data;
}

export async function createAvatars(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type' : 'application/json',
    },
  });
  const data = await res.json();
  return(data);
}

export async function patchAvatar(id, avatarData) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
  const data = await res.json();
  return data;
}

export async function deletAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
  const data = await res.json();
  return data;
}