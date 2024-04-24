export type GetRepositoryByIdPathParams = {
    /**
     * @type string
    */
    id: string;
};

 export type GetRepositoryById200 = {
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
     * @type object
    */
    project: {
        /**
         * @type string
        */
        id: string;
        /**
         * @type string
        */
        name: string;
    };
    /**
     * @type array
    */
    issues: {
        /**
         * @type string
        */
        id: string;
        /**
         * @type string
        */
        name: string;
    }[];
    /**
     * @type string
    */
    project_id: string;
    created_at: (string | string);
    updated_at: (string | string);
};

 export type GetRepositoryByIdQueryResponse = {
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
     * @type object
    */
    project: {
        /**
         * @type string
        */
        id: string;
        /**
         * @type string
        */
        name: string;
    };
    /**
     * @type array
    */
    issues: {
        /**
         * @type string
        */
        id: string;
        /**
         * @type string
        */
        name: string;
    }[];
    /**
     * @type string
    */
    project_id: string;
    created_at: (string | string);
    updated_at: (string | string);
};

 export type GetRepositoryByIdQuery = {
    Response: GetRepositoryByIdQueryResponse;
    PathParams: GetRepositoryByIdPathParams;
};