import {
    requestUserMap,
    requestUserLandmarksFailed,
    receivedUserLandmarks
} from '../actions/appActions';

export const fetchUserLandMarksEpic = (action$, store, {landmarkRemarkService, Observable}) =>
{
    const requestUserActionType = requestUserMap().type;
    return action$.ofType(requestUserActionType).mergeMap(() =>
        landmarkRemarkService.getUserMap().map(userMap => (receivedUserLandmarks(userMap))).catch(error => Observable.of(requestUserLandmarksFailed(error)))
    )
};