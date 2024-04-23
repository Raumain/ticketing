import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { DeleteIssueMutationResponse, DeleteIssuePathParams } from "../types/DeleteIssue";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteIssueClient = typeof client<DeleteIssueMutationResponse, never, never>;
type DeleteIssue = {
    data: DeleteIssueMutationResponse;
    error: never;
    request: never;
    pathParams: DeleteIssuePathParams;
    queryParams: never;
    headerParams: never;
    response: DeleteIssueMutationResponse;
    client: {
        parameters: Partial<Parameters<DeleteIssueClient>[0]>;
        return: Awaited<ReturnType<DeleteIssueClient>>;
    };
};
/**
 * @link /api/v1/issues/:id
 */
export function useDeleteIssue(id: DeleteIssuePathParams["id"], options: {
    mutation?: UseMutationOptions<DeleteIssue["response"], DeleteIssue["error"], DeleteIssue["request"]>;
    client?: DeleteIssue["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteIssue["data"], DeleteIssue["error"], DeleteIssue["request"]>({
                method: "delete",
                url: `/api/v1/issues/${id}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}