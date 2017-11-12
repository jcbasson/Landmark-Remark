/**
 * @class GoogleMapActionTypes
 * @desc Class containing the action types for the GoogleMap Component
 */
class GoogleMapActionTypes{
    static get GOOGLE_MAP_LOADING_SUCCESS()
    {
        return 'GOOGLE_MAP_LOADING_SUCCESS';
    }
    static get GOOGLE_MAP_LOADING_FAILED()
    {
        return 'GOOGLE_MAP_LOADING_FAILED';
    }
    static get GOOGLE_MAP_LOADING()
    {
        return 'GOOGLE_MAP_LOADING';
    }
    static get MARK_USER_CURRENT_LOCATION()
    {
        return 'MARK_USER_CURRENT_LOCATION';
    }
}
export default GoogleMapActionTypes;