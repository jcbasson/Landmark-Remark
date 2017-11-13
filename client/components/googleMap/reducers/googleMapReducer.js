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
     * @param {Object} state
     * @param {Object} action
     * @returns {Object}
     */
    loadingAction(state = {}, action) {
        const actionTypes = this.actionTypes;
        switch (action.type) {
            case actionTypes.GOOGLE_MAP_LOADING_SUCCESS:
            case actionTypes.GOOGLE_MAP_LOADING_FAILED:
            case actionTypes.GOOGLE_MAP_LOADING:
                let {userMap} = state;
                userMap = this.createNextState(userMap, {
                    googleMapIsLoading: action.googleMapIsLoading,
                    googleMapLoaded: action.googleMapLoaded
                });
                return this.createNextState(state, {
                    userMap
                });
            default:
                return state
        }
    }

    /**
     * @desc Creates a copy of a specified TYPE object with the specified properties
     * @param <Object> state
     * @param <Object> appProperties
     */
    createNextState(state, appProperties){
        return Object.assign({},
            state, appProperties);
    }
}

export default GoogleMapReducer;
