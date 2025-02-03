import { useQuery, UseQueryResult } from '@tanstack/react-query';
import * as config from '../utils/config.ts';
import {queryChromaService} from "../queries/queryChromaService.ts";

export function useChromaQuery(ids : string[]): UseQueryResult<string> {
    return useQuery({
        queryKey: ['recomendation', ids],
        enabled:  ids.length>2,
        staleTime: Infinity,
        queryFn: async (): Promise<string> => {
            return queryChromaService(
                `${config.getBackendServerUrl()}`,
                ids
            )

        }
    });
}