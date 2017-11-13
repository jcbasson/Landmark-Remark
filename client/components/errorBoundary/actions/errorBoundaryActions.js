/**
 * @class ErrorBoundaryActions
 * @desc Class containing actions with data for changing state
 * @property <ErrorBoundaryActionTypes> actionTypes
 */
class ErrorBoundaryActions{
    constructor(ActionTypes){
        this.actionTypes = ActionTypes;
    }

    /**
     * @desc Reducer action for logging component based errors
     * @param {Object<error: String, errorInfo: String, sourceComponent: String>}
     * @returns {Object<type: String, error: String, errorInfo: String, sourceComponent: String>}
     */
    componentError({error, errorInfo, sourceComponent})
    {
        return {
            type: this.actionTypes.COMPONENT_ERROR,
            error,
            errorInfo,
            sourceComponent
        }
    }
}
export default ErrorBoundaryActions;