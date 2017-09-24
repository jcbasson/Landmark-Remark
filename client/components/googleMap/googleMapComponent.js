import {connect} from 'react-redux';
import GoogleMapContainer from './view/googleMapContainer';

const mapStateToProps = (state) => {
    const {userMap} = state.appReducer;
    return {userMap};
};

const GoogleMapComponent = connect(
    mapStateToProps
)(GoogleMapContainer);


export default GoogleMapComponent;