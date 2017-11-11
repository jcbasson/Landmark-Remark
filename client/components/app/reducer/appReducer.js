import {
    REQUEST_USER_MAP,
    REQUEST_USER_MAP_FAILED,
    RECEIVED_USER_MAP
} from '../constants/actionTypes';

import {
    UPDATE_LANDMARK_FOCUSED_ON,
    CREATE_LANDMARK,
    UPDATE_LANDMARK_REMARK
}from '../../landMarkRemark/constants/actionTypes';

import {
    landMarkRemark
}from '../../landMarkRemark/reducers/landMarkRemarkReducer'

const userMap = (state = {isFetching: false, didInvalidate: false, userMap: {}}, action) => {
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
        case REQUEST_USER_MAP_FAILED:
            return createNextState(state, {latestError: action.payload});
        default:
            return state
    }
};

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

const appReducer = (state = {userMap: {}, isFetching: false, didInvalidate: false}, action) => {
    switch (action.type) {
        case REQUEST_USER_MAP:
        case RECEIVED_USER_MAP:
        case REQUEST_USER_MAP_FAILED:
            return userMap(state, action);
        case GOOGLE_MAP_LOADING_SUCCESS:
        case GOOGLE_MAP_LOADING_FAILED:
        case GOOGLE_MAP_LOADING:
            return googleMapLoadingState(state, action);
        case MARK_USER_CURRENT_LOCATION:
            return googleMapMarking(state, action);
        case UPDATE_LANDMARK_FOCUSED_ON:
        case CREATE_LANDMARK:
        case UPDATE_LANDMARK_REMARK:
            return landMarkRemark(state, action);
        default:
            return state
    }
};
export default appReducer;
