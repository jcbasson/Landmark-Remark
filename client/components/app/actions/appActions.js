import {
    REQUEST_USER_MAP,
    REQUEST_USER_MAP_FAILED,
    RECEIVED_USER_MAP
} from '../constants/actionTypes'

export const requestUserMap = () => {
    return {
        type: REQUEST_USER_MAP
    }
};

export const requestUserLandmarksFailed = (error) => {
    return {
        type: REQUEST_USER_MAP_FAILED,
        payload: error,
        error: true
    }
};

export const receivedUserLandmarks = (user) => {
    return {
        type: RECEIVED_USER_MAP,
        user,
        receivedAt: Date.now()
    }
};