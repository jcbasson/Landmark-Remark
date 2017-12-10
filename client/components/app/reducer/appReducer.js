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
         * @param {Immutable.Map} state
         * @param {Object} action
         * @returns {Object}
         */
        return (state = this.immutable.fromJS({ isFetching: false, userMap: null, lastUpdated: null}), action) => {
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
                case landmarkRemarkActionTypes.REFRESH_ALL_LANDMARK_HAS_FOCUS:
                case landmarkRemarkActionTypes.CREATE_LANDMARK:
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
     * @param {Immutable.Map} state
     * @param {Object} action
     * @returns {Object}
     */
    userMapAction(state, action) {
        const actionTypes = this.actionTypes;
        switch (action.type) {
            case actionTypes.REQUEST_USER_MAP:
                return state.set('isFetching', true);
            case actionTypes.RECEIVED_USER_MAP:
                return state.merge({
                    isFetching: false,
                    userMap: this.immutable.fromJS(action.userMap),
                    lastUpdated: action.receivedAt
                });
            case actionTypes.REQUEST_USER_MAP_FAILED:
                return state.merge({latestError: action.payload});
            default:
                return state
        }
    }
}

export default AppReducer;