import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { PostApiV1UserGithubTokenMutationRequest, PostApiV1UserGithubTokenMutationResponse } from "../types/PostApiV1UserGithubToken";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PostApiV1UserGithubTokenClient = typeof client<PostApiV1UserGithubTokenMutationResponse, never, PostApiV1UserGithubTokenMutationRequest>;
type PostApiV1UserGithubToken = {
    data: PostApiV1UserGithubTokenMutationResponse;
    error: never;
    request: PostApiV1UserGithubTokenMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostApiV1UserGithubTokenMutationResponse;
    client: {
        parameters: Partial<Parameters<PostApiV1UserGithubTokenClient>[0]>;
        return: Awaited<ReturnType<PostApiV1UserGithubTokenClient>>;
    };
};
/**
 * @link /api/v1/user/github_token
 */
export function usePostApiV1UserGithubToken(options: {
    mutation?: UseMutationOptions<PostApiV1UserGithubToken["response"], PostApiV1UserGithubToken["error"], PostApiV1UserGithubToken["request"]>;
    client?: PostApiV1UserGithubToken["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PostApiV1UserGithubToken["data"], PostApiV1UserGithubToken["error"], PostApiV1UserGithubToken["request"]>({
                method: "post",
                url: `/api/v1/user/github_token`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}