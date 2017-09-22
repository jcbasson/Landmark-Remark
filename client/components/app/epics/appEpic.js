import {
    requestUserMap,
    requestUserLandmarksFailed,
    receivedUserLandmarks
} from '../actions/appActions';
import AppService from  '../services/appService';
import ResponseTransformer from '../transformers/responseTransformer';

export const fetchUserLandMarksEpic = (action$, store, {getJSON, Observable}) =>
{
    const appService = new AppService(getJSON);
    const requestUserActionType = requestUserMap().type;
    return action$.ofType(requestUserActionType).mergeMap(() =>
        appService.getUserMap().map(response => (receivedUserLandmarks(ResponseTransformer.userMap(response)))).catch(error => Observable.of(requestUserLandmarksFailed(error)))
    )
};