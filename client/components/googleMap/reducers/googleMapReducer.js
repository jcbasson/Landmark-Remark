import {
    GOOGLE_MAP_LOADING_SUCCESS,
    GOOGLE_MAP_LOADING_FAILED,
    GOOGLE_MAP_LOADING,
    MARK_USER_CURRENT_LOCATION
} from '../constants/actionTypes'

export const googleMapLoadingState = (state = {userMap: {}}, action) => {
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

export const googleMapMarking = (state = {userMap: {}}, action) => {
    switch (action.type) {
        case MARK_USER_CURRENT_LOCATION:
            let {userMap} = state;
            userMap.currentLocation = action.currentLocation;
            return createNextState(state, {
                userMap
            });
        default:
            return state
    }
};

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};