import axios from 'axios';

export async function getImg(searchValue, page) {
  const params = new URLSearchParams({
    key: '10251245-89f446d0cb8b565d1d225cbbb',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  });

  try {
    const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?${params}`,
    });
    return response.data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}