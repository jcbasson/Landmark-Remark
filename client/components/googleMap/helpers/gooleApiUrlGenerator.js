import GoogleApiOptions from '../models/googleApiOptions'
import Messages from '../constants/messages'

export const GenerateGoogleApiUrl = (googleApiOptions) => {

    if (!(googleApiOptions instanceof GoogleApiOptions)) {
        throw new Error(Messages.ErrorMessages.InvalidObjectProvidedMustBeObjectOfGoogleApiOptions);
    }
    if (!googleApiOptions.url) {
        throw new Error(Messages.ErrorMessages.NoGoogleApiUrlProvided);
    }
    if (!googleApiOptions.key) {
        throw new Error(Messages.ErrorMessages.NoGoogleApiKeyProvided);
    }

    const googleApiUrlKeys = Object.keys(googleApiOptions).slice(1);
    const googleApiUrlOnlyKeysWithValues = googleApiUrlKeys.filter(key => {
        if(googleApiOptions[key])
        {
            return googleApiOptions[key]
        }
    } );
    const googleApiParamString = googleApiUrlOnlyKeysWithValues.map(key => `${key}=${googleApiOptions[key]}`).join('&');

    return `${googleApiOptions.url}?${googleApiParamString}`;
};

export default GenerateGoogleApiUrl