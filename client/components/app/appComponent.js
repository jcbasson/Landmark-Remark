import {connect} from 'react-redux';
import AppContainer from './view/appContainer';

const mapStateToProps = (state) => {
    const { user,isFetching, lastUpdated} = state;
    return { user, isFetching, lastUpdated};
};

const AppComponent = connect(
    mapStateToProps
)(AppContainer);


export default AppComponent;