/**
 * @class LandmarkRemarkService
 * @property <Object> httpGet
 * @property <Integer> Port
 */
export default class LandmarkRemarkService {
    constructor(HttpGet, Port, ModelsFactory)
    {
        this.httpGet = HttpGet;
        this.port = Port;
        this.modelFactory = ModelsFactory;
    }

    getUserMap() {
        return this.httpGet(`http://localhost:${this.port}/api/UserMap`)
    }
}