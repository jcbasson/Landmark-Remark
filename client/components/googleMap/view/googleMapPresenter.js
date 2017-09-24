import React from 'react';
import PropTypes from 'prop-types';
import UserMap from '../../../models/userMapModel';

const GoogleMapPresenter = ({userMap}) => (
    <div id="landmark-remarks-map-component">
        <div ref="map" id="landmark-remarks-map"></div>
    </div>
)


GoogleMapPresenter.propTypes = {
    userMap: PropTypes.instanceOf(UserMap),
};

export default GoogleMapPresenter;