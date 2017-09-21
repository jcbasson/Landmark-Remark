import {connect} from 'react-redux';
import LandMarkRemarkContainer from './view/landMarkRemarkContainer';

const mapStateToProps = (state) => {
    const {user} = state;
    const {landMarks} = user;
    return {landMarks};
};

const LandMarkRemarkComponent = connect(
    mapStateToProps
)(LandMarkRemarkContainer);


export default LandMarkRemarkComponent;