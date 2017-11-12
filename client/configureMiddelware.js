import {Observable} from 'rxjs';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {createLogger} from 'redux-logger'
import {fetchUserLandMarksEpic} from './components/app/epics/appEpic';
import {loadGoogleMapsScriptEpic} from './components/googleMap/epics/googleMapEpic';
import {landmarkRemarkService} from './configureServices';
import appActions from "./configureActions";

//Combine all the application epics
const appEpic = combineEpics(fetchUserLandMarksEpic, loadGoogleMapsScriptEpic);
//Create redux-observable Epic middleware
export const epicMiddleware = createEpicMiddleware(appEpic, {
    dependencies: {
        landmarkRemarkService: landmarkRemarkService,
        Observable,
        actions: appActions
    }
});
//Create logging middleware for tracing
export const loggerMiddleware = createLogger();