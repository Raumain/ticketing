export type PostRepository200 = {
    /**
     * @type string
    */
    id: string;
};

 export type PostRepositoryMutationRequest = {
    /**
     * @type string
    */
    project_id: string;
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    description: string;
};

 export type PostRepositoryMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type PostRepositoryMutation = {
    Response: PostRepositoryMutationResponse;
    Request: PostRepositoryMutationRequest;
};