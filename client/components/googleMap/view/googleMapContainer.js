import React, {Component} from 'react'
import {googleMapLoading} from '../actions/googleMapActions';
import {updateLandMarkHasFocus, createLandmark, updateRemark} from '../../landMarkRemark/actions/landMarkRemarkActions';
import GoogleMapPresenter from './googleMapPresenter';
import {findUserCurrentGeolocation} from '../helpers/geolocationFinder';
import mapSettings from '../constants/mapSettings';
import RemarkComponent from '../../remark/remarkComponent';

/**
 * @class GoogleMapContainer
 * @property <google.maps.InfoWindow> currentOpenRemarkWindow
 * @property <google.maps.Map> map
 * @property <Element> dateCreateSpan
 * @property <Element> pRemarkElement
 * @property <Element> txtRemarkElement
 * @property <Element> btnEditRemarkElement
 * @property <Element> btnSaveRemarkElement
 * @property <String> remarkText
 */
class GoogleMapContainer extends Component {
    constructor(props) {
        super(props);
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
        //Load the user map with the landmarks
        this.loadUserLandmarks(this.map, this.props.landMarks);
        this.loadMapEvents(this.map);
    }

    /**
     * @desc Load events for the map
     * @param <GoogleMap> map
     */
    loadMapEvents(map) {
        map.addListener('click', (e) => {
            //Google maps even object with functions for extracting latitude and longitude
            const eventLatLng = e.latLng;
            //Create new landmark with the selected coordinates
            this.createNewLandMark({lat: eventLatLng.lat(), lng: eventLatLng.lng()}, map);
        });
    }

    /**
     * @desc Loop through users landmarks to load their respective markers
     * @param <GoogleMap> map
     * @param <Array<LandMark>> landMarks
     */
    loadUserLandmarks(map, landMarks) {
        const landMarksLength = landMarks.length;
        for (let i = 0; i < landMarksLength; i++) {
            const landMark = landMarks[i];
            this.loadMapMarker(map, landMark, false)
        }
        //Gets the users current location, passing in the success handler and the error handler with default locations to use
        findUserCurrentGeolocation(this.markUserCurrentLocation.bind(this, map), this.markUserCurrentLocation.bind(this, map, mapSettings.defaultUserCoordinates));
    }

    /**
     * @desc Marks users current location
     * @param <GoogleMap> map
     * @param <GeoLocation> position
     */
    markUserCurrentLocation(map, position) {
        const coordinates = position.coords;
        this.createNewLandMark({lat: coordinates.latitude, lng: coordinates.longitude}, map);
    }

    /**
     * @desc Create a google maps marker with the landmarks coordinates
     * @param <GoogleMap> map
     * @param <LandMark> landMark
     * @param <Boolean> isNewLandmark
     */
    loadMapMarker(map, landMark, isNewLandmark) {
        const marker = new google.maps.Marker({
            position: {lat: landMark.latitude, lng: landMark.longitude}
        });
        this.addLandMarkRemark(map, marker, landMark, isNewLandmark);
        marker.setMap(map);
    }

    /**
     * @desc Adds google maps info window for each landmark's remark
     * @param <GoogleMap> map
     * @param <GoogleMapMarker> marker
     * @param <LandMark> landMark
     * @param <Boolean> isEditMode
     */
    addLandMarkRemark(map, marker, landMark, isEditMode) {
        //Create remark component
        const remarkComponent = new RemarkComponent(landMark.remark, isEditMode);
        //Create remark window
        const infowindow = new google.maps.InfoWindow({
            content: remarkComponent.element
        });
        //If is a new remark and thus in edit mode
        if (isEditMode) {
            //Set current open remark window
            this.currentOpenRemarkWindow = infowindow;
            //Open the remark window
            this.openCurrentOpenRemarkWindow(map, marker);
        }
        //Add google map event listeners
        this.addLandMarkEvents(map, infowindow, remarkComponent, marker, landMark)
    }

    /**
     * @desc Adds events to google map components
     * @param <GoogleMap> map
     * @param <InfoWindow> infowindow
     * @param <RemarkComponent> remarkComponent
     * @param <GoogleMapMarker> marker
     * @param <LandMark> landMark
     */
    addLandMarkEvents(map, infowindow, remarkComponent, marker, landMark) {
        //Set event dispatch object
        const {dispatch} = this.props;
        const googleMapsApi = google.maps;
        //Add listener for closing of the InfoWindow
        infowindow.addListener('closeclick', () => {
            //Reset the open remark window
            this.currentOpenRemarkWindow = null;

            //Update the remark focus status to false
            dispatch(updateLandMarkHasFocus(landMark.id, false));
        });
        marker.addListener('click', () => {
            //Close other previously open remark window
            this.closeCurrentOpenRemarkWindow();

            //Set currently open remark window
            this.currentOpenRemarkWindow = infowindow;

            //Open the current
            this.openCurrentOpenRemarkWindow(map, marker);

            //Update the remark focus status to true
            dispatch(updateLandMarkHasFocus(landMark.id, true));
        });

        //Toggle the Remark component to Save Mode
        googleMapsApi.event.addDomListener(remarkComponent.btnEditRemarkElement, "click", () => {
            remarkComponent.setSaveMode();
        });
        //Save the remark text for the landmark
        googleMapsApi.event.addDomListener(remarkComponent.btnSaveRemarkElement, "click", () => {
            remarkComponent.setRemarkText();
            remarkComponent.setDisplayMode();
            dispatch(updateRemark(landMark.id, remarkComponent.getRemarkText()));
        });
    }

    /**
     * @desc Creates a new landmark with an empty remark
     * @param <Object{lat: Decimal, lng: Decimal }> latitudeLongitudeSettings
     * @param <GoogleMap> map
     */
    createNewLandMark({lat, lng}, map) {
        //Create new remark
        const randomId = Math.random();
        //Set model factory and event dispatch object
        const {modelFactory, dispatch} = this.props;
        //Close other previously open remark window
        this.closeCurrentOpenRemarkWindow();
        //Create new landmark
        const landMark = modelFactory.createLandMark({
            id: `LandMark_${lat}_${lng}`,
            longitude: lng,
            latitude: lat,
            hasFocus: true
        });
        //Create remark
        const remark = modelFactory.createRemark({
            id: `Remark_${landMark.id}_${randomId}`,
            text: '',
            dateMade: Date.now(),
            landMarkId: landMark.id
        });
        //Set landmark remark
        landMark.remark = remark;
        //Focus map over landmark location
        map.panTo({lat, lng});
        //Load landmark and remark to google map
        this.loadMapMarker(map, landMark, true);

        dispatch(createLandmark(landMark));
    }

    /**
     * @desc Opens the landmark Remark Display Window
     * @param <GoogleMap> map
     * @param <GoogleMapMarker> marker
     */
    openCurrentOpenRemarkWindow(map, marker) {
        if (this.currentOpenRemarkWindow) {
            this.currentOpenRemarkWindow.open(map, marker);
        }
    }

    /**
     * @desc Close the landmark Remark Display Window
     */
    closeCurrentOpenRemarkWindow() {
        if (this.currentOpenRemarkWindow) {
            this.currentOpenRemarkWindow.close();
            this.currentOpenRemarkWindow = null;
        }
    }

    render() {
        return GoogleMapPresenter(this.props);
    }
}

export default GoogleMapContainer;
