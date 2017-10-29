import {connect} from 'react-redux';
import LandMarkOthersRemarkContainer from './view/landMarkOtherRemarksContainer';
import LandMark from "../../models/landMarkModel";

const mapStateToProps = (state) => {
    return {otherRemarks: getHoveredLandMarksOthersRemarks(state)};
};

const getHoveredLandMarksOthersRemarks = (state) => {
    const {userMap} = state.appReducer;
    const {landMarks} = userMap.user;
    if (landMarks && Array.isArray(landMarks) && landMarks.length > 0) {
        const landMarksLength = landMarks.length;
        for (let i = 0; i < landMarksLength; i++)
        {
            let landMark = landMarks[i];

            if(landMark instanceof LandMark)
            {
                if(!landMark.hasFocus)
                {
                    return landMark.othersRemarks;
                }
            }
        }
    }
    return [];
};

const LandMarkOtherRemarksComponent = connect(
    mapStateToProps
)(LandMarkOthersRemarkContainer);

export default LandMarkOtherRemarksComponent;