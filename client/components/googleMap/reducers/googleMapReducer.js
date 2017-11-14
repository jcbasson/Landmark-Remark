/**
 * @class GoogleMapReducer
 * @desc Class containing reducer actions for creating the new state
 * @property <Immutable> immutable
 * @property <GoogleMapActionTypes> ActionTypes
 */
class GoogleMapReducer {
    constructor(Immutable, ActionTypes) {
        this.immutable = Immutable;
        this.actionTypes = ActionTypes;
    }

    /**
     * @desc Creates a new state based on Google Map Loading Actions
     * @param {Immutable.Map} state
     * @param {Object} action
     * @returns {Object}
     */
    loadingAction(state, action) {
        const actionTypes = this.actionTypes;
        switch (action.type) {
            case actionTypes.GOOGLE_MAP_LOADING_SUCCESS:
            case actionTypes.GOOGLE_MAP_LOADING_FAILED:
            case actionTypes.GOOGLE_MAP_LOADING:
                return state.mergeDeep({
                    userMap: {
                        googleMapIsLoading: action.googleMapIsLoading,
                        googleMapLoaded: action.googleMapLoaded
                    }
                });
            default:
                return state
        }
    }
}

export default GoogleMapReducer;