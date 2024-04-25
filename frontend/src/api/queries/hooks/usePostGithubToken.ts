import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { PostGithubTokenMutationRequest, PostGithubTokenMutationResponse } from "../types/PostGithubToken";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PostGithubTokenClient = typeof client<PostGithubTokenMutationResponse, never, PostGithubTokenMutationRequest>;
type PostGithubToken = {
    data: PostGithubTokenMutationResponse;
    error: never;
    request: PostGithubTokenMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostGithubTokenMutationResponse;
    client: {
        parameters: Partial<Parameters<PostGithubTokenClient>[0]>;
        return: Awaited<ReturnType<PostGithubTokenClient>>;
    };
};
/**
 * @link /api/v1/github-token/
 */
export function usePostGithubToken(options: {
    mutation?: UseMutationOptions<PostGithubToken["response"], PostGithubToken["error"], PostGithubToken["request"]>;
    client?: PostGithubToken["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PostGithubToken["data"], PostGithubToken["error"], PostGithubToken["request"]>({
                method: "post",
                url: `/api/v1/github-token/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}