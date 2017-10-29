import {
    UPDATE_LANDMARK_FOCUSED_ON
} from '../constants/actionTypes'

export const updateLandMarkHasFocus = (landMarkId) => {
    return {
        type: UPDATE_LANDMARK_FOCUSED_ON,
        landMarkId
    }
};