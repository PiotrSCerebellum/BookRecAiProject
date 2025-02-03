import {buildRequest} from "../utils/functions.ts";


export async function queryBookDB(url: string, title: string) {
    const response = await fetch(url+"search_by_title?title="+title, buildRequest('GET'));
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.text();
}
