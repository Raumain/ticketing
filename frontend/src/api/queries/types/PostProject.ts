export type PostProject200 = {
    /**
     * @type string
    */
    id: string;
};

 export type PostProjectMutationRequest = {
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    description: string;
};

 export type PostProjectMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type PostProjectMutation = {
    Response: PostProjectMutationResponse;
    Request: PostProjectMutationRequest;
};