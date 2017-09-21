import {
    REQUEST_USER_LANDMARKS,
    REQUEST_USER_LANDMARKS_FAILED,
    RECEIVED_USER_LANDMARKS
} from '../constants/actionTypes'

export const requestUserLandmarks = () => {
    return {
        type: REQUEST_USER_LANDMARKS
    }
};

export const requestUserLandmarksFailed = (error) => {
    return {
        type: REQUEST_USER_LANDMARKS_FAILED,
        payload: error,
        error: true
    }
};

export const receivedUserLandmarks = (user) => {

    return {
        type: RECEIVED_USER_LANDMARKS,
        user,
        receivedAt: Date.now()
    }
};