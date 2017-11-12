/**
 * @class GoogleMapActions
 * @desc Class containing actions with data for changing state
 * @property <GoogleMapActionTypes> ActionTypes
 */
class GoogleMapActions {
    constructor(ActionTypes) {
        this.actionTypes = ActionTypes;
    }

    /**
     * @desc Reducer action for loading a google map
     * @param {Function} googleMapLoadedCallbackFunc
     * @returns {Object<type: String, googleMapIsLoading: Boolean, googleMapLoaded: Boolean, googleMapLoadedCallbackFunc: Function>}
     */
    googleMapLoading(googleMapLoadedCallbackFunc) {
        return {
            type: this.actionTypes.GOOGLE_MAP_LOADING,
            googleMapIsLoading: true,
            googleMapLoaded: false,
            googleMapLoadedCallbackFunc: googleMapLoadedCallbackFunc
        }
    }

    /**
     * @desc Reducer action for google map loading failed
     * @returns {Object<type: String, googleMapIsLoading: Boolean, googleMapLoaded: Boolean>}
     */
    googleMapLoadingFailed() {
        return {
            type: this.actionTypes.GOOGLE_MAP_LOADING_FAILED,
            googleMapIsLoading: false,
            googleMapLoaded: false
        }
    }

    /**
     * @desc Reducer action for google map loaded successfully
     * @returns {Object<type: String, googleMapIsLoading: Boolean, googleMapLoaded: Boolean>}
     */
    googleMapLoadingSuccess() {
        return {
            type: this.actionTypes.GOOGLE_MAP_LOADING_SUCCESS,
            googleMapIsLoading: false,
            googleMapLoaded: true
        }
    }
}
export default GoogleMapActions;

