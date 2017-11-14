
import {connect} from 'react-redux';
import GoogleMapContainer from './view/googleMapContainer';

const mapStateToProps = ({appReducer}) => {
    const landMarks = appReducer.getIn(['userMap', 'user', 'landMarks']).toJS();
    return {landMarks};
};

const GoogleMapComponent = connect(
    mapStateToProps
)(GoogleMapContainer);


export default GoogleMapComponent;