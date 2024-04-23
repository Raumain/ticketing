import client from "~/api/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetApiV1UserByIdQueryResponse, GetApiV1UserByIdPathParams } from "../types/GetApiV1UserById";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetApiV1UserByIdClient = typeof client<GetApiV1UserByIdQueryResponse, never, never>;
type GetApiV1UserById = {
    data: GetApiV1UserByIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetApiV1UserByIdPathParams;
    queryParams: never;
    headerParams: never;
    response: GetApiV1UserByIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetApiV1UserByIdClient>[0]>;
        return: Awaited<ReturnType<GetApiV1UserByIdClient>>;
    };
};
export const getApiV1UserByIdQueryKey = (id: GetApiV1UserByIdPathParams["id"]) => [{ url: "/api/v1/user/:id", params: { id: id } }] as const;
export type GetApiV1UserByIdQueryKey = ReturnType<typeof getApiV1UserByIdQueryKey>;
export function getApiV1UserByIdQueryOptions(id: GetApiV1UserByIdPathParams["id"], options: GetApiV1UserById["client"]["parameters"] = {}) {
    const queryKey = getApiV1UserByIdQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetApiV1UserById["data"], GetApiV1UserById["error"]>({
                method: "get",
                url: `/api/v1/user/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/user/:id
 */
export function useGetApiV1UserById<TData = GetApiV1UserById["response"], TQueryData = GetApiV1UserById["response"], TQueryKey extends QueryKey = GetApiV1UserByIdQueryKey>(id: GetApiV1UserByIdPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<GetApiV1UserById["response"], GetApiV1UserById["error"], TData, TQueryData, TQueryKey>>;
    client?: GetApiV1UserById["client"]["parameters"];
} = {}): UseQueryResult<TData, GetApiV1UserById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiV1UserByIdQueryKey(id);
    const query = useQuery({
        ...getApiV1UserByIdQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetApiV1UserById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getApiV1UserByIdSuspenseQueryKey = (id: GetApiV1UserByIdPathParams["id"]) => [{ url: "/api/v1/user/:id", params: { id: id } }] as const;
export type GetApiV1UserByIdSuspenseQueryKey = ReturnType<typeof getApiV1UserByIdSuspenseQueryKey>;
export function getApiV1UserByIdSuspenseQueryOptions(id: GetApiV1UserByIdPathParams["id"], options: GetApiV1UserById["client"]["parameters"] = {}) {
    const queryKey = getApiV1UserByIdSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetApiV1UserById["data"], GetApiV1UserById["error"]>({
                method: "get",
                url: `/api/v1/user/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/user/:id
 */
export function useGetApiV1UserByIdSuspense<TData = GetApiV1UserById["response"], TQueryKey extends QueryKey = GetApiV1UserByIdSuspenseQueryKey>(id: GetApiV1UserByIdPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetApiV1UserById["response"], GetApiV1UserById["error"], TData, TQueryKey>>;
    client?: GetApiV1UserById["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetApiV1UserById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getApiV1UserByIdSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...getApiV1UserByIdSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetApiV1UserById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}