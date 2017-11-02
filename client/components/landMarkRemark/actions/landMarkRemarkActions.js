import {
    UPDATE_LANDMARK_FOCUSED_ON,
    UPDATE_LANDMARK_REMARK
} from '../constants/actionTypes'

/**
 * @param <Integer> landMarkId
 * @param <Boolean> hasFocus
 * @returns {{type: String, landMarkId: Integer, hasFocus: Boolean}}
 */
export const updateLandMarkHasFocus = (landMarkId, hasFocus) => {
    return {
        type: UPDATE_LANDMARK_FOCUSED_ON,
        landMarkId,
        hasFocus
    }
};

/**
 * @param <Integer> landMarkId
 * @param <String> remarkText
 * @returns {{type: String, landMarkId: Integer, remarkText: String}}
 */
export const updateRemark = (landMarkId, remarkText) => {
    return {
        type: UPDATE_LANDMARK_REMARK,
        landMarkId,
        remarkText
    }
};
