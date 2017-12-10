import React from 'react';
import GoogleMapComponent from '../../googleMap/googleMapComponent';

/**
 * @Function LandMarkRemarkPresenter
 * @desc React Presenter function returning component jsx
 */
const LandMarkRemarkPresenter =({modelFactory, actions} ) => (
    <section id="landmark-remarks-component" className="col-xs-12 col-sm-8 col-md-9 col-lg-9 col-xl-9">
        <div className="row">
            <header className="col-xs-7">
                <h3>Your landmarks</h3>
            </header>
            <div className="col-xs-5">
                <label className="lblClickToMark">Click to make your mark</label>
            </div>
        </div>
        <div className="row">
            <GoogleMapComponent actions={actions} modelFactory={modelFactory}></GoogleMapComponent>
        </div>
    </section>
);

export default LandMarkRemarkPresenter;
