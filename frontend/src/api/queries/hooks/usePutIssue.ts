import client from "~/api/client.ts";
import { useMutation } from "@tanstack/react-query";
import type { PutIssueMutationRequest, PutIssueMutationResponse, PutIssuePathParams } from "../types/PutIssue";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PutIssueClient = typeof client<PutIssueMutationResponse, never, PutIssueMutationRequest>;
type PutIssue = {
    data: PutIssueMutationResponse;
    error: never;
    request: PutIssueMutationRequest;
    pathParams: PutIssuePathParams;
    queryParams: never;
    headerParams: never;
    response: PutIssueMutationResponse;
    client: {
        parameters: Partial<Parameters<PutIssueClient>[0]>;
        return: Awaited<ReturnType<PutIssueClient>>;
    };
};
/**
 * @link /api/v1/issues/:id
 */
export function usePutIssue(id: PutIssuePathParams["id"], options: {
    mutation?: UseMutationOptions<PutIssue["response"], PutIssue["error"], PutIssue["request"]>;
    client?: PutIssue["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PutIssue["data"], PutIssue["error"], PutIssue["request"]>({
                method: "put",
                url: `/api/v1/issues/${id}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}