import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { PostRepositoryMutationRequest, PostRepositoryMutationResponse } from "../types/PostRepository";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PostRepositoryClient = typeof client<PostRepositoryMutationResponse, never, PostRepositoryMutationRequest>;
type PostRepository = {
    data: PostRepositoryMutationResponse;
    error: never;
    request: PostRepositoryMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostRepositoryMutationResponse;
    client: {
        parameters: Partial<Parameters<PostRepositoryClient>[0]>;
        return: Awaited<ReturnType<PostRepositoryClient>>;
    };
};
/**
 * @link /api/v1/repositories/
 */
export function usePostRepository(options: {
    mutation?: UseMutationOptions<PostRepository["response"], PostRepository["error"], PostRepository["request"]>;
    client?: PostRepository["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PostRepository["data"], PostRepository["error"], PostRepository["request"]>({
                method: "post",
                url: `/api/v1/repositories/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}