import {
    UPDATE_LANDMARK_FOCUSED_ON
} from '../constants/actionTypes'

/**
 * @param landMarkId
 * @param hasFocus
 * @returns {{type, landMarkId: *, hasFocus: *}}
 */
export const updateLandMarkHasFocus = (landMarkId, hasFocus) => {
    return {
        type: UPDATE_LANDMARK_FOCUSED_ON,
        landMarkId,
        hasFocus
    }
};