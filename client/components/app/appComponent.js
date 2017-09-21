import {connect} from 'react-redux';
import AppContainer from './view/appContainer';

const mapStateToProps = (state) => {
    return {};
};

const AppComponent = connect(
    mapStateToProps
)(AppContainer);


export default AppComponent;