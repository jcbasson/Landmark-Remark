import React from 'react';

/**
 * @Function HeaderPresenter
 * @desc React Presenter function returning component jsx
 */
const HeaderPresenter =({userName}) => (
    <header id="land-remarks-header-component" className="row">
        <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9 col-xl-9">
            <h1>LANDMARK REMARK</h1>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-3">
            <h4>Hi, {userName}</h4>
        </div>
    </header>
);

export default HeaderPresenter;