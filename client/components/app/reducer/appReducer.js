/**
 * @class AppReducer
 * @desc Class that generates the central app reducer to be used by redux store
 * @property <Immutable> immutable
 * @property <GoogleMapActionTypes> ActionTypes
 * @property <LandMarkRemarkReducer> LandMarkRemarkReducer
 * @property <GoogleMapReducer> GoogleMapReducer
 */
class AppReducer {
    constructor(Immutable, ActionTypes, LandMarkRemarkReducer, GoogleMapReducer) {
        this.immutable = Immutable;
        this.actionTypes = ActionTypes;
        this.landMarkRemarkReducer = LandMarkRemarkReducer;
        this.googleMapReducer = GoogleMapReducer;

        /**
         * @desc Creates the central app reducer function to be added to the redux store
         * @param {Object} state
         * @param {Object} action
         * @returns {Object}
         */
        return (state = {userMap: {}, isFetching: false, didInvalidate: false}, action) => {
            console.log(action.type);
            debugger;
            const appActionTypes = this.actionTypes;
            const landmarkRemarkActionTypes = this.landMarkRemarkReducer.actionTypes;
            const googleMapActionTypes = this.googleMapReducer.actionTypes;
            switch (action.type) {
                case appActionTypes.REQUEST_USER_MAP:
                case appActionTypes.RECEIVED_USER_MAP:
                case appActionTypes.REQUEST_USER_MAP_FAILED:
                    return this.userMapAction(state, action);
                case googleMapActionTypes.GOOGLE_MAP_LOADING_SUCCESS:
                case googleMapActionTypes.GOOGLE_MAP_LOADING_FAILED:
                case googleMapActionTypes.GOOGLE_MAP_LOADING:
                    return this.googleMapReducer.loadingAction(state, action);
                case landmarkRemarkActionTypes.UPDATE_LANDMARK_FOCUSED_ON:
                case landmarkRemarkActionTypes.CREATE_LANDMARK:
                    debugger;
                    return this.landMarkRemarkReducer.landMarkAction(state, action);
                case landmarkRemarkActionTypes.UPDATE_LANDMARK_REMARK:
                    return this.landMarkRemarkReducer.remarkAction(state, action);
                default:
                    return state
            }
        };
    }

    /**
     * @desc Creates a new state based on UserMap server requests
     * @param {Object} state
     * @param {Object} action
     * @returns {Object}
     */
    userMapAction(state = {isFetching: false, didInvalidate: false, userMap: {}}, action) {
        const actionTypes = this.actionTypes;
        switch (action.type) {
            case actionTypes.REQUEST_USER_MAP:
                return this.createNextState(state, {
                    isFetching: true,
                    didInvalidate: false
                });
            case actionTypes.RECEIVED_USER_MAP:
                return this.createNextState(state, {
                    isFetching: false,
                    didInvalidate: false,
                    userMap: action.userMap,
                    lastUpdated: action.receivedAt
                });
            case actionTypes.REQUEST_USER_MAP_FAILED:
                return this.createNextState(state, {latestError: action.payload});
            default:
                return state
        }
    }

    /**
     * @desc Creates a copy of an object with the specified properties
     * @param {Object} state
     * @param {Object} appProperties
     * @returns {Object}
     */
    createNextState(state, appProperties) {
        return Object.assign({},
            state, appProperties);
    }
}

export default AppReducer;
