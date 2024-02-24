export function searchImages(searchTerm) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY = '42535847-effe6d5cdde3e67806355c12e&q';
  const IMG_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const PARAMS = `?key=${KEY}&q=${searchTerm}&image_type=${IMG_TYPE}&orientation=${ORIENTATION}&safesearch=true`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {},
  };
  return fetch(url, options).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw newError(res.status);
    }
  });
}
