import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server'
import {googleMapLoading} from '../actions/googleMapActions';
import {updateLandMarkHasFocus} from '../../landMarkRemark/actions/landMarkRemarkActions';
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
        //Create the google map
        this.map = new google.maps.Map(this.refs.map, {
            center: mapSettings.centerCoordinates,
            zoom: 2,
            minZoom: 2
        });
        //Gets the users current location, passing in the success handler and the error handler with default locations to use
        findUserCurrentGeolocation(this.markUserCurrentLocation.bind(this, this.map), this.markUserCurrentLocation.bind(this, this.map, {lat: -37.814, lng: 144.963}));
        //Load the user map with the landmarks
        this.loadUserLandmarks(this.map, this.props.landMarks);
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
     * @param <GeoLocationError> geoLocationError
     */
    markUserCurrentLocation(map, position, geoLocationError) {
        let coordinates = position.coords;
        let marker = new google.maps.Marker({
            position: {lat: coordinates.latitude, lng: coordinates.longitude},
            title: "Your current location Marker"
        });
        marker.setMap(map);
    }

    /**
     * @param <GoogleMap> map
     * @param <GoogleMapMarker> marker
     * @param <LandMark> landMark
     */
    addLandMarkRemark(map, marker, landMark) {
        const {dispatch} = this.props;
        let remarkComponentHtml = ReactDOMServer.renderToStaticMarkup(<RemarkComponent remark={landMark.remark}></RemarkComponent>);
        let infowindow = new google.maps.InfoWindow({
            content: remarkComponentHtml
        });
        marker.addListener('click',  () => {
            infowindow.open(map, marker);
            dispatch(updateLandMarkHasFocus(landMark.id));
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
        this.addLandMarkRemark(map, marker, landMark );
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