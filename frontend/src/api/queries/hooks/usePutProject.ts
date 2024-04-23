import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { PutProjectMutationRequest, PutProjectMutationResponse, PutProjectPathParams } from "../types/PutProject";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PutProjectClient = typeof client<PutProjectMutationResponse, never, PutProjectMutationRequest>;
type PutProject = {
    data: PutProjectMutationResponse;
    error: never;
    request: PutProjectMutationRequest;
    pathParams: PutProjectPathParams;
    queryParams: never;
    headerParams: never;
    response: PutProjectMutationResponse;
    client: {
        parameters: Partial<Parameters<PutProjectClient>[0]>;
        return: Awaited<ReturnType<PutProjectClient>>;
    };
};
/**
 * @link /api/v1/projects/:id
 */
export function usePutProject(id: PutProjectPathParams["id"], options: {
    mutation?: UseMutationOptions<PutProject["response"], PutProject["error"], PutProject["request"]>;
    client?: PutProject["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PutProject["data"], PutProject["error"], PutProject["request"]>({
                method: "put",
                url: `/api/v1/projects/${id}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}