/**
 * @class LandmarkRemarkService
 * @property <Object> httpGet
 * @property <Integer> Port
 * @property <ResponseTransformer> ResponseTransformer
 */
export default class LandmarkRemarkService {
    constructor(HttpGet, Port, ResponseTransformer)
    {
        this.httpGet = HttpGet;
        this.port = Port;
        this.responseTransformer = ResponseTransformer;
    }
    /**
     * @desc Executes a request for a UserMap and transforms the response
     * @returns <Observable>
     */
    getUserMap() {
        return this.httpGet(`http://localhost:${this.port}/api/UserMap`).map(response => this.responseTransformer.createUserMapFromResponse(response));
    }
}