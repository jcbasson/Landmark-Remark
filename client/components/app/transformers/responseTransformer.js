import UserLandMarksModel from '../models/userLandMarksModel';
import StringUtils from '../../../utils/stringUtils'

const ResponseTransformer = {};

ResponseTransformer.userLandmarks = (response) => {
    let userLandMarksModel = new UserLandMarksModel();
    if (response && response instanceof Object) {
        userLandMarksModel = createModelFromResponseItem(response, userLandMarksModel);
    }
    return userLandMarksModel;
};

const createModelFromResponseItem = (responseItem, model) => {
    const keys = Object.keys(responseItem);
    const keysLength = keys.length;
    for (let i = 0; i < keysLength; i++) {
        let responseKey = keys[i].toString();
        let modelKey = StringUtils.convertFirstLetterToLowerCase(responseKey);
        if (model.hasOwnProperty(modelKey)) {
            model[modelKey] = responseItem[responseKey];
        }
    }
    return model;
};

export default ResponseTransformer;