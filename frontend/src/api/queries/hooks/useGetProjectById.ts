import client from "~/api/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetProjectByIdQueryResponse, GetProjectByIdPathParams } from "../types/GetProjectById";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetProjectByIdClient = typeof client<GetProjectByIdQueryResponse, never, never>;
type GetProjectById = {
    data: GetProjectByIdQueryResponse;
    error: never;
    request: never;
    pathParams: GetProjectByIdPathParams;
    queryParams: never;
    headerParams: never;
    response: GetProjectByIdQueryResponse;
    client: {
        parameters: Partial<Parameters<GetProjectByIdClient>[0]>;
        return: Awaited<ReturnType<GetProjectByIdClient>>;
    };
};
export const getProjectByIdQueryKey = (id: GetProjectByIdPathParams["id"]) => [{ url: "/api/v1/projects/:id", params: { id: id } }] as const;
export type GetProjectByIdQueryKey = ReturnType<typeof getProjectByIdQueryKey>;
export function getProjectByIdQueryOptions(id: GetProjectByIdPathParams["id"], options: GetProjectById["client"]["parameters"] = {}) {
    const queryKey = getProjectByIdQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetProjectById["data"], GetProjectById["error"]>({
                method: "get",
                url: `/api/v1/projects/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/projects/:id
 */
export function useGetProjectById<TData = GetProjectById["response"], TQueryData = GetProjectById["response"], TQueryKey extends QueryKey = GetProjectByIdQueryKey>(id: GetProjectByIdPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<GetProjectById["response"], GetProjectById["error"], TData, TQueryData, TQueryKey>>;
    client?: GetProjectById["client"]["parameters"];
} = {}): UseQueryResult<TData, GetProjectById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getProjectByIdQueryKey(id);
    const query = useQuery({
        ...getProjectByIdQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetProjectById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getProjectByIdSuspenseQueryKey = (id: GetProjectByIdPathParams["id"]) => [{ url: "/api/v1/projects/:id", params: { id: id } }] as const;
export type GetProjectByIdSuspenseQueryKey = ReturnType<typeof getProjectByIdSuspenseQueryKey>;
export function getProjectByIdSuspenseQueryOptions(id: GetProjectByIdPathParams["id"], options: GetProjectById["client"]["parameters"] = {}) {
    const queryKey = getProjectByIdSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetProjectById["data"], GetProjectById["error"]>({
                method: "get",
                url: `/api/v1/projects/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/projects/:id
 */
export function useGetProjectByIdSuspense<TData = GetProjectById["response"], TQueryKey extends QueryKey = GetProjectByIdSuspenseQueryKey>(id: GetProjectByIdPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GetProjectById["response"], GetProjectById["error"], TData, TQueryKey>>;
    client?: GetProjectById["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetProjectById["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getProjectByIdSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...getProjectByIdSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetProjectById["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}