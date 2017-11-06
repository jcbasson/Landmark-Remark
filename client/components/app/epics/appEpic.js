import {
    requestUserMap,
    requestUserLandmarksFailed,
    receivedUserLandmarks
} from '../actions/appActions';
import ResponseTransformer from '../transformers/responseTransformer';

export const fetchUserLandMarksEpic = (action$, store, {landmarkRemarkService, Observable}) =>
{
    const requestUserActionType = requestUserMap().type;
    return action$.ofType(requestUserActionType).mergeMap(() =>
        landmarkRemarkService.getUserMap().map(response => (receivedUserLandmarks(ResponseTransformer.userMap(response)))).catch(error => Observable.of(requestUserLandmarksFailed(error)))
    )
};