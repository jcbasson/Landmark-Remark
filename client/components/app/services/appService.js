import {UserLandMarksEndPoint} from '../constants/endpointSettings';

export default class AppService {
    constructor(HttpGet)//inject http get from EPIC
    {
        this.httpGet = HttpGet
    }

    getUserLandmarks() {
        return this.httpGet(UserLandMarksEndPoint);
    }
}