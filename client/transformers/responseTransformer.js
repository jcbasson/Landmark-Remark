/**
 * @class ResponseTransformer
 * @property <ModelsFactory> ModelsFactory
 */
class ResponseTransformer {

    constructor(ModelsFactory) {
        this.modelsFactory = ModelsFactory;
    }

    /**
     * @desc Creates UserMap object from server response
     * @param <Object> response
     * @returns <UserMap>
     */
    createUserMapFromResponse(response) {
        if (!response || !response.user || !response.mapApiKey) throw Error('ResponseTransformer.createUserMapFromResponse : Invalid UserMap Response');
        response.user = this.createUserFromResponse(response.user);
        return this.modelsFactory.createUserMap(response);
    };

    /**
     * @desc Creates User object from server response
     * @param <Object> responseUser
     * @returns <User>
     */
    createUserFromResponse(responseUser) {
        responseUser.landMarks = responseUser.landMarks && Array.isArray(responseUser.landMarks) ? this.createLandMarksFromResponse(responseUser.landMarks) : [];
        return this.modelsFactory.createUser(responseUser);
    };

    /**
     * @desc Creates LandMarks array from server response
     * @param <Array<Object>> responseLandMarks
     * @returns <Array<LandMark>>
     */
    createLandMarksFromResponse(responseLandMarks) {
        const landMarks = [];
        const responseLandMarksLength = responseLandMarks.length;
        for (let i = 0; i < responseLandMarksLength; i++) {
            const responseLandMark = responseLandMarks[i];
            responseLandMark.remark = responseLandMark.remark ? this.modelsFactory.createRemark(responseLandMark.remark) : null;
            responseLandMark.othersRemarks = responseLandMark.othersRemarks && Array.isArray(responseLandMark.othersRemarks) ? this.createOtherRemarks(responseLandMark.othersRemarks) : [];
            const landMark = this.modelsFactory.createLandMark(responseLandMark);
            landMarks.push(landMark);
        }
        return landMarks;
    };

    /**
     * @desc Creates OtherRemarks array from server response
     * @param <Array<Object>> responseOtherRemarks
     * @returns <Array<OthersRemark>>
     */
    createOtherRemarks(responseOtherRemarks) {
        let otherRemarks = [];
        const responseOtherRemarksLength = responseOtherRemarks.length;
        for (let i = 0; i < responseOtherRemarksLength; i++) {
            let responseOtherRemark = responseOtherRemarks[i];
            responseOtherRemark.remark = responseOtherRemark.remark ? this.modelsFactory.createRemark(responseOtherRemark.remark) : null;
            const othersRemark = this.modelsFactory.createOthersRemark(responseOtherRemark);
            otherRemarks.push(othersRemark);
        }
        return otherRemarks;
    };
}
export default ResponseTransformer;

