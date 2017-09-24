const Messages = {};

Messages.ErrorMessages = {
    InvalidObjectProvidedMustBeObjectOfGoogleApiOptions: 'Invalid object provided ,must be of type GoogleApiOptions',
    NoGoogleApiUrlProvided: 'No google api url provided',
    NoGoogleApiKeyProvided: 'No google api key provided',
    GeolocationDenied: "User denied the request for Geolocation.",
    GeolocationInformationUnavailable: "Location information is unavailable.",
    GeolocationRequestTimeout: "The request to get user location timed out.",
    UnknownError: "An unknown error occurred.",
    GeolocationNotSupportedByBrowser: "Geolocation is not supported by this browser."
};

export default Messages;