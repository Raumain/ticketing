export type GetAllIssues200 = {
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
    created_at: (string | string);
    updated_at: (string | string);
}[];

 export type GetAllIssuesQueryResponse = {
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
    created_at: (string | string);
    updated_at: (string | string);
}[];

 export type GetAllIssuesQuery = {
    Response: GetAllIssuesQueryResponse;
};