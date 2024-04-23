export type GetApiV1UserByIdPathParams = {
    /**
     * @type string
    */
    id: string;
};

 export type GetApiV1UserById200 = {
    /**
     * @type string
    */
    id: string;
    github_token: (null | string);
    created_at: (string | string);
    updated_at: (string | string);
};

 export type GetApiV1UserByIdQueryResponse = {
    /**
     * @type string
    */
    id: string;
    github_token: (null | string);
    created_at: (string | string);
    updated_at: (string | string);
};

 export type GetApiV1UserByIdQuery = {
    Response: GetApiV1UserByIdQueryResponse;
    PathParams: GetApiV1UserByIdPathParams;
};