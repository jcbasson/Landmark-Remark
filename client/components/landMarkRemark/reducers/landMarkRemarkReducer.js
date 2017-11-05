import {
    UPDATE_LANDMARK_FOCUSED_ON,
    CREATE_LANDMARK,
    UPDATE_LANDMARK_REMARK
} from '../constants/actionTypes';
import UserMap from '../../../models/userMapModel';
import User from '../../../models/userModel';
import LandMark from '../../../models/landMarkModel';
import Remark from '../../../models/remarkModel';

/**
 * @desc LandMarkRemark Component Reducer
 * @param <State> state
 * @param <Object> action
 */
export const landMarkRemark = (state = {userMap: {}}, action) => {
    let {userMap} = state;
    let {user} = userMap;
    let {landMarks} = user;
    switch (action.type) {
        case UPDATE_LANDMARK_FOCUSED_ON:
            //Set the land mark that has focus
            landMarks = setLandMarkHasFocus(action.landMarkId, landMarks, action.hasFocus);
            //Creates new user object with the new landmark array
            user = createNextState(User, user, {landMarks});
            //Create new user map
            userMap = createNextState(UserMap, userMap, {user});
            //Create the new state
            return createNextState(Object, state, {
                userMap
            });
        case CREATE_LANDMARK:
            //Set the other landmark focus status to false
            landMarks = setLandMarkHasFocus(null, landMarks, action.hasFocus);
            //Creates new list of landmarks array with the new landmark
            landMarks = [...landMarks, action.landMark];
            //Creates new user object with the new landmark array
            user = createNextState(User, user, {landMarks});
            //Create new user map
            userMap = createNextState(UserMap, userMap, {user});
            //Create the new state
            return createNextState(Object, state, {
                userMap
            });
        case UPDATE_LANDMARK_REMARK:
            //Update the land mark remark text
            landMarks = updateRemark(action.landMarkId, landMarks, action.remarkText);
            //Creates new user object with the new landmark array
            user = createNextState(User, user, {landMarks});
            //Create new user map
            userMap = createNextState(UserMap, userMap, {user});
            //Create the new state
            return createNextState(Object, state, {
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
    const updatedLandMarks = [];
    for (let i = 0; i < landMarksLength; i++) {
        const landMark = landMarks[i];
        let landMarkFocusStatus = false;
        if (landMark.id === landMarkId) {
            landMarkFocusStatus = hasFocus;
        }
        updatedLandMarks.push(createNextState(LandMark, landMark, {hasFocus: landMarkFocusStatus}));
    }
    return updatedLandMarks;
};

/**
 * @desc Loops through the user landmarks updates the selected landmarks remark text
 * @param <Integer> landMarkId
 * @param <Array<LandMark>> landMarks
 * @param <String> remarkText
 */
const updateRemark = (landMarkId, landMarks, remarkText) => {
    const landMarksLength = landMarks.length;
    const updatedLandMarks = [];
    for (let i = 0; i < landMarksLength; i++) {
        const landMark = landMarks[i];
        let mutatedLandMark = null;
        if (landMark.id === landMarkId) {
            const {remark} = landMark;
            const mutatedRemark = createNextState(Remark, remark, {text: remarkText});
            mutatedLandMark = createNextState(LandMark, landMark, {remark: mutatedRemark});
        }
        else {
            mutatedLandMark = createNextState(LandMark, landMark);
        }
        updatedLandMarks.push(mutatedLandMark);
    }
    return updatedLandMarks;
};

/**
 * @desc Creates a copy of a specified TYPE object with the specified properties
 * @param <Type> type
 * @param <Object> state
 * @param <Object> appProperties
 */
const createNextState = (type, state, appProperties) => {
    return Object.assign(new type,
        state, appProperties);
};
