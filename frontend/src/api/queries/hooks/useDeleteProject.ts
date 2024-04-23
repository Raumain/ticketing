import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { DeleteProjectMutationResponse, DeleteProjectPathParams } from "../types/DeleteProject";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteProjectClient = typeof client<DeleteProjectMutationResponse, never, never>;
type DeleteProject = {
    data: DeleteProjectMutationResponse;
    error: never;
    request: never;
    pathParams: DeleteProjectPathParams;
    queryParams: never;
    headerParams: never;
    response: DeleteProjectMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteProjectClient>[0]>;
        return: Awaited<ReturnType<DeleteProjectClient>>;
    };
};
/**
 * @link /api/v1/projects/:id
 */
export function useDeleteProject(id: DeleteProjectPathParams["id"], options: {
    mutation?: UseMutationOptions<DeleteProject["response"], DeleteProject["error"], DeleteProject["request"]>;
    client?: DeleteProject["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteProject["data"], DeleteProject["error"], DeleteProject["request"]>({
                method: "delete",
                url: `/api/v1/projects/${id}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}