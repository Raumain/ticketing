import client from "~/api/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetAllRepositoriesQueryResponse } from "../types/GetAllRepositories";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetAllRepositoriesClient = typeof client<GetAllRepositoriesQueryResponse, never, never>;
type GetAllRepositories = {
    data: GetAllRepositoriesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetAllRepositoriesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAllRepositoriesClient>[0]>;
        return: Awaited<ReturnType<GetAllRepositoriesClient>>;
    };
};
export const getAllRepositoriesQueryKey = () => [{ url: "/api/v1/repositories/" }] as const;
export type GetAllRepositoriesQueryKey = ReturnType<typeof getAllRepositoriesQueryKey>;
export function getAllRepositoriesQueryOptions(options: GetAllRepositories["client"]["parameters"] = {}) {
    const queryKey = getAllRepositoriesQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetAllRepositories["data"], GetAllRepositories["error"]>({
                method: "get",
                url: `/api/v1/repositories/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/repositories/
 */
export function useGetAllRepositories<TData = GetAllRepositories["response"], TQueryData = GetAllRepositories["response"], TQueryKey extends QueryKey = GetAllRepositoriesQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetAllRepositories["response"], GetAllRepositories["error"], TData, TQueryData, TQueryKey>>;
    client?: GetAllRepositories["client"]["parameters"];
} = {}): UseQueryResult<TData, GetAllRepositories["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getAllRepositoriesQueryKey();
    const query = useQuery({
        ...getAllRepositoriesQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetAllRepositories["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getAllRepositoriesSuspenseQueryKey = () => [{ url: "/api/v1/repositories/" }] as const;
export type GetAllRepositoriesSuspenseQueryKey = ReturnType<typeof getAllRepositoriesSuspenseQueryKey>;
export function getAllRepositoriesSuspenseQueryOptions(options: GetAllRepositories["client"]["parameters"] = {}) {
    const queryKey = getAllRepositoriesSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetAllRepositories["data"], GetAllRepositories["error"]>({
                method: "get",
                url: `/api/v1/repositories/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/repositories/
 */
export function useGetAllRepositoriesSuspense<TData = GetAllRepositories["response"], TQueryKey extends QueryKey = GetAllRepositoriesSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetAllRepositories["response"], GetAllRepositories["error"], TData, TQueryKey>>;
    client?: GetAllRepositories["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetAllRepositories["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getAllRepositoriesSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getAllRepositoriesSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetAllRepositories["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}