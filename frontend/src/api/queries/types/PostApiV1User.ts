export type PostApiV1User200 = {
    /**
     * @type string
    */
    id: string;
};

 export type PostApiV1UserMutationRequest = {
    /**
     * @type string
    */
    email: string;
    /**
     * @type string
    */
    password: string;
};

 export type PostApiV1UserMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type PostApiV1UserMutation = {
    Response: PostApiV1UserMutationResponse;
    Request: PostApiV1UserMutationRequest;
};