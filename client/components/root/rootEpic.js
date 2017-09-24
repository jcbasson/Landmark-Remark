import {combineEpics} from 'redux-observable';
import {fetchUserLandMarksEpic} from '../app/epics/appEpic';
import {loadGoogleMapsScriptEpic} from '../googleMap/epics/googleMapEpic';

export const rootEpic = combineEpics(fetchUserLandMarksEpic, loadGoogleMapsScriptEpic);