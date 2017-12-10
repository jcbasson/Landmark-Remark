/**
 * @class ModelFactory
 * @property <Moment constructor> Moment
 * @property <DateFormats constructor> DateFormats
 */
class ModelFactory {
    constructor(Moment, DateFormats) {
        this.Moment = Moment;
        this.DateFormats = DateFormats;
    }

    /**
     * @desc Creates new LandMark object
     * @param <Object{ longitude: Decimal, latitude: Decimal, hasFocus: Boolean, remark: Object, othersRemarks: Array<Object>> }>
     * @returns <Object{ id: String, longitude: Decimal, latitude: Decimal, hasFocus: Boolean, remark: Object, othersRemarks: Array<Object>> }>
     */
    createLandMark({longitude, latitude, hasFocus, remark, othersRemarks}) {
        if (!longitude || isNaN(longitude)) throw new Error('LandMark failed to create: No longitude or invalid longitude provided');
        if (!latitude || isNaN(latitude)) throw new Error('LandMark failed to create: No latitude or invalid latitude provided');
        if (othersRemarks && !Array.isArray(othersRemarks)) throw new Error('LandMark failed to create: othersRemarks is not an array');

        const landMarkId = generateLandMarkId(longitude, latitude);
        const landMarkRemark = remark ? this.createRemark(remark) : {text: '', dateMade: Date.now(), landMarkId};

        return {
            id: landMarkId,
            longitude,
            latitude,
            hasFocus: !!hasFocus,
            remark: landMarkRemark,
            othersRemarks: othersRemarks ? othersRemarks : []
        };
    }

    /**
     * @desc Creates new Remark object
     * @param <Object{text: String, dateMade: Date, landMarkId: String}>
     * @returns <Object{id: String, text: String, dateMade: String, landMarkId: String}>
     */
    createRemark({text, dateMade, landMarkId}) {
        const {Moment, DateFormats} = this;
        if (!dateMade || !Moment(dateMade).isValid()) throw new Error('Remark failed to create: No dateMade or invalid dateMade provided');
        if (!landMarkId) throw new Error('Remark failed to create: No landMarkId provided');

        return {
            id: generateRemarkId(landMarkId),
            text,
            dateMade: Moment(dateMade).format(DateFormats.ThreeLetterAbbrevMonth_Day_TwoDigitYear),
            landMarkId
        };
    }
}

const generateLandMarkId = (longitude, latitude) => {
    //Create new landmark id, NOTE: This will be changed when graphQL is implemented
    return `LandMark_${longitude}_${latitude}`;
};

const generateRemarkId = (landMarkId) => {
    //Create new remark id, NOTE: This will be changed when graphQL is implemented
    const randomId = Math.random();
    return `Remark_${landMarkId}_${randomId}`;
};

export default ModelFactory;