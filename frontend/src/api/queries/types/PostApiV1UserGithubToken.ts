export type PostApiV1UserGithubToken200 = {
    /**
     * @type string
    */
    id: string;
};

 export type PostApiV1UserGithubTokenMutationRequest = {
    /**
     * @type string
    */
    id: string;
    /**
     * @type string
    */
    github_token: string;
};

 export type PostApiV1UserGithubTokenMutationResponse = {
    /**
     * @type string
    */
    id: string;
};

 export type PostApiV1UserGithubTokenMutation = {
    Response: PostApiV1UserGithubTokenMutationResponse;
    Request: PostApiV1UserGithubTokenMutationRequest;
};