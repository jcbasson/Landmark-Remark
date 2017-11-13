import React, {Component} from 'react';

/**
 * @Class ErrorBoundaryContainer
 * @desc React container for component error catching display
 */
class ErrorBoundaryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {error: '', errorInfo: '', sourceComponent: props.sourceComponent};
    }

    componentDidCatch(error, errorInfo) {
        const {dispatch, actions, sourceComponent} = this.props;
        const componentError = {
            error,
            errorInfo,
            sourceComponent
        };
        this.setState(componentError);
        dispatch(actions.componentError(componentError))
    }
    render() {
        const {error, errorInfo, sourceComponent} = this.state;
        if (errorInfo) {
            return (
                <div className="error-boundary">
                    <h2>Error with component: {sourceComponent}</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundaryContainer;