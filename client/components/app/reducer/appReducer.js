import {
    REQUEST_USER_MAP,
    REQUEST_USER_MAP_FAILED,
    RECEIVED_USER_MAP
} from '../constants/actionTypes'

const createUserMap = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

const userLandmarks = (state = {isFetching: false, didInvalidate: false, user: {}}, action) => {
    switch (action.type) {
        case REQUEST_USER_MAP:
            return createUserMap(state, {
                isFetching: true,
                didInvalidate: false
            });

        case RECEIVED_USER_MAP:
            return createUserMap(state, {
                isFetching: false,
                didInvalidate: false,
                user: action.user,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
};

const userLandmarksErrors = (state, action) => {
    switch (action.type) {
        case REQUEST_USER_MAP_FAILED:
            return createUserMap(state, {latestError: action.payload});

    }
};

const appReducer = (state = {user: {}, isFetching: false}, action) => {
    switch (action.type) {
        case REQUEST_USER_MAP:
        case RECEIVED_USER_MAP:
            return userLandmarks(state, action);
        case REQUEST_USER_MAP_FAILED:
            return userLandmarksErrors(state, action);
        default:
            return state
    }
};

export default appReducer;
