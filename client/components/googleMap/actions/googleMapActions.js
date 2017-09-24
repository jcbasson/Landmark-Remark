import {
    GOOGLE_MAP_LOADING,
    GOOGLE_MAP_LOADING_FAILED,
    GOOGLE_MAP_LOADING_SUCCESS,
    MARK_USER_CURRENT_LOCATION
} from '../constants/actionTypes'

export const googleMapLoading = (googleMapLoadedCallbackFunc) => {
    return {
        type: GOOGLE_MAP_LOADING,
        googleMapIsLoading: true,
        googleMapLoaded: false,
        googleMapLoadedCallbackFunc: googleMapLoadedCallbackFunc
    }
};

export const googleMapLoadingFailed = () => {
    return {
        type: GOOGLE_MAP_LOADING_FAILED,
        googleMapIsLoading: false,
        googleMapLoaded: false
    }
};

export const googleMapLoadingSuccess = () => {
    return {
        type: GOOGLE_MAP_LOADING_SUCCESS,
        googleMapIsLoading: false,
        googleMapLoaded: true
    }
};

export const markUserCurrentLocation = () => {
    return {
        type: MARK_USER_CURRENT_LOCATION,
        googleMapIsLoading: false,
        googleMapLoaded: true
    }
};