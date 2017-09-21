import {
    requestUserLandmarks,
    requestUserLandmarksFailed,
    receivedUserLandmarks
} from '../actions/appActions';
import AppService from  '../services/appService';
import ResponseTransformer from '../transformers/responseTransformer';

export const fetchUserLandMarksEpic = (action$, store, {getJSON, Observable}) =>
{
    const appService = new AppService(getJSON);
    const requestUserActionType = requestUserLandmarks().type;
    return action$.ofType(requestUserActionType).mergeMap(() =>
        appService.getUserLandmarks().map(response => (receivedUserLandmarks(ResponseTransformer.userLandmarks(response)))).catch(error => Observable.of(requestUserLandmarksFailed(error)))
    )
};