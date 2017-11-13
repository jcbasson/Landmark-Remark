import {connect} from 'react-redux';
import ErrorBoundaryContainer from './view/errorBoundaryContainer';

const ErrorBoundaryComponent = connect()(ErrorBoundaryContainer);

export default ErrorBoundaryComponent;