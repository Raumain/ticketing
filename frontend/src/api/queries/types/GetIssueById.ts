export type GetIssueByIdPathParams = {
    /**
     * @type string
    */
    id: string;
};

 export type GetIssueById200 = {
    /**
     * @type string
    */
    id: string;
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
    /**
     * @type string
    */
    repository_name: string;
    created_at: (string | string);
    updated_at: (string | string);
};

 export type GetIssueByIdQueryResponse = {
    /**
     * @type string
    */
    id: string;
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
    /**
     * @type string
    */
    repository_name: string;
    created_at: (string | string);
    updated_at: (string | string);
};

 export type GetIssueByIdQuery = {
    Response: GetIssueByIdQueryResponse;
    PathParams: GetIssueByIdPathParams;
};