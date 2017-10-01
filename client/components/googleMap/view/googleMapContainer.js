import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server'
import {googleMapLoading} from '../actions/googleMapActions';
import GoogleMapPresenter from './googleMapPresenter';
import {findUserCurrentGeolocation} from '../helpers/geolocationFinder';
import Messages from '../constants/messages';
import mapSettings from '../constants/mapSettings';
import RemarkComponent from '../../remark/remarkComponent';


class GoogleMapContainer extends Component {
    constructor(props) {
        super(props)
        const {dispatch} = props;
        dispatch(googleMapLoading(this.loadGoogleMapLandMarks.bind(this)));
    }

    loadGoogleMapLandMarks() {
        this.map = new google.maps.Map(this.refs.map, {
            center: mapSettings.centerCoordinates,
            zoom: 2
        });
        const landMarks = this.props.landMarks;
        findUserCurrentGeolocation(this.markUserCurrentLocation.bind(this, this.map), this.markUserCurrentLocationDefault.bind(this, this.map));
        this.loadUserLandmarks(this.map, landMarks);
    }

    /**
     * @param <GoogleMap> map
     * @param <Array<LandMark>> landMarks
     */
    loadUserLandmarks(map, landMarks) {
        const landMarksLength = landMarks.length;
        for(let i = 0; i < landMarksLength; i++)
        {
            const landMark = landMarks[i];
            this.loadMapMarker(map, landMark)
        }
    }

    /**
     * @param <GoogleMap> map
     * @param <GeoLocation> position
     */
    markUserCurrentLocation(map, position) {
        let coordinates = position.coords;
        let marker = new google.maps.Marker({
            position: {lat: coordinates.latitude, lng: coordinates.longitude},
            title: "Your current location Marker"
        });
        marker.setMap(map);
    }

    /**
     * @param <GoogleMap> map
     * @param <GeoLocationError> geoLocationError
     */
    markUserCurrentLocationDefault(map, geoLocationError) {
        let coordinates = {lat: -37.814, lng: 144.963};
        let marker = new google.maps.Marker({
            position: coordinates,
            title: "Your current location Marker"
        });
        marker.setMap(map);
        this.geoLocationHandler(geoLocationError);
    }

    /**
     * @param <GoogleMap> map
     * @param <GoogleMapMarker> marker
     * @param <Remark> remark
     */
    addLandMarkRemark(map, marker, remark) {

        let remarkComponentHtml = ReactDOMServer.renderToStaticMarkup(<RemarkComponent remark={remark}></RemarkComponent>);
        let infowindow = new google.maps.InfoWindow({
            content: remarkComponentHtml
        });
        marker.addListener('click',  () => {
            infowindow.open(map, marker);
        });
    }

    /**
     * @param <GoogleMap> map
     * @param <LandMark> landMark
     */
    loadMapMarker(map, landMark) {
        let marker = new google.maps.Marker({
            position: {lat: landMark.latitude, lng: landMark.longitude},
            title: "Location Marker"
        });
        this.addLandMarkRemark(map, marker, landMark.remark );
        marker.setMap(map);
    }

    /**
     * @param <GeoLocationError> geoLocationError
     */
    geoLocationHandler(geoLocationError) {
        switch (geoLocationError.code) {
            case geoLocationError.PERMISSION_DENIED:
                throw new Error(Messages.ErrorMessages.GeolocationDenied);
                break;
            case geoLocationError.POSITION_UNAVAILABLE:
                throw new Error(Messages.ErrorMessages.GeolocationInformationUnavailable);
                break;
            case geoLocationError.TIMEOUT:
                throw new Error(Messages.ErrorMessages.GeolocationRequestTimeout);
                break;
            case geoLocationError.UNKNOWN_ERROR:
                throw new Error(Messages.ErrorMessages.UnknownError);
                break;
        }
    }

    render() {
        return GoogleMapPresenter(this.props);
    }
}

export default GoogleMapContainer;