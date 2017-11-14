import LoadScript from '../helpers/scriptLoader';
import generateGoogleApiUrl from '../helpers/gooleApiUrlGenerator'
import endpoints from '../constants/endpointSettings';
import GoogleApiOptions from '../models/googleApiOptions';


export const loadGoogleMapsScriptEpic = (action$, store, {landmarkRemarkService, Observable, actions}) => {
    const {googleMapActions} = actions;
    const googleMapLoadingActionType = googleMapActions.googleMapLoading().type;
    return action$.ofType(googleMapLoadingActionType).mergeMap((action) => {
        //Get current state
        const currentState = store.getState();
        //Get the app reducer
        const {appReducer} = currentState;
        //Get the google map api key
        const mapApiKey = appReducer.getIn(['userMap', 'mapApiKey']);
        //Get the google map script loaded callback function
        const {googleMapLoadedCallbackFunc} = action;
        //Generate google api option object
        const googleApiOptions = createGoogleApiOptions(mapApiKey);
        //Generate the google map script url
        const googleMapApiUrl = generateGoogleApiUrl(googleApiOptions);
        //Load the google map api script
        return Observable.fromPromise(LoadScript(googleMapApiUrl, googleMapLoadedCallbackFunc)).map(response => (googleMapActions.googleMapLoadingSuccess())).catch(error => (googleMapActions.googleMapLoadingFailed()))
    })
};

const createGoogleApiOptions = (mapApiKey) => {

    let googleApiOptions = new GoogleApiOptions();
    googleApiOptions.url = endpoints.googleMapUrl;
    googleApiOptions.key = mapApiKey;
    googleApiOptions.language = 'en';

    return googleApiOptions;
};