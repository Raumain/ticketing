export type PutIssuePathParams = {
    /**
     * @type string
    */
    id: string;
};

 export type PutIssue200 = {
    /**
     * @type string
    */
    id: string;
};

 export type PutIssueMutationRequest = {
    /**
     * @type string | undefined
    */
    repository_id?: string;
    /**
     * @type string | undefined
    */
    name?: string;
    /**
     * @type string | undefined
    */
    description?: string;
};

 export type PutIssueMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type PutIssueMutation = {
    Response: PutIssueMutationResponse;
    Request: PutIssueMutationRequest;
    PathParams: PutIssuePathParams;
};