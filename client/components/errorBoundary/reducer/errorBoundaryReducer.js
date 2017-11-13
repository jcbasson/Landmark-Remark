/**
 * @class ErrorBoundaryReducer
 * @desc Class that generates the component error recording reducer to be used by redux store
 * @property <Immutable> immutable
 * @property <ErrorBoundaryActionTypes> actionTypes
 */
class ErrorBoundaryReducer {
    constructor(Immutable, ActionTypes) {
        this.immutable = Immutable;
        this.actionTypes = ActionTypes;

        /**
         * @desc Creates the error boundary reducer function to be added to the redux store
         * @param {Object} state
         * @param {Object} action
         * @returns {Object}
         */
        return (state = [], action) => {
            const {actionTypes} = this;
            if(action.type !== actionTypes.COMPONENT_ERROR)return state;
            const { error, errorInfo, sourceComponent } = action;
            const componentErrors = [...state];
            componentErrors.push({
                error,
                errorInfo,
                sourceComponent
            });
            return componentErrors;
        };
    }
}

export default ErrorBoundaryReducer;