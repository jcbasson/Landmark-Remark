import moment from 'moment';
import LandMark from '../models/landMarkModel';
import Remark from '../models/remarkModel';
import OthersRemark from '../models/othersRemarkModel';
import DateFormats from '../constants/dateFormats'

/**
 * @class ModelsFactory
 */
class ModelsFactory {
    /**
     * @desc Creates new LandMark object
     * @param <String> id
     * @param <Decimal> longitude
     * @param <Decimal> latitude
     * @param <Boolean> hasFocus
     * @param <Array<OthersRemark>> othersRemarks
     * @returns <LandMark>
     */
    createLandMark(id, longitude, latitude, hasFocus, othersRemarks) {
        if (!id) throw new Error('LandMark failed to create: No id provided');
        if (!longitude || isNaN(longitude)) throw new Error('LandMark failed to create: No longitude or invalid longitude provided');
        if (!latitude || isNaN(latitude)) throw new Error('LandMark failed to create: No latitude or invalid latitude provided');
        if (typeof hasFocus !== 'boolean') throw new Error('LandMark failed to create: No hasFocus or invalid hasFocus provided');
        if (othersRemarks && !Array.isArray(othersRemarks)) throw new Error('LandMark failed to create: othersRemarks is not an array');

        const landMark = new LandMark();
        landMark.id = id;
        landMark.longitude = longitude;
        landMark.latitude = latitude;
        landMark.hasFocus = !!hasFocus;
        landMark.othersRemarks = othersRemarks ? othersRemarks : [];
        return landMark;
    }

    /**
     * @desc Creates new Remark object
     * @param <String> id
     * @param <String> text
     * @param <Date> dateMade
     * @param <String> landMarkId
     * @returns <Remark>
     */
    createRemark(id, text, dateMade, landMarkId) {
        if (!id) throw new Error('Remark failed to create: No id provided');
        if (!dateMade ||!moment(dateMade).isValid()) throw new Error('Remark failed to create: No dateMade or invalid dateMade provided');
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
     * @param <String> id
     * @param <String> userName
     * @param <Remark> remark
     * @param <String> locationId
     * @returns <OthersRemark>
     */
    createOthersRemark(id, userName, remark, locationId) {
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