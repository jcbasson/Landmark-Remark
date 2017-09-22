import UserModel from '../../../models/userModel';
import StringUtils from '../../../utils/stringUtils'

const ResponseTransformer = {};

ResponseTransformer.userMap = (response) => {
    console.log('JC ResponseTransformer.userMap response',response );
    let userModel = new UserModel();
    if (response && response instanceof Object) {
        userModel = createModelFromResponseItem(response, userModel);
    }
    return userModel;
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