import {connect} from 'react-redux';
import GoogleMapContainer from './view/googleMapContainer';

const mapStateToProps = (state) => {
    const {userMap} = state.appReducer;
    const {user} = userMap;
    const {landMarks} = user;
    return {landMarks};
};

const GoogleMapComponent = connect(
    mapStateToProps
)(GoogleMapContainer);


export default GoogleMapComponent;