import moment from 'moment';
import UserMap from '../models/userMapModel';
import User from '../models/userMapModel';
import LandMark from '../models/landMarkModel';
import Remark from '../models/remarkModel';
import OthersRemark from '../models/othersRemarkModel';
import DateFormats from '../constants/dateFormats'

/**
 * @class ModelsFactory
 */
class ModelsFactory {

    /**
     * @desc Creates new User object
     * @param <Object{ mapApiKey: String, user: User }>
     * @returns <UserMap>
     */
    createUserMap({mapApiKey, user})
    {
        if (!mapApiKey) throw new Error('UserMap failed to create: No mapApiKey provided');
        if (!user && user instanceof User) throw new Error('User failed to create: No user or invalid user provided');
        const userMap = new UserMap();
        userMap.mapApiKey = mapApiKey;
        userMap.user = user;
        return userMap;
    }

    /**
     * @desc Creates new User object
     * @param <Object{ id: String, userName: String, landMarks:  Array<LandMark>> }>
     * @returns <User>
     */
    createUser({id, userName, landMarks})
    {
        if (!id) throw new Error('User failed to create: No id provided');
        if (!userName) throw new Error('User failed to create: No userName provided');
        if (landMarks && !Array.isArray(landMarks)) throw new Error('User failed to create: landMarks is not an array');

        const user = new User();
        user.id = id;
        user.userName = userName;
        user.landMarks = landMarks? landMarks : [];
        return user;
    }
    /**
     * @desc Creates new LandMark object
     * @param <Object{ id: String, longitude: Decimal, latitude: Decimal, hasFocus: Boolean, remark: Remark, othersRemarks: Array<OthersRemark>> }>
     * @returns <LandMark>
     */
    createLandMark({id, longitude, latitude, hasFocus, remark, othersRemarks}) {
        if (!id) throw new Error('LandMark failed to create: No id provided');
        if (!longitude || isNaN(longitude)) throw new Error('LandMark failed to create: No longitude or invalid longitude provided');
        if (!latitude || isNaN(latitude)) throw new Error('LandMark failed to create: No latitude or invalid latitude provided');
        if (remark && !(remark instanceof Remark)) throw new Error('LandMark failed to create: remark must be of type Remark');
        if (othersRemarks && !Array.isArray(othersRemarks)) throw new Error('LandMark failed to create: othersRemarks is not an array');

        const landMark = new LandMark();
        landMark.id = id;
        landMark.longitude = longitude;
        landMark.latitude = latitude;
        landMark.hasFocus = !!hasFocus;
        landMark.remark = remark ? remark : null;
        landMark.othersRemarks = othersRemarks ? othersRemarks : [];
        return landMark;
    }

    /**
     * @desc Creates new Remark object
     * @param <Object{ id: String, text: String, dateMade: Date, landMarkId: String }>
     * @returns <Remark>
     */
    createRemark({id, text, dateMade, landMarkId}) {
        if (!id) throw new Error('Remark failed to create: No id provided');
        if (!dateMade || !moment(dateMade).isValid()) throw new Error('Remark failed to create: No dateMade or invalid dateMade provided');
        if (!landMarkId) throw new Error('Remark failed to create: No landMarkId provided');

        const remark = new Remark();
        remark.id = id;
        remark.text = text;
        remark.dateMade = moment(dateMade).format(DateFormats.ThreeLetterAbbrevMonth_Day_TwoDigitYear);
        remark.landMarkId = landMarkId;
        return remark
    }

    /**
     * @desc Creates new Others Remark object
     * @param <Object{ id: String, userName: String, remark: Remark, locationId: String >}
     * @returns <OthersRemark>
     */
    createOthersRemark({id, userName, remark, locationId}) {
        if (!id) throw new Error('OthersRemark failed to create: No id provided');
        if (!userName) throw new Error('OthersRemark failed to create: No id provided');
        if (remark && !(remark instanceof Remark)) throw new Error('OthersRemark failed to create: No remark or invalid remark provided');
        if (!locationId) throw new Error('OthersRemark failed to create: No locationId provided');
        const othersRemark = new OthersRemark();
        othersRemark.id = id;
        othersRemark.userName = userName;
        othersRemark.remark = remark;
        othersRemark.locationId = locationId;
        return othersRemark;
    }
}

export default ModelsFactory;