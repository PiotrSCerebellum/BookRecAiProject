import {HtmlMethod} from "./types.ts";
import {BookData} from "./types.ts";
export function buildRequest(method:HtmlMethod, body?:object): RequestInit {
    return {
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'Content-Type': 'application/json',
        }
    };
}
export function parseBooks(jsonData: any[]): BookData[] {
    return jsonData.map(item => ({
        id: item._id,
        imgSource: item.cover,
        title: item.title,
        author: item.author,
        blurb: item.blurb,
    }));
}
