import moment from 'moment';
import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './components/root/rootEpic';
import UserMap from './models/userMapModel';
import User from './models/userMapModel';
import LandMark from './models/landMarkModel';
import Remark from './models/remarkModel';
import OthersRemark from './models/othersRemarkModel';
import DateFormats from './constants/dateFormats';
import LandmarkRemarkService from './services/landmarkRemarkService';
import ResponseTransformerService from './services/responseTransformerService';
import ModelService from './services/modelService';

//Create model service
export const modelService = new ModelService(moment, UserMap, User, LandMark, Remark, OthersRemark, DateFormats);
//Create response transformer service
export const responseTransformerService = new ResponseTransformerService(modelService);
//Create landmark remark http service
export const landmarkRemarkService = new LandmarkRemarkService(ajax.getJSON, 60726, responseTransformerService);
//Create redux-observable Epic
export const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
        landmarkRemarkService: landmarkRemarkService,
        Observable
    }
});