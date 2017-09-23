import {connect} from 'react-redux';
import AppContainer from './view/appContainer';

const mapStateToProps = (state) => {
    const { userMap,isFetching, lastUpdated} = state.appReducer;
    return { userMap, isFetching, lastUpdated};
};

const AppComponent = connect(
    mapStateToProps
)(AppContainer);


export default AppComponent;