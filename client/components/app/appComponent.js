import {connect} from 'react-redux';
import AppContainer from './view/appContainer';

const mapStateToProps = ({appReducer}) => {
    const userMap = appReducer.get('userMap');
    const isFetching = appReducer.get('isFetching');
    const lastUpdated = appReducer.get('lastUpdated');
    return { userMap, isFetching, lastUpdated};
};

const AppComponent = connect(
    mapStateToProps
)(AppContainer);


export default AppComponent;