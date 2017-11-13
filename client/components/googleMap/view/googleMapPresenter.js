import React from 'react';

/**
 * @Function GoogleMapPresenter
 * @desc React Presenter function returning component jsx
 */
const GoogleMapPresenter = ({userMap}) => (
    <div id="landmark-remarks-map-component">
        <div ref="map" id="landmark-remarks-map"></div>
    </div>
)

export default GoogleMapPresenter;