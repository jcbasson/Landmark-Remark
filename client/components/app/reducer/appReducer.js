import {
    REQUEST_USER_MAP,
    REQUEST_USER_MAP_FAILED,
    RECEIVED_USER_MAP
} from '../constants/actionTypes';
import {
    GOOGLE_MAP_LOADING_SUCCESS,
    GOOGLE_MAP_LOADING_FAILED,
    GOOGLE_MAP_LOADING,
    MARK_USER_CURRENT_LOCATION
} from '../../googleMap/constants/actionTypes'

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

const userLandmarks = (state = {isFetching: false, didInvalidate: false, userMap: {}}, action) => {
    switch (action.type) {
        case REQUEST_USER_MAP:
            return createNextState(state, {
                isFetching: true,
                didInvalidate: false
            });

        case RECEIVED_USER_MAP:
            return createNextState(state, {
                isFetching: false,
                didInvalidate: false,
                userMap: action.userMap,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
};

const userLandmarksErrors = (state, action) => {
    switch (action.type) {
        case REQUEST_USER_MAP_FAILED:
            return createNextState(state, {latestError: action.payload});

    }
};

const googleMapLoadingState = (state = {userMap: {}}, action) => {
    switch (action.type) {
        case GOOGLE_MAP_LOADING_SUCCESS:
        case GOOGLE_MAP_LOADING_FAILED:
        case GOOGLE_MAP_LOADING:
            let {userMap} = state;
            userMap.googleMapIsLoading = action.googleMapIsLoading;
            userMap.googleMapLoaded = action.googleMapLoaded;
            return createNextState(state, {
                userMap
            });
        default:
            return state
    }
};

const googleMapMarking = (state = {userMap: {}}, action) => {
    switch (action.type) {
        case MARK_USER_CURRENT_LOCATION:
            let {userMap} = state;
            userMap.currentLocation = action.currentLocation
            return createNextState(state, {
                userMap
            });
        default:
            return state
    }
};

const appReducer = (state = {userMap: {}, isFetching: false, didInvalidate: false}, action) => {
    switch (action.type) {
        case REQUEST_USER_MAP:
        case RECEIVED_USER_MAP:
            return userLandmarks(state, action);
        case REQUEST_USER_MAP_FAILED:
            return userLandmarksErrors(state, action);
        case GOOGLE_MAP_LOADING_SUCCESS:
        case GOOGLE_MAP_LOADING_FAILED:
        case GOOGLE_MAP_LOADING:
            return googleMapLoadingState(state, action);
        case MARK_USER_CURRENT_LOCATION:
            return googleMapMarking(state, action);
        default:
            return state
    }
};

export default appReducer;
