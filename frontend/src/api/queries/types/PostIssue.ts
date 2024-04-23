export type PostIssue200 = {
    /**
     * @type string
    */
    id: string;
};

 export type PostIssueMutationRequest = {
    /**
     * @type string
    */
    repository_id: string;
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    description: string;
};

 export type PostIssueMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type PostIssueMutation = {
    Response: PostIssueMutationResponse;
    Request: PostIssueMutationRequest;
};