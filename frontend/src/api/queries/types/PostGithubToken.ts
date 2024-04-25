export type PostGithubToken200 = {
    /**
     * @type string
    */
    id: string;
};

 export type PostGithubTokenMutationRequest = {
    /**
     * @type string
    */
    id: string;
    /**
     * @type string
    */
    authorization: string;
};

 export type PostGithubTokenMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type PostGithubTokenMutation = {
    Response: PostGithubTokenMutationResponse;
    Request: PostGithubTokenMutationRequest;
};