import {combineEpics} from 'redux-observable';
import {fetchUserLandMarksEpic} from '../app/epics/appEpic';

const rootEpic = combineEpics(fetchUserLandMarksEpic);

export default rootEpic;