import {
    UPDATE_LANDMARK_FOCUSED_ON,
    UPDATE_LANDMARK_REMARK
} from '../constants/actionTypes'

/**
 * @desc LandMarkRemark Component Reducer
 * @param <State> state
 * @param <Object> action
 */
export const landMarkRemark = (state = {userMap: {}}, action) => {
    let {userMap} = state;
    switch (action.type) {
        case UPDATE_LANDMARK_FOCUSED_ON:
            //Set the land mark that has focus
            userMap.user.landMarks = setLandMarkHasFocus(action.landMarkId, userMap.user.landMarks, action.hasFocus);
            //Create the new state
            return createNextState(state, {
                userMap
            });
        case UPDATE_LANDMARK_REMARK:
            //Update the land mark remark text
            userMap.user.landMarks = updateRemark(action.landMarkId, userMap.user.landMarks, action.remarkText);
            //Create the new state
            return createNextState(state, {
                userMap
            });
        default:
            return state
    }
};

/**
 * @desc Loops through the user landmarks and update their has focus status
 * @param <Integer> landMarkId
 * @param <Array<LandMarkModel>> landMarks
 * @param <Boolean> hasFocus
 */
const setLandMarkHasFocus = (landMarkId, landMarks, hasFocus) => {
    const landMarksLength = landMarks.length;
    for (let i = 0; i < landMarksLength; i++) {
        let landMark = landMarks[i];
        if(landMark.id === landMarkId)
        {
            landMark.hasFocus = hasFocus;
        }
        else
        {
            landMark.hasFocus = false;
        }
    }
    return landMarks;
};

/**
 * @desc Loops through the user landmarks updates the selected landmarks remark text
 * @param <Integer> landMarkId
 * @param <Array<LandMarkModel>> landMarks
 * @param <String> remarkText
 */
const updateRemark = (landMarkId, landMarks, remarkText) => {
    const landMarksLength = landMarks.length;
    for (let i = 0; i < landMarksLength; i++) {
        const landMark = landMarks[i];
        if(landMark.id === landMarkId)
        {
            landMark.remark.text = remarkText;
            return landMarks;
        }
    }
    return landMarks;
};

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};
