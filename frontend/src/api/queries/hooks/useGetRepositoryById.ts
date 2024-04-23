import client from "~/api/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetRepositoryByIdQueryResponse, GetRepositoryByIdPathParams } from "../types/GetRepositoryById";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetRepositoryByIdClient = typeof client<GetRepositoryByIdQueryResponse, never, never>;
type GetRepositoryById = {
    data: GetRepositoryByIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetRepositoryByIdPathParams;
    queryParams: never;
    headerParams: never;
    response: GetRepositoryByIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetRepositoryByIdClient>[0]>;
        return: Awaited<ReturnType<GetRepositoryByIdClient>>;
    };
};
export const getRepositoryByIdQueryKey = (id: GetRepositoryByIdPathParams["id"]) => [{ url: "/api/v1/repositories/:id", params: { id: id } }] as const;
export type GetRepositoryByIdQueryKey = ReturnType<typeof getRepositoryByIdQueryKey>;
export function getRepositoryByIdQueryOptions(id: GetRepositoryByIdPathParams["id"], options: GetRepositoryById["client"]["parameters"] = {}) {
    const queryKey = getRepositoryByIdQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetRepositoryById["data"], GetRepositoryById["error"]>({
                method: "get",
                url: `/api/v1/repositories/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/repositories/:id
 */
export function useGetRepositoryById<TData = GetRepositoryById["response"], TQueryData = GetRepositoryById["response"], TQueryKey extends QueryKey = GetRepositoryByIdQueryKey>(id: GetRepositoryByIdPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<GetRepositoryById["response"], GetRepositoryById["error"], TData, TQueryData, TQueryKey>>;
    client?: GetRepositoryById["client"]["parameters"];
} = {}): UseQueryResult<TData, GetRepositoryById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getRepositoryByIdQueryKey(id);
    const query = useQuery({
        ...getRepositoryByIdQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetRepositoryById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getRepositoryByIdSuspenseQueryKey = (id: GetRepositoryByIdPathParams["id"]) => [{ url: "/api/v1/repositories/:id", params: { id: id } }] as const;
export type GetRepositoryByIdSuspenseQueryKey = ReturnType<typeof getRepositoryByIdSuspenseQueryKey>;
export function getRepositoryByIdSuspenseQueryOptions(id: GetRepositoryByIdPathParams["id"], options: GetRepositoryById["client"]["parameters"] = {}) {
    const queryKey = getRepositoryByIdSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetRepositoryById["data"], GetRepositoryById["error"]>({
                method: "get",
                url: `/api/v1/repositories/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/repositories/:id
 */
export function useGetRepositoryByIdSuspense<TData = GetRepositoryById["response"], TQueryKey extends QueryKey = GetRepositoryByIdSuspenseQueryKey>(id: GetRepositoryByIdPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetRepositoryById["response"], GetRepositoryById["error"], TData, TQueryKey>>;
    client?: GetRepositoryById["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetRepositoryById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getRepositoryByIdSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...getRepositoryByIdSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetRepositoryById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}