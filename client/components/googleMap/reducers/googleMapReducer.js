import {
    GOOGLE_MAP_LOADING_SUCCESS,
    GOOGLE_MAP_LOADING_FAILED,
    GOOGLE_MAP_LOADING,
    MARK_USER_CURRENT_LOCATION
} from '../constants/actionTypes'
import UserMap from '../../../models/userMapModel';

export const googleMapLoadingState = (state = {userMap: {}}, action) => {
    switch (action.type) {
        case GOOGLE_MAP_LOADING_SUCCESS:
        case GOOGLE_MAP_LOADING_FAILED:
        case GOOGLE_MAP_LOADING:
            let {userMap} = state;
            userMap = createNextState(UserMap, userMap, {
                googleMapIsLoading: action.googleMapIsLoading,
                googleMapLoaded: action.googleMapLoaded
            });
            return createNextState(Object, state, {
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
            userMap = createNextState(UserMap, userMap, {currentLocation: action.currentLocation});
            return createNextState(Object, state, {
                userMap
            });
        default:
            return state
    }
};

/**
 * @desc Creates a copy of a specified TYPE object with the specified properties
 * @param <Type> type
 * @param <Object> state
 * @param <Object> appProperties
 */
const createNextState = (type, state, appProperties) => {
    return Object.assign(new type,
        state, appProperties);
};
