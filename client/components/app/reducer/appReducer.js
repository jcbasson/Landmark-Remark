import {
    REQUEST_USER_LANDMARKS,
    REQUEST_USER_LANDMARKS_FAILED,
    RECEIVED_USER_LANDMARKS
} from '../constants/actionTypes'

const createUser = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};

const userLandmarks = (state = {isFetching: false, didInvalidate: false, user: {}}, action) => {
    switch (action.type) {
        case REQUEST_USER_LANDMARKS:
            return createUser(state, {
                isFetching: true,
                didInvalidate: false
            });

        case RECEIVED_USER_LANDMARKS:
            return createUser(state, {
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
        case REQUEST_USER_LANDMARKS_FAILED:
            return createUser(state, {latestError: action.payload});

    }
};

const appReducer = (state = {user: {}, isFetching: false}, action) => {
    switch (action.type) {
        case REQUEST_USER_LANDMARKS:
        case RECEIVED_USER_LANDMARKS:
            return userLandmarks(state, action);
        case REQUEST_USER_LANDMARKS_FAILED:
            return userLandmarksErrors(state, action);
        default:
            return state
    }
};

export default appReducer;
