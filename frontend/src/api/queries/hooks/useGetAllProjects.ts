import client from "~/api/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetAllProjectsQueryResponse } from "../types/GetAllProjects";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetAllProjectsClient = typeof client<GetAllProjectsQueryResponse, never, never>;
type GetAllProjects = {
    data: GetAllProjectsQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetAllProjectsQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAllProjectsClient>[0]>;
        return: Awaited<ReturnType<GetAllProjectsClient>>;
    };
};
export const getAllProjectsQueryKey = () => [{ url: "/api/v1/projects/" }] as const;
export type GetAllProjectsQueryKey = ReturnType<typeof getAllProjectsQueryKey>;
export function getAllProjectsQueryOptions(options: GetAllProjects["client"]["parameters"] = {}) {
    const queryKey = getAllProjectsQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetAllProjects["data"], GetAllProjects["error"]>({
                method: "get",
                url: `/api/v1/projects/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/projects/
 */
export function useGetAllProjects<TData = GetAllProjects["response"], TQueryData = GetAllProjects["response"], TQueryKey extends QueryKey = GetAllProjectsQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetAllProjects["response"], GetAllProjects["error"], TData, TQueryData, TQueryKey>>;
    client?: GetAllProjects["client"]["parameters"];
} = {}): UseQueryResult<TData, GetAllProjects["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getAllProjectsQueryKey();
    const query = useQuery({
        ...getAllProjectsQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetAllProjects["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getAllProjectsSuspenseQueryKey = () => [{ url: "/api/v1/projects/" }] as const;
export type GetAllProjectsSuspenseQueryKey = ReturnType<typeof getAllProjectsSuspenseQueryKey>;
export function getAllProjectsSuspenseQueryOptions(options: GetAllProjects["client"]["parameters"] = {}) {
    const queryKey = getAllProjectsSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetAllProjects["data"], GetAllProjects["error"]>({
                method: "get",
                url: `/api/v1/projects/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/projects/
 */
export function useGetAllProjectsSuspense<TData = GetAllProjects["response"], TQueryKey extends QueryKey = GetAllProjectsSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetAllProjects["response"], GetAllProjects["error"], TData, TQueryKey>>;
    client?: GetAllProjects["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetAllProjects["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getAllProjectsSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getAllProjectsSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetAllProjects["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}