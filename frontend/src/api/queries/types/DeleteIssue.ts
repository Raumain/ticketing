export type DeleteIssuePathParams = {
    /**
     * @type string
    */
    id: string;
};

 export type DeleteIssue200 = {
    /**
     * @type string
    */
    id: string;
};

 export type DeleteIssueMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type DeleteIssueMutation = {
    Response: DeleteIssueMutationResponse;
    PathParams: DeleteIssuePathParams;
};