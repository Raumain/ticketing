export type GetAllRepositories200 = {
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
    /**
     * @type string
    */
    project_id: string;
    created_at: (string | string);
    updated_at: (string | string);
}[];

 export type GetAllRepositoriesQueryResponse = {
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
    /**
     * @type string
    */
    project_id: string;
    created_at: (string | string);
    updated_at: (string | string);
}[];

 export type GetAllRepositoriesQuery = {
    Response: GetAllRepositoriesQueryResponse;
};