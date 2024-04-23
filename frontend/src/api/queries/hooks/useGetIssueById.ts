import client from "~/api/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetIssueByIdQueryResponse, GetIssueByIdPathParams } from "../types/GetIssueById";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetIssueByIdClient = typeof client<GetIssueByIdQueryResponse, never, never>;
type GetIssueById = {
    data: GetIssueByIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetIssueByIdPathParams;
    queryParams: never;
    headerParams: never;
    response: GetIssueByIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetIssueByIdClient>[0]>;
        return: Awaited<ReturnType<GetIssueByIdClient>>;
    };
};
export const getIssueByIdQueryKey = (id: GetIssueByIdPathParams["id"]) => [{ url: "/api/v1/issues/:id", params: { id: id } }] as const;
export type GetIssueByIdQueryKey = ReturnType<typeof getIssueByIdQueryKey>;
export function getIssueByIdQueryOptions(id: GetIssueByIdPathParams["id"], options: GetIssueById["client"]["parameters"] = {}) {
    const queryKey = getIssueByIdQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetIssueById["data"], GetIssueById["error"]>({
                method: "get",
                url: `/api/v1/issues/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/issues/:id
 */
export function useGetIssueById<TData = GetIssueById["response"], TQueryData = GetIssueById["response"], TQueryKey extends QueryKey = GetIssueByIdQueryKey>(id: GetIssueByIdPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<GetIssueById["response"], GetIssueById["error"], TData, TQueryData, TQueryKey>>;
    client?: GetIssueById["client"]["parameters"];
} = {}): UseQueryResult<TData, GetIssueById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getIssueByIdQueryKey(id);
    const query = useQuery({
        ...getIssueByIdQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetIssueById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getIssueByIdSuspenseQueryKey = (id: GetIssueByIdPathParams["id"]) => [{ url: "/api/v1/issues/:id", params: { id: id } }] as const;
export type GetIssueByIdSuspenseQueryKey = ReturnType<typeof getIssueByIdSuspenseQueryKey>;
export function getIssueByIdSuspenseQueryOptions(id: GetIssueByIdPathParams["id"], options: GetIssueById["client"]["parameters"] = {}) {
    const queryKey = getIssueByIdSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetIssueById["data"], GetIssueById["error"]>({
                method: "get",
                url: `/api/v1/issues/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/issues/:id
 */
export function useGetIssueByIdSuspense<TData = GetIssueById["response"], TQueryKey extends QueryKey = GetIssueByIdSuspenseQueryKey>(id: GetIssueByIdPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetIssueById["response"], GetIssueById["error"], TData, TQueryKey>>;
    client?: GetIssueById["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetIssueById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getIssueByIdSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...getIssueByIdSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetIssueById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}