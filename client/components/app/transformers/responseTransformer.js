import moment from 'moment';
import DateFormats from '../../../constants/dateFormats';
import ErrorMessages from '../../../constants/errorMessages';
import UserMap from '../../../models/userMapModel';
import User from '../../../models/userModel';
import LandMark from "../../../models/landMarkModel";
import Remark from "../../../models/remarkModel";
import OthersRemark from "../../../models/othersRemarkModel";

class ResponseTransformer {

    userMap(response) {
        let userMap = new UserMap();
        if (response) {
            if (response.mapApiKey) {
                userMap.mapApiKey = response.mapApiKey
            }
            else {
                throw new Error(ErrorMessages.NoGoogleApiKeyProvidedByServer);
            }

            if (response.user) {
                userMap.user = this.createUserFromResponse(response.user);
            }
            else {
                throw new Error(ErrorMessages.NoUserProvidedByServer);
            }
        }
        return userMap;
    };

    createUserFromResponse(responseUser) {
        if (responseUser.id && responseUser.userName) {
            let user = new User();
            user.id = responseUser.id;
            user.userName = responseUser.userName;
            user.landMarks = responseUser.landMarks && Array.isArray(responseUser.landMarks) ? this.createLandMarksFromResponse(responseUser.landMarks) : [];
            return user;
        }
        else {
            throw new Error(ErrorMessages.InCompleteUserProvidedByServer, responseUser);
        }
    };

    createLandMarksFromResponse(responseLandMarks) {
        let landMarks = [];
        const responseLandMarksLength = responseLandMarks.length;
        for (let i = 0; i < responseLandMarksLength; i++) {
            let responseLandMark = responseLandMarks[i];
            if (responseLandMark.id && responseLandMark.longitude && responseLandMark.latitude) {
                let landMark = new LandMark();
                landMark.id = responseLandMark.id;
                landMark.longitude = responseLandMark.longitude;
                landMark.latitude = responseLandMark.latitude;
                landMark.remark = responseLandMark.remark ? this.createRemarkFromResponse(responseLandMark.remark) : new Remark();
                landMark.othersRemarks = responseLandMark.othersRemarks && Array.isArray(responseLandMark.othersRemarks) ? this.createOtherRemarks(responseLandMark.othersRemarks) : [];
                landMarks.push(landMark);
            }
        }
        return landMarks;
    };

    createRemarkFromResponse(responseRemark) {
        if (responseRemark.id && responseRemark.text && responseRemark.dateMade && responseRemark.landMarkId) {
            let remark = new Remark();
            remark.id = responseRemark.id;
            remark.dateMade = moment(responseRemark.dateMade).format(DateFormats.ThreeLetterAbbrevMonth_Day_TwoDigitYear);
            remark.text = responseRemark.text;
            remark.landMarkId = responseRemark.landMarkId;
            return remark;
        }
        else {
            throw new Error(ErrorMessages.InCompleteRemarkProvidedByServer, responseLandMark);
        }
    };

    createOtherRemarks(responseOtherRemarks) {
        let otherRemarks = [];
        const responseOtherRemarksLength = responseOtherRemarks.length;
        for (let i = 0; i < responseOtherRemarksLength; i++) {
            let responseOtherRemark = responseOtherRemarks[i];
            if (responseOtherRemark.id && responseOtherRemark.userName && responseOtherRemark.remark && responseOtherRemark.locationId) {
                let othersRemark = new OthersRemark();
                othersRemark.id = responseOtherRemark.id;
                othersRemark.userName = responseOtherRemark.userName;
                othersRemark.locationId = responseOtherRemark.locationId;
                othersRemark.remark = this.createRemarkFromResponse(responseOtherRemark.remark);
                otherRemarks.push(othersRemark);
            }
            else {
                throw new Error(ErrorMessages.InCompleteOthersRemarkProvidedByServer, responseOtherRemark);
            }
        }
        return otherRemarks;
    };
}

export default new ResponseTransformer;

