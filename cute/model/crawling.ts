import axios from 'axios';
import cheerio, {CheerioAPI} from 'react-native-cheerio';

export const axiosTest = async (local: String, food: String) => {
  // fetch와 같은 HTTP요청 라이브러리
  try {
    const response = await axios.get(
      `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${encodeURIComponent(
        `${local}+${food}+맛집`,
      )}`,
    );

    const $ = cheerio.load(response.data);
    const places: string[] = [];

    $('span.place_bluelink.TYaxT').each(
      (index: Number, element: CheerioAPI) => {
        const placeName = $(element).text();
        places.push(placeName);
      },
    );

    console.log(places);
  } catch (err) {
    console.log(err);
  }
};
