import moment from 'moment';
import DateFormats from '../../../constants/dateFormats';
import Messages from '../constants/messages';
import UserMap from '../../../models/userMapModel';
import User from '../../../models/userModel';
import LandMark from "../../../models/landMarkModel";
import Remark from "../../../models/remarkModel";
import OthersRemark from "../../../models/othersRemarkModel";

const ResponseTransformer = {};

ResponseTransformer.userMap = (response) => {
    let userMap = new UserMap();
    if (response && response instanceof Object) {
        if (response.mapApiKey) {
            userMap.mapApiKey = response.mapApiKey
        }
        else {
            throw new Error(Messages.ErrorMessages.NoGoogleApiKeyProvidedByServer);
        }

        if (response.user) {
            userMap.user = createUserFromResponse(response.user);
        }
        else {
            throw new Error(Messages.ErrorMessages.NoUserProvidedByServer);
        }
    }
    return userMap;
};

const createUserFromResponse = (responseUser) => {
    if (responseUser.id && responseUser.userName) {
        let user = new User();
        user.id = responseUser.id;
        user.userName = responseUser.userName;
        user.landMarks = responseUser.landMarks && Array.isArray(responseUser.landMarks) ? createLandMarksFromResponse(responseUser.landMarks) : [];
        return user;
    }
    else {
        throw new Error(Messages.ErrorMessages.InCompleteUserProvidedByServer, responseUser);
    }
};

const createLandMarksFromResponse = (responseLandMarks) => {
    let landMarks = [];
    const responseLandMarksLength = responseLandMarks.length;
    for (let i = 0; i < responseLandMarksLength; i++) {
        let responseLandMark = responseLandMarks[i];
        if (responseLandMark.id && responseLandMark.longitude && responseLandMark.latitude) {
            let landMark = new LandMark();
            landMark.id = responseLandMark.id;
            landMark.longitude = responseLandMark.longitude;
            landMark.latitude = responseLandMark.latitude;
            landMark.remark = responseLandMark.remark ? createRemarkFromResponse(responseLandMark.remark) : new Remark();
            landMark.othersRemarks = responseLandMark.othersRemarks && Array.isArray(responseLandMark.othersRemarks) ? createOtherRemarks(responseLandMark.othersRemarks) : [];
            landMarks.push(landMark);
        }
    }
    return landMarks;
};

const createRemarkFromResponse = (responseLandMark) => {
    if (responseLandMark.id && responseLandMark.text && responseLandMark.dateMade && responseLandMark.landMarkId) {
        let remark = new Remark();
        remark.dateMade = moment(responseLandMark.dateMade).format(DateFormats.ThreeLetterAbbrevMonth_Day_TwoDigitYear);
        remark.text = responseLandMark.text;
        remark.landMarkId = responseLandMark.landMarkId;
        return remark;
    }
    else {
        throw new Error(Messages.ErrorMessages.InCompleteRemarkProvidedByServer, responseLandMark);
    }
};

const createOtherRemarks = (responseOtherRemarks) => {
    let otherRemarks = [];
    const responseOtherRemarksLength = responseOtherRemarks.length;
    for (let i = 0; i < responseOtherRemarksLength; i++) {
        let responseOtherRemark = responseOtherRemarks[i];
        if (responseOtherRemark.id && responseOtherRemark.userName && responseOtherRemark.remark && responseOtherRemark.locationId) {
            let othersRemark = new OthersRemark();
            othersRemark.id = responseOtherRemark.id;
            othersRemark.userName = responseOtherRemark.userName;
            othersRemark.locationId = responseOtherRemark.locationId;
            othersRemark.remark = createRemarkFromResponse(responseOtherRemark.remark);
            otherRemarks.push(othersRemark);
        }
        else {
            throw new Error(Messages.ErrorMessages.InCompleteOthersRemarkProvidedByServer, responseOtherRemark);
        }
    }
    return otherRemarks;
};

export default ResponseTransformer;

