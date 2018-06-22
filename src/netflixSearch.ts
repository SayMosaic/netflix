import axios from 'axios';
const BASE_URL = 'https://www.netflix.com/title/';

export interface result {
  id?: string,
  url?: string,
  name?: string
}

export async function netflixSearch(query: string): Promise<result> {

  try {
    const html:string = await axios.get(`https://www.bing.com/search?q=${query} netflix`).then(res => res.data);
    const firstResult = html.split(BASE_URL)[1];

    const hacks = firstResult.split('"');
    const id = hacks[0];
    const name = hacks[3].split('<strong>')[1].split('</strong>')[0];
    return { id, url: `${BASE_URL}${id}`, name };

  } catch (e) {
    return {};
  }
}