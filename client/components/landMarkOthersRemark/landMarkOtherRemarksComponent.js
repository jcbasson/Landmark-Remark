import {connect} from 'react-redux';
import LandMarkOthersRemarkContainer from './view/landMarkOtherRemarksContainer';

const mapStateToProps = ({appReducer}) => {
    const othersRemarks = getOtherRemarksForFocusedLandMark(appReducer);
    return {otherRemarks: othersRemarks ? othersRemarks : []};
};

const getOtherRemarksForFocusedLandMark = (appReducer) => {
    const focusedLandMark = appReducer.getIn(['userMap', 'user', 'landMarks']).filter(landMark => {
        const landMarkHasFocus = landMark.get('hasFocus');
        if (landMarkHasFocus) {
            return landMark;
        }
    }).reduce();
    return focusedLandMark? focusedLandMark.get('othersRemarks').toJS(): [];
};

const LandMarkOtherRemarksComponent = connect(
    mapStateToProps
)(LandMarkOthersRemarkContainer);

export default LandMarkOtherRemarksComponent;