import moment from 'moment';
import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import UserMap from './models/userMapModel';
import User from './models/userMapModel';
import LandMark from './models/landMarkModel';
import Remark from './models/remarkModel';
import OthersRemark from './models/othersRemarkModel';
import DateFormats from './constants/dateFormats';
import LandmarkRemarkService from './services/landmarkRemarkService';
import ModelService from './services/modelService';
import {fetchUserLandMarksEpic} from './components/app/epics/appEpic';
import {loadGoogleMapsScriptEpic} from './components/googleMap/epics/googleMapEpic';

//Combine all the application epics
const appEpic = combineEpics(fetchUserLandMarksEpic, loadGoogleMapsScriptEpic);
//Create model service
export const modelService = new ModelService(moment, UserMap, User, LandMark, Remark, OthersRemark, DateFormats);
//Create landmark remark http service
export const landmarkRemarkService = new LandmarkRemarkService(ajax.getJSON, 60726);
//Create redux-observable Epic middleware
export const epicMiddleware = createEpicMiddleware(appEpic, {
    dependencies: {
        landmarkRemarkService: landmarkRemarkService,
        Observable,
    }
});