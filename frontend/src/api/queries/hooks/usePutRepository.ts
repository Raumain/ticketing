import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { PutRepositoryMutationRequest, PutRepositoryMutationResponse, PutRepositoryPathParams } from "../types/PutRepository";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PutRepositoryClient = typeof client<PutRepositoryMutationResponse, never, PutRepositoryMutationRequest>;
type PutRepository = {
    data: PutRepositoryMutationResponse;
    error: never;
    request: PutRepositoryMutationRequest;
    pathParams: PutRepositoryPathParams;
    queryParams: never;
    headerParams: never;
    response: PutRepositoryMutationResponse;
    client: {
        parameters: Partial<Parameters<PutRepositoryClient>[0]>;
        return: Awaited<ReturnType<PutRepositoryClient>>;
    };
};
/**
 * @link /api/v1/repositories/:id
 */
export function usePutRepository(id: PutRepositoryPathParams["id"], options: {
    mutation?: UseMutationOptions<PutRepository["response"], PutRepository["error"], PutRepository["request"]>;
    client?: PutRepository["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PutRepository["data"], PutRepository["error"], PutRepository["request"]>({
                method: "put",
                url: `/api/v1/repositories/${id}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}