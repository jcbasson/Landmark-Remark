/**
 * @class LandMarkRemarkReducer
 * @property <Immutable> immutable
 * @property <LandMarkRemarkActionsTypes> actionTypes
 */
class LandMarkRemarkReducer {
    constructor(Immutable, ActionTypes) {
        this.immutable = Immutable;
        this.actionTypes = ActionTypes;
    }

    /**
     * @desc Creates a new state based on landmark related Actions
     * @param {Object} state
     * @param {Object} action
     * @returns {Object}
     */
    landMarkAction(state = {userMap: {}}, action){
        let {userMap} = state;
        let {user} = userMap;
        let {landMarks} = user;
        switch (action.type) {
            case this.actionTypes.UPDATE_LANDMARK_FOCUSED_ON:
                //Set the land mark that has focus
                landMarks = this._setLandMarkHasFocus(action.landMarkId, landMarks, action.hasFocus);
                //Creates new user object with the new landmark array
                user = this.createNextState(user, {landMarks});
                //Create new user map
                userMap = this.createNextState(userMap, {user});
                //Create the new state
                return this.createNextState(state, {
                    userMap
                });
            case this.actionTypes.CREATE_LANDMARK:
                //Set the other landmark focus status to false
                landMarks = this._setLandMarkHasFocus(null, landMarks, action.hasFocus);
                //Creates new list of landmarks array with the new landmark
                landMarks = [...landMarks, action.landMark];
                //Creates new user object with the new landmark array
                user = this.createNextState(user, {landMarks});
                //Create new user map
                userMap = this.createNextState(userMap, {user});
                //Create the new state
                return this.createNextState(state, {
                    userMap
                });
            default:
                return state
        }
    };
    /**
     * @desc Creates a new state based on landmark remark related Actions
     * @param {Object} state
     * @param {Object} action
     * @returns {Object}
     */
    remarkAction(state = {userMap: {}}, action)
    {   let {userMap} = state;
        let {user} = userMap;
        let {landMarks} = user;
        switch (action.type) {
            case this.actionTypes.UPDATE_LANDMARK_REMARK:
                //Update the land mark remark text
                landMarks = this._updateRemark(action.landMarkId, landMarks, action.remarkText);
                //Creates new user object with the new landmark array
                user = this.createNextState(user, {landMarks});
                //Create new user map
                userMap = this.createNextState(userMap, {user});
                //Create the new state
                return this.createNextState(state, {
                    userMap
                });
        }
    }

    /**
     * @desc Loops through the user landmarks and update their has focus status
     * @param {Integer} landMarkId
     * @param {Array<LandMarkModel>} landMarks
     * @param {Boolean} hasFocus
     * @returns {Array<LandMark>}
     */
    _setLandMarkHasFocus(landMarkId, landMarks, hasFocus){
        const landMarksLength = landMarks.length;
        const updatedLandMarks = [];
        for (let i = 0; i < landMarksLength; i++) {
            const landMark = landMarks[i];
            let landMarkFocusStatus = false;
            if (landMark.id === landMarkId) {
                landMarkFocusStatus = hasFocus;
            }
            updatedLandMarks.push(this.createNextState(landMark, {hasFocus: landMarkFocusStatus}));
        }
        return updatedLandMarks;
    }

    /**
     * @desc Loops through the user landmarks updates the selected landmarks remark text
     * @param {Integer} landMarkId
     * @param {Array<LandMark>} landMarks
     * @param {String} remarkText
     * @returns {Array<LandMark>}
     */
    _updateRemark(landMarkId, landMarks, remarkText){
        const landMarksLength = landMarks.length;
        const updatedLandMarks = [];
        for (let i = 0; i < landMarksLength; i++) {
            const landMark = landMarks[i];
            let mutatedLandMark = null;
            if (landMark.id === landMarkId) {
                const {remark} = landMark;
                const mutatedRemark = this.createNextState(remark, {text: remarkText});
                mutatedLandMark = this.createNextState(landMark, {remark: mutatedRemark});
            }
            else {
                mutatedLandMark = this.createNextState(Object, landMark);
            }
            updatedLandMarks.push(mutatedLandMark);
        }
        return updatedLandMarks;
    }

    /**
     * @desc Creates a copy of a specified TYPE object with the specified properties
     * @param {Type} type
     * @param {Object} state
     * @param {Object} appProperties
     * @returns {Object}
     */
    createNextState(state, appProperties){
        return Object.assign({},
            state, appProperties);
    }
}

export default LandMarkRemarkReducer;

