import axios from 'axios';
// import RNFS, {DownloadDirectoryPath} from 'react-native-fs';
import {writeFile} from 'fs/promises';

export const axiosTest = async () => {
  // 상대 경로로 하는 경우, 파일시스템에 직접적으로 액세스가 불가함으로,
  // 앱 문서 디렉토리에 파일 저장을 위한 경로를 변수에 담는다.
  // const filePath = `${DownloadDirectoryPath}/test.json`;
  // console.log(filePath);

  // fetch와 같은 HTTP요청 라이브러리
  try {
    const response = await axios.get(
      'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EB%8C%80%EC%A0%84+%EB%91%90%EB%A3%A8%EC%B9%98%EA%B8%B0+%EB%A7%9B%EC%A7%91',
    );
    await writeFile('./test.json', `${response}`, 'utf8');
  } catch (err) {
    console.log(err);
  }
};
