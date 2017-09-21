import React from 'react';
import PropTypes from 'prop-types';
import LandMarkModel from '../../../models/landMarkModel';

const LandMarkRemarkPresenter =({landMarks} ) => (
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
            <div id="landmark-remarks-map-component">
                <div id="landmark-remarks-map"></div>
            </div>
        </div>
    </section>
);


LandMarkRemarkPresenter.propTypes = {
    remarks: PropTypes.arrayOf(LandMarkModel).isRequired,
};

export default LandMarkRemarkPresenter;