import {connect} from 'react-redux';
import LandMarkRemarkContainer from './view/landMarkRemarkContainer';

const mapStateToProps = (state) => {
    const {userMap} = state.appReducer;
    return {userMap};
};

const LandMarkRemarkComponent = connect(
    mapStateToProps
)(LandMarkRemarkContainer);


export default LandMarkRemarkComponent;