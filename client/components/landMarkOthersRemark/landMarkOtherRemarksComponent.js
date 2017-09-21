import {connect} from 'react-redux';
import LandMarkOthersRemarkContainer from './view/landMarkOtherRemarksContainer';
import LandMarkModel from "../../models/landMarkModel";

const mapStateToProps = (state) => {
    return {otherRemarks: getHoveredLandMarksOthersRemarks(state)};
};

const getHoveredLandMarksOthersRemarks = (state) => {

    const {user} = state;
    const {landMarks} = user;

    if (landMarks && Array.isArray(landMarks) && landMarks.length > 0) {
        const landMarksLength = landMarks.length;
        for (let i = 0; i < landMarksLength; i++)
        {
            let landMark = landMarks[i];

            if(landMark instanceof LandMarkModel)
            {
                if(landMark.isHovered)
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