import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { PostApiV1UserMutationRequest, PostApiV1UserMutationResponse } from "../types/PostApiV1User";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PostApiV1UserClient = typeof client<PostApiV1UserMutationResponse, never, PostApiV1UserMutationRequest>;
type PostApiV1User = {
    data: PostApiV1UserMutationResponse;
    error: never;
    request: PostApiV1UserMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostApiV1UserMutationResponse;
    client: {
        parameters: Partial<Parameters<PostApiV1UserClient>[0]>;
        return: Awaited<ReturnType<PostApiV1UserClient>>;
    };
};
/**
 * @link /api/v1/user
 */
export function usePostApiV1User(options: {
    mutation?: UseMutationOptions<PostApiV1User["response"], PostApiV1User["error"], PostApiV1User["request"]>;
    client?: PostApiV1User["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PostApiV1User["data"], PostApiV1User["error"], PostApiV1User["request"]>({
                method: "post",
                url: `/api/v1/user`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}