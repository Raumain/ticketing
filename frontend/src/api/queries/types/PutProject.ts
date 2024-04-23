export type PutProjectPathParams = {
    /**
     * @type string
    */
    id: string;
};

 export type PutProject200 = {
    /**
     * @type string
    */
    id: string;
};

 export type PutProjectMutationRequest = {
    /**
     * @type string | undefined
    */
    name?: string;
    /**
     * @type string | undefined
    */
    description?: string;
};

 export type PutProjectMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type PutProjectMutation = {
    Response: PutProjectMutationResponse;
    Request: PutProjectMutationRequest;
    PathParams: PutProjectPathParams;
};