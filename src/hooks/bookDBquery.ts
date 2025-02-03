import { useQuery, UseQueryResult } from '@tanstack/react-query';
import {queryBookDB} from "../queries/queryBookDB.ts";
import * as config from '../utils/config.ts';

export function useBookDBquery(query : string): UseQueryResult<string> {
    return useQuery({
        queryKey: ['book', query],
        enabled:  !!query,
        staleTime: Infinity,
        queryFn: async (): Promise<string> => {
            return queryBookDB(
                    `${config.getBackendServerUrl()}/collection/${config.getCollectionName()}/`,
                    query
                )

        }
    });
}