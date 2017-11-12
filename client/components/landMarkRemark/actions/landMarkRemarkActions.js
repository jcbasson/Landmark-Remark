/**
 * @class LandMarkRemarkActions
 * @desc Class containing actions with data for changing state
 * @property <LandMarkRemarkActionsTypes> ActionTypes
 */
class LandMarkRemarkActions{
    constructor(ActionTypes)
    {
        this.actionTypes = ActionTypes;
    }
    /**
     * @desc Reducer action for updating a landmark focus
     * @param {Integer} landMarkId
     * @param {Boolean} hasFocus
     * @returns {{type: String, landMarkId: Integer, hasFocus: Boolean}}
     */
   updateLandMarkHasFocus(landMarkId, hasFocus){
        return {
            type: this.actionTypes.UPDATE_LANDMARK_FOCUSED_ON,
            landMarkId,
            hasFocus
        }
    }

    /**
     * @desc Reducer action for creating a landmark
     * @param {LandMark} landMark
     * @returns {{type: String, landMark: LandMark}}
     */
    createLandmark(landMark){
        return {
            type: this.actionTypes.CREATE_LANDMARK,
            landMark
        }
    }

    /**
     * @desc Reducer action for updating a landmark
     * @param <Integer> landMarkId
     * @param <String> remarkText
     * @returns {{type: String, landMarkId: Integer, remarkText: String}}
     */
   updateRemark(landMarkId, remarkText){
        return {
            type: this.actionTypes.UPDATE_LANDMARK_REMARK,
            landMarkId,
            remarkText
        }
    }
}

export default LandMarkRemarkActions;

