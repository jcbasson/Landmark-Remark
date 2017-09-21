import React from 'react';
import PropTypes from 'prop-types';
import OtherRemarksModel from '../../../models/otherRemarksModel';

const LandMarkOtherRemarksPresenter = ({otherRemarks}) => (

    <aside id="landmark-others-remarks-component" className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-3">
        <header className="row"><h4>Others remarks</h4></header>
        <section id="landmark-others-remarks-list" className="row">
            {otherRemarks.map(otherRemark => (
                <article className="others-remark">
                    <header>
                        <label className="others-remark-username">{otherRemark.userName}</label>
                        <time className="others-remark-date">
                            {otherRemark.dateMade}
                        </time>
                    </header>
                    <p className="others-remark-text">
                        otherRemark.remark
                    </p>
                </article>
            ))}
        </section>
    </aside>
);


LandMarkOtherRemarksPresenter.propTypes = {
    otherRemarks: PropTypes.arrayOf(OtherRemarksModel).isRequired,
};

export default LandMarkOtherRemarksPresenter;