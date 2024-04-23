import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { PostProjectMutationRequest, PostProjectMutationResponse } from "../types/PostProject";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PostProjectClient = typeof client<PostProjectMutationResponse, never, PostProjectMutationRequest>;
type PostProject = {
    data: PostProjectMutationResponse;
    error: never;
    request: PostProjectMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostProjectMutationResponse;
    client: {
        parameters: Partial<Parameters<PostProjectClient>[0]>;
        return: Awaited<ReturnType<PostProjectClient>>;
    };
};
/**
 * @link /api/v1/projects/
 */
export function usePostProject(options: {
    mutation?: UseMutationOptions<PostProject["response"], PostProject["error"], PostProject["request"]>;
    client?: PostProject["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PostProject["data"], PostProject["error"], PostProject["request"]>({
                method: "post",
                url: `/api/v1/projects/`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}