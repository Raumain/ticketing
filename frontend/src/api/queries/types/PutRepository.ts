export type PutRepositoryPathParams = {
    /**
     * @type string
    */
    id: string;
};

 export type PutRepository200 = {
    /**
     * @type string
    */
    id: string;
};

 export type PutRepositoryMutationRequest = {
    /**
     * @type string | undefined
    */
    name?: string;
    /**
     * @type string | undefined
    */
    description?: string;
};

 export type PutRepositoryMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type PutRepositoryMutation = {
    Response: PutRepositoryMutationResponse;
    Request: PutRepositoryMutationRequest;
    PathParams: PutRepositoryPathParams;
};