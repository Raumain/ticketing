import client from "~/api/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GetAllIssuesQueryResponse } from "../types/GetAllIssues";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GetAllIssuesClient = typeof client<GetAllIssuesQueryResponse, never, never>;
type GetAllIssues = {
    data: GetAllIssuesQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetAllIssuesQueryResponse;
    client: {
        parameters: Partial<Parameters<GetAllIssuesClient>[0]>;
        return: Awaited<ReturnType<GetAllIssuesClient>>;
    };
};
export const getAllIssuesQueryKey = () => [{ url: "/api/v1/issues/" }] as const;
export type GetAllIssuesQueryKey = ReturnType<typeof getAllIssuesQueryKey>;
export function getAllIssuesQueryOptions(options: GetAllIssues["client"]["parameters"] = {}) {
    const queryKey = getAllIssuesQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetAllIssues["data"], GetAllIssues["error"]>({
                method: "get",
                url: `/api/v1/issues/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/issues/
 */
export function useGetAllIssues<TData = GetAllIssues["response"], TQueryData = GetAllIssues["response"], TQueryKey extends QueryKey = GetAllIssuesQueryKey>(options: {
    query?: Partial<QueryObserverOptions<GetAllIssues["response"], GetAllIssues["error"], TData, TQueryData, TQueryKey>>;
    client?: GetAllIssues["client"]["parameters"];
} = {}): UseQueryResult<TData, GetAllIssues["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getAllIssuesQueryKey();
    const query = useQuery({
        ...getAllIssuesQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GetAllIssues["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const getAllIssuesSuspenseQueryKey = () => [{ url: "/api/v1/issues/" }] as const;
export type GetAllIssuesSuspenseQueryKey = ReturnType<typeof getAllIssuesSuspenseQueryKey>;
export function getAllIssuesSuspenseQueryOptions(options: GetAllIssues["client"]["parameters"] = {}) {
    const queryKey = getAllIssuesSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GetAllIssues["data"], GetAllIssues["error"]>({
                method: "get",
                url: `/api/v1/issues/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/v1/issues/
 */
export function useGetAllIssuesSuspense<TData = GetAllIssues["response"], TQueryKey extends QueryKey = GetAllIssuesSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<GetAllIssues["response"], GetAllIssues["error"], TData, TQueryKey>>;
    client?: GetAllIssues["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GetAllIssues["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getAllIssuesSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...getAllIssuesSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GetAllIssues["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}