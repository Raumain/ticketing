import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { DeleteRepositoryMutationResponse, DeleteRepositoryPathParams } from "../types/DeleteRepository";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteRepositoryClient = typeof client<DeleteRepositoryMutationResponse, never, never>;
type DeleteRepository = {
    data: DeleteRepositoryMutationResponse;
    error: never;
    request: never;
    pathParams: DeleteRepositoryPathParams;
    queryParams: never;
    headerParams: never;
    response: DeleteRepositoryMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteRepositoryClient>[0]>;
        return: Awaited<ReturnType<DeleteRepositoryClient>>;
    };
};
/**
 * @link /api/v1/repositories/:id
 */
export function useDeleteRepository(id: DeleteRepositoryPathParams["id"], options: {
    mutation?: UseMutationOptions<DeleteRepository["response"], DeleteRepository["error"], DeleteRepository["request"]>;
    client?: DeleteRepository["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteRepository["data"], DeleteRepository["error"], DeleteRepository["request"]>({
                method: "delete",
                url: `/api/v1/repositories/${id}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}