import axios from "axios";

interface QueryParams {
    certkey_no?: number | 7338;
    key?: string | 'F907F61C13BC156AEFF59A82997D6B6A';
    q: string;
    req_type?: string | 'json';
    type_search?: string | 'search';
    start?: number | 1;
    num?: number | 10;
    advanced?: string | 'n';
}

export async function getQuery(params: QueryParams) {
    const response = await axios.get('https://stdict.korean.go.kr/api/search.do', {
        params: {
            ...params,
            key: 'F907F61C13BC156AEFF59A82997D6B6A',
            req_type: 'json',
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })

    return response.data;
}