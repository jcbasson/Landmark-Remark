import {
    googleMapLoading,
    googleMapLoadingFailed,
    googleMapLoadingSuccess
} from '../actions/googleMapActions';
import LoadScript from '../helpers/scriptLoader';
import generateGoogleApiUrl from '../helpers/gooleApiUrlGenerator'
import endpoints from '../constants/endpointSettings';
import GoogleApiOptions from '../models/googleApiOptions';


export const loadGoogleMapsScriptEpic = (action$, store, {getJSON, Observable}) => {

    const googleMapLoadingActionType = googleMapLoading().type;
    return action$.ofType(googleMapLoadingActionType).mergeMap((action) =>
    {
        const currentState = store.getState();
        const {googleMapLoadedCallbackFunc}  = action;
        if(currentState && currentState.appReducer && currentState.appReducer.userMap && currentState.appReducer.userMap.mapApiKey && googleMapLoadedCallbackFunc)
        {
            const mapApiKey = currentState.appReducer.userMap.mapApiKey;
            let googleApiOptions = createGoogleApiOptions(mapApiKey);
            let googleMapApiUrl = generateGoogleApiUrl(googleApiOptions);
            return Observable.fromPromise(LoadScript(googleMapApiUrl, googleMapLoadedCallbackFunc))
                .map(response => (googleMapLoadingSuccess())).catch(error => (googleMapLoadingFailed()))
        }
    })
};

const createGoogleApiOptions = (mapApiKey) => {

    let googleApiOptions = new GoogleApiOptions();
    googleApiOptions.url = endpoints.googleMapUrl;
    googleApiOptions.key = mapApiKey;
    googleApiOptions.language = 'en';

    return googleApiOptions;
};