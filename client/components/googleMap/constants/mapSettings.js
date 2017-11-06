/**
 * @class MapSettings
 * @property <Object {lat: Decimal, lng: Decimal}> centerCoordinates
 * @property <Object {lat: Decimal, lng: Decimal}> defaultUserCoordinates
 */
class MapSettings{
    constructor()
    {
        this.centerCoordinates = {lat: -7.319500, lng: 72.422859};
        this.defaultUserCoordinates = {lat: -7.319500, lng: 72.422859};
    }
}
const mapSettings = new MapSettings();
export default mapSettings;