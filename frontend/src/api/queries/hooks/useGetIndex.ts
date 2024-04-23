import client from "~/api/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetIndexQueryResponse } from "../types/GetIndex";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetIndexClient = typeof client<GetIndexQueryResponse, never, never>;
type GetIndex = {
    data: GetIndexQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetIndexQueryResponse;
    client: {
        parameters: Partial<Parameters<GetIndexClient>[0]>;
        return: Awaited<ReturnType<GetIndexClient>>;
    };
};
export const getIndexQueryKey = () => [{ url: "/" }] as const;
export type GetIndexQueryKey = ReturnType<typeof getIndexQueryKey>;
export function getIndexQueryOptions(options: GetIndex["client"]["parameters"] = {}) {
    const queryKey = getIndexQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetIndex["data"], GetIndex["error"]>({
                method: "get",
                url: `/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /
 */
export function useGetIndex<TData = GetIndex["response"], TQueryData = GetIndex["response"], TQueryKey extends QueryKey = GetIndexQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetIndex["response"], GetIndex["error"], TData, TQueryData, TQueryKey>>;
    client?: GetIndex["client"]["parameters"];
} = {}): UseQueryResult<TData, GetIndex["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getIndexQueryKey();
    const query = useQuery({
        ...getIndexQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetIndex["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getIndexSuspenseQueryKey = () => [{ url: "/" }] as const;
export type GetIndexSuspenseQueryKey = ReturnType<typeof getIndexSuspenseQueryKey>;
export function getIndexSuspenseQueryOptions(options: GetIndex["client"]["parameters"] = {}) {
    const queryKey = getIndexSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetIndex["data"], GetIndex["error"]>({
                method: "get",
                url: `/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /
 */
export function useGetIndexSuspense<TData = GetIndex["response"], TQueryKey extends QueryKey = GetIndexSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetIndex["response"], GetIndex["error"], TData, TQueryKey>>;
    client?: GetIndex["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetIndex["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getIndexSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getIndexSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetIndex["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}