import {
    UPDATE_LANDMARK_FOCUSED_ON
} from '../constants/actionTypes'

/**
 * @desc LandMarkRemark Component Reducer
 * @param <State> state
 * @param <Object> action
 */
export const landMarkRemark = (state = {userMap: {}}, action) => {
    switch (action.type) {
        case UPDATE_LANDMARK_FOCUSED_ON:
            let {userMap} = state;
            debugger;
            //Set the land mark that has focus
            userMap.user.landMarks = setLandMarkHasFocus(action.landMarkId, userMap.user.landMarks);
            //Create the new state with the landmark that has focus
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
 */
const setLandMarkHasFocus = (landMarkId, landMarks) => {
    const landMarksLength = landMarks.length;
    for (let i = 0; i < landMarksLength; i++) {
        let landMark = landMarks[i];
        landMark.hasFocus = landMark.id === landMarkId;
    }
    return landMarks;
};

const createNextState = (state, appProperties) => {
    return Object.assign({},
        state, appProperties);
};