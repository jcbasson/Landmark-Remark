/**
 * @class LandMarkRemarkReducer
 * @desc Class containing reducer actions for creating the new state
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
    landMarkAction(state, action) {
        switch (action.type) {
            case this.actionTypes.UPDATE_LANDMARK_FOCUSED_ON:
                //Set the land mark that has focus
                return state.updateIn(['userMap', 'user', 'landMarks'], landMarks => {
                    const updateLandMarks = landMarks.map(landMark => {
                        let landMarkFocusStatus = false;
                        const landMarkId = landMark.get('id');
                        if (landMarkId === action.landMarkId) {
                            landMarkFocusStatus = action.hasFocus;
                        }
                        const updatedLandmark = landMark.set('hasFocus', landMarkFocusStatus);
                        return updatedLandmark;
                    });
                    return updateLandMarks;
                });
            case this.actionTypes.REFRESH_ALL_LANDMARK_HAS_FOCUS:
                //Set the all land mark  hasFocus to false
                return state.updateIn(['userMap', 'user', 'landMarks'], landMarks => {
                    const updateLandMarks = landMarks.map(landMark => {
                        const updatedLandmark = landMark.set('hasFocus', false);
                        return updatedLandmark;
                    });
                    return updateLandMarks;
                });
            case this.actionTypes.CREATE_LANDMARK:
                const imLandMark = this.immutable.fromJS(Object.assign({}, action.landMark));
                //Create the new state with the new landmark
                return state.updateIn(['userMap', 'user', 'landMarks'], landMarks => landMarks.push(imLandMark));
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
    remarkAction(state, action) {
        switch (action.type) {
            case this.actionTypes.UPDATE_LANDMARK_REMARK:
                //Create the new state with the specified landmark updated remark text
                return state.updateIn(['userMap', 'user', 'landMarks'], landMarks => {
                    const updateLandMarks = landMarks.map(landMark => {
                        const landMarkId = landMark.get('id');
                        let updatedLandmark = landMark;
                        if (landMarkId === action.landMarkId) {
                            updatedLandmark = landMark.setIn(['remark', 'text'], action.remarkText );
                        }
                        return updatedLandmark;
                    });
                    return updateLandMarks;
                });
            default:
                return state
        }
    }
}

export default LandMarkRemarkReducer;