export const fetchUserLandMarksEpic = (action$, store, {landmarkRemarkService, Observable, actions}) =>
{
    const requestUserActionType = actions.requestUserMap().type;
    return action$.ofType(requestUserActionType).mergeMap(() =>
        landmarkRemarkService.getUserMap().map(userMap => (actions.receivedUserLandmarks(userMap))).catch(error => Observable.of(actions.requestUserLandmarksFailed(error)))
    )
};