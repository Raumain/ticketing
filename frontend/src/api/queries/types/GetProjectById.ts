export type GetProjectByIdPathParams = {
    /**
     * @type string
    */
    id: string;
};

 export type GetProjectById200 = {
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
     * @type array
    */
    repositories: {
        /**
         * @type string
        */
        id: string;
        /**
         * @type string
        */
        name: string;
    }[];
    created_at: (string | string);
    updated_at: (string | string);
};

 export type GetProjectByIdQueryResponse = {
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
     * @type array
    */
    repositories: {
        /**
         * @type string
        */
        id: string;
        /**
         * @type string
        */
        name: string;
    }[];
    created_at: (string | string);
    updated_at: (string | string);
};

 export type GetProjectByIdQuery = {
    Response: GetProjectByIdQueryResponse;
    PathParams: GetProjectByIdPathParams;
};