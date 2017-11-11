/**
 * @class GoogleMapReducer
 * @property <Immutable> Immutable
 */
class GoogleMapReducer {
    constructor(Immutable) {
        this.Immutable = Immutable;
    }

    /**
     * @desc static field ActionTypes
     */
    static get ActionTypes() {
        return {
            GOOGLE_MAP_LOADING_SUCCESS: 'GOOGLE_MAP_LOADING_SUCCESS',
            GOOGLE_MAP_LOADING_FAILED: 'GOOGLE_MAP_LOADING_FAILED',
            GOOGLE_MAP_LOADING: 'GOOGLE_MAP_LOADING',
            MARK_USER_CURRENT_LOCATION: 'MARK_USER_CURRENT_LOCATION',
        }
    }

    /**
     * @desc Creates a new state based on Google Map Loading Actions
     * @param {Object} state
     * @param {Object} action
     * @returns {Object}
     */
    loadingAction(state = {}, action) {
        switch (action.type) {
            case GoogleMapReducer.ActionTypes.GOOGLE_MAP_LOADING_SUCCESS:
            case GoogleMapReducer.ActionTypes.GOOGLE_MAP_LOADING_FAILED:
            case GoogleMapReducer.ActionTypes.GOOGLE_MAP_LOADING:
                let {userMap} = state;
                userMap = createNextState(Object, userMap, {
                    googleMapIsLoading: action.googleMapIsLoading,
                    googleMapLoaded: action.googleMapLoaded
                });
                return this.createNextState(Object, state, {
                    userMap
                });
            default:
                return state
        }
    }

    /**
     * @desc Creates a new state based on Google Map Marking Actions
     * @param {Object} state
     * @param {Object} action
     * @returns {Object}
     */
    markingAction(state = {userMap: {}}, action) {
        switch (action.type) {
            case GoogleMapReducer.ActionTypes.MARK_USER_CURRENT_LOCATION:
                let {userMap} = state;
                userMap = this.createNextState(Object, userMap, {currentLocation: action.currentLocation});
                return this.createNextState(Object, state, {
                    userMap
                });
            default:
                return state
        }
    };

    /**
     * @desc Creates a copy of a specified TYPE object with the specified properties
     * @param <Type> type
     * @param <Object> state
     * @param <Object> appProperties
     */
    createNextState(type, state, appProperties){
        return Object.assign(new type,
            state, appProperties);
    }
}

export default GoogleMapReducer;
