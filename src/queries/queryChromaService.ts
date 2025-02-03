import {buildRequest} from "../utils/functions.ts";
import {getCollectionName} from "../utils/config.ts";


export async function queryChromaService(url: string, ids: string[]) {
    const body = {
        "ids_of_embeddings": ids
    };

    try {
        const response = await fetch(url + "/collection/" + getCollectionName() + "/query_one_by_embeddings", buildRequest('POST', body));

        if (!response.ok) {
            const errorMessage = await response.text(); // Get the error message from response
            throw new Error(`Server Error: ${errorMessage}`);
        }

        return await response.text();
    } catch (error) {
        if(error instanceof Error) {
            console.error("QueryChromaService Error:", error.message);
        }
        throw error;
    }
}