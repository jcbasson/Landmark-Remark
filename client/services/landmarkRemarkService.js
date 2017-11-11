/**
 * @class LandmarkRemarkService
 * @property <Object> httpGet
 * @property <Integer> Port
 * @property <ResponseTransformer> ResponseTransformer
 */
export default class LandmarkRemarkService {
    constructor(HttpGet, Port)
    {
        this.httpGet = HttpGet;
        this.port = Port;
    }
    /**
     * @desc Executes a request for a UserMap and transforms the response
     * @returns <Observable>
     */
    getUserMap() {
        return this.httpGet(`http://localhost:${this.port}/api/UserMap`);
    }
}