import React, {Component} from 'react'
import ReactDOMServer from 'react-dom/server'
import {googleMapLoading} from '../actions/googleMapActions';
import {updateLandMarkHasFocus} from '../../landMarkRemark/actions/landMarkRemarkActions';
import GoogleMapPresenter from './googleMapPresenter';
import {findUserCurrentGeolocation} from '../helpers/geolocationFinder';
import mapSettings from '../constants/mapSettings';
import RemarkComponent from '../../remark/remarkComponent';


class GoogleMapContainer extends Component {
    constructor(props) {
        super(props)
        this.currentOpenRemarkWindow = null;
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
     * @param <GoogleMap> map
     * @param <GoogleMapMarker> marker
     * @param <LandMark> landMark
     */
    addLandMarkRemark(map, marker, landMark) {
        let remarkComponentHtml = ReactDOMServer.renderToStaticMarkup(<RemarkComponent remark={landMark.remark}></RemarkComponent>);
        let infowindow = new google.maps.InfoWindow({
            content: remarkComponentHtml
        });
        this.addEvents(map, infowindow, marker, landMark )
    }

    /**
     * @desc Adds events to google map components
     * @param <GoogleMap> map
     * @param <InfoWindow> infowindow
     * @param <GoogleMapMarker> marker
     * @param <LandMark> landMark
     */
    addEvents(map, infowindow, marker, landMark)
    {
        const {dispatch} = this.props;
        infowindow.addListener('closeclick',() => {
            //Reset the open remark window
            this.currentOpenRemarkWindow = null;
            //Update the remark focus status to false
            dispatch(updateLandMarkHasFocus(landMark.id, false));
        });
        marker.addListener('click',  () => {
            //Close other previously open remark window
            this.closeOpenRemarkWindow();
            //Open remark window
            infowindow.open(map, marker);
            //Set currently open remark window
            this.currentOpenRemarkWindow = infowindow;
            //Update the remark focus status to true
            dispatch(updateLandMarkHasFocus(landMark.id, true));
        });
    }

    closeOpenRemarkWindow()
    {
        if(this.currentOpenRemarkWindow)
        {
            this.currentOpenRemarkWindow.close();
            this.currentOpenRemarkWindow = null;
        }
    }

    render() {
        return GoogleMapPresenter(this.props);
    }
}

export default GoogleMapContainer;