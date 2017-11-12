/**
 * @class AppActions
 * @desc Class containing actions with data for changing state
 * @property <AppActionTypes> ActionTypes
 * @property <LandMarkRemarkActions> landMarkRemarkActions
 * @property <GoogleMapActions> googleMapActions
 */
class AppActions{
    constructor(ActionTypes, LandMarkRemarkActions, GoogleMapActions)
    {
        this.actionTypes = ActionTypes;
        this.landMarkRemarkActions = LandMarkRemarkActions;
        this.googleMapActions = GoogleMapActions;
    }
    /**
     * @desc Reducer action for making a server UserMap request
     * @returns {Object<type: String>}
     */
    requestUserMap(){
        return {
            type: this.actionTypes.REQUEST_USER_MAP
        }
    }
    /**
     * @desc Reducer action for when a server UserMap request failed
     * @param {Object}error
     * @returns {Object<type: String, payload: Object, error: boolean>}
     */
    requestUserLandmarksFailed(error){
        return {
            type: this.actionTypes.REQUEST_USER_MAP_FAILED,
            payload: error,
            error: true
        }
    }
    /**
     * @desc Reducer action for when a server UserMap request failed
     * @param {UserMap}userMap
     * @returns {Object<type: String, userMap: UserMap, receivedAt: String>}
     */
    receivedUserLandmarks(userMap){
        return {
            type: this.actionTypes.RECEIVED_USER_MAP,
            userMap,
            receivedAt: Date.now()
        }
    }
}
export default AppActions;
