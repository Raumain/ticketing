export type GetAllProjects200 = {
    /**
     * @type string
    */
    id: string;
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

 export type GetAllProjectsQueryResponse = {
    /**
     * @type string
    */
    id: string;
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

 export type GetAllProjectsQuery = {
    Response: GetAllProjectsQueryResponse;
};