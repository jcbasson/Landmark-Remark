import Messages from '../constants/messages'

export const findUserCurrentGeolocation = (success, error) => {

    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(success, error);
    } else {
        throw new Error(Messages.ErrorMessages.GeolocationNotSupportedByBrowser);
    }
};

