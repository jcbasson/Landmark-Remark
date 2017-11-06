/**
 * @class MapSettings
 * @property <String> NoGoogleApiKeyProvidedByServer
 * @property <String> NoUserProvidedByServer
 * @property <String> InCompleteUserProvidedByServer
 * @property <String> InCompleteRemarkProvidedByServer
 * @property <String> InCompleteOthersRemarkProvidedByServer
 * @property <String> InvalidObjectProvidedMustBeObjectOfGoogleApiOptions
 * @property <String> NoGoogleApiUrlProvided
 * @property <String> NoGoogleApiKeyProvided
 * @property <String> GeolocationDenied
 * @property <String> GeolocationInformationUnavailable
 * @property <String> GeolocationRequestTimeout
 * @property <String> UnknownError
 * @property <String> GeolocationNotSupportedByBrowser
 */
class ErrorMessages{
    constructor()
    {
        //Application Error Messages
        this.NoGoogleApiKeyProvidedByServer  = 'No Google API Key provided by server';
        this.NoUserProvidedByServer  = 'No User provided by server';
        this.InCompleteUserProvidedByServer  = 'Incomplete User provided by server';
        this.InCompleteRemarkProvidedByServer  = 'Incomplete Remark provided by server';
        this.InCompleteOthersRemarkProvidedByServer  = 'Incomplete Others Remark provided by server';

        //Google Map Error Messages
        this.InvalidObjectProvidedMustBeObjectOfGoogleApiOptions  = 'Invalid object provided ,must be of type GoogleApiOptions';
        this.NoGoogleApiUrlProvided  = 'No google api url provided';
        this.NoGoogleApiKeyProvided  = 'No google api key provided';
        this.GeolocationDenied  = "User denied the request for Geolocation.";
        this.GeolocationInformationUnavailable  = "Location information is unavailable.";
        this.GeolocationRequestTimeout  = "The request to get user location timed out.";
        this.UnknownError  =  "An unknown error occurred.";
        this.GeolocationNotSupportedByBrowser  =  "Geolocation is not supported by this browser.";
    }
}
export default new ErrorMessages();