import axios from 'axios';

export async function getNaverDictionary(query: string) {
    const response = await axios.get('https://openapi.naver.com/v1/search/encyc.json', {
        params: {
            query: query,
            display: 100,
            start: 1
        },
        headers: {
            'X-Naver-Client-Id': 'kNfJRdduUEUCPNy2dgwv',
            'X-Naver-Client-Secret': 'LTdvry54aR'
        }
    })

    return response.data;
}