import React from 'react';
/**
 * @Function LandMarkOtherRemarksPresenter
 * @desc React Presenter function returning component jsx
 */
const LandMarkOtherRemarksPresenter = ({otherRemarks}) => (

    <aside id="landmark-others-remarks-component" className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-3">
        <header className="row"><h4>Others remarks</h4></header>
        <section id="landmark-others-remarks-list" className="row">

            {otherRemarks && otherRemarks.length > 0 && otherRemarks.map((otherRemark, index) => (
                <article key={index} className="others-remark">
                    <header>
                        <label className="others-remark-username">{otherRemark.userName}</label>
                        <time className="others-remark-date">
                            {otherRemark.remark.dateMade}
                        </time>
                    </header>
                    <p className="others-remark-text">
                        {otherRemark.remark.text}
                    </p>
                </article>
            ))}
        </section>
    </aside>
);
export default LandMarkOtherRemarksPresenter;