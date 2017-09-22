import endpoints from '../constants/endpointSettings';

export default class AppService {
    constructor(HttpGet)//inject http get from EPIC
    {
        this.httpGet = HttpGet
    }

    getUserMap() {
        return this.httpGet(endpoints.UserMap);
    }
}