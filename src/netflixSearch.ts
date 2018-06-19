import axios from 'axios';
const BASE_URL = 'https://www.netflix.com/title/';

export interface result {
  id?: string,
  url?: string
}

export async function netflixSearch(name: string): Promise<result> {

  try {
    const html:string = await axios.get(`https://www.bing.com/search?q=${name} netflix`).then(res => res.data);
    const firstResult = html.split(BASE_URL)[1];

    const id = firstResult.split('"')[0];
    return { id, url: `${BASE_URL}${id}` };

  } catch (e) {
    return {};
  }
}