import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server'
import {googleMapLoading} from '../actions/googleMapActions';
import GoogleMapPresenter from './googleMapPresenter';
import {findUserCurrentGeolocation} from '../helpers/geolocationFinder';
import Messages from '../constants/messages';
import RemarkComponent from '../../remark/remarkComponent';

class GoogleMapContainer extends Component {
    constructor(props) {
        super(props)
        const {dispatch} = props;
        dispatch(googleMapLoading(this.loadGoogleMapLandMarks.bind(this)));
    }

    loadGoogleMapLandMarks() {
        findUserCurrentGeolocation(this.markUserCurrentLocation.bind(this), this.markUserCurrentLocationDefault.bind(this));
    }

    markUserCurrentLocation(position) {
        let coordinates = position.coords;
        this.map = new google.maps.Map(this.refs.map, {
            center: {lat: coordinates.latitude, lng: coordinates.longitude},
            zoom: 7
        });
        this.loadMapMarker(this.map, coordinates);
    }

    markUserCurrentLocationDefault(geoLocationError) {
        let coordinates = {lat: -37.814, lng: 144.963};
        this.map = new google.maps.Map(this.refs.map, {
            center: coordinates,
            zoom: 7
        });
        this.loadMapMarker(this.map, coordinates);
        this.geoLocationHandler(geoLocationError);
    }

    addLandMarkRemark(map, marker) {

        let remarkComponentHtml = ReactDOMServer.renderToStaticMarkup(<RemarkComponent remark='Testing remark'></RemarkComponent>);
        let infowindow = new google.maps.InfoWindow({
            content: remarkComponentHtml
        });
        marker.addListener('click',  () => {
            infowindow.open(map, marker);
        });
    }

    loadMapMarker(map, coords) {
        let marker = new google.maps.Marker({
            position: coords,
            title: "Location Marker"
        });
        this.addLandMarkRemark(this.map, marker);
        marker.setMap(map);
    }

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