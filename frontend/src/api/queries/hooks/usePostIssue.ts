import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { PostIssueMutationRequest, PostIssueMutationResponse } from "../types/PostIssue";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PostIssueClient = typeof client<PostIssueMutationResponse, never, PostIssueMutationRequest>;
type PostIssue = {
    data: PostIssueMutationResponse;
    error: never;
    request: PostIssueMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostIssueMutationResponse;
    client: {
        parameters: Partial<Parameters<PostIssueClient>[0]>;
        return: Awaited<ReturnType<PostIssueClient>>;
    };
};
/**
 * @link /api/v1/issues/
 */
export function usePostIssue(options: {
    mutation?: UseMutationOptions<PostIssue["response"], PostIssue["error"], PostIssue["request"]>;
    client?: PostIssue["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PostIssue["data"], PostIssue["error"], PostIssue["request"]>({
                method: "post",
                url: `/api/v1/issues/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}