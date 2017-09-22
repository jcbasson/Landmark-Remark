import {combineEpics} from 'redux-observable';
import {fetchUserLandMarksEpic} from '../app/epics/appEpic';

export const rootEpic = combineEpics(fetchUserLandMarksEpic);