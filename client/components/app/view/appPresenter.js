import React from 'react';
import HeaderComponent from '../../header/headerComponent';
import LandMarkRemarkComponent from '../../landMarkRemark/landMarkRemarkComponent';
import LandMarkOtherRemarksComponent from '../../landMarkOthersRemark/landMarkOtherRemarksComponent';

const AppPresenter = ({userMap, isFetching, didInvalidate, modelService, actions}) => (
    <main id="app-component" className="container-fluid">
        {isFetching && !didInvalidate && !userMap.user && <h2>Loading...</h2>}
        {!isFetching && didInvalidate && <h2>Invalid user.</h2>}
        {!isFetching && !didInvalidate && userMap && userMap.user && <HeaderComponent></HeaderComponent>}
        <section className="row">
            {!isFetching
            && !didInvalidate
            && userMap
            && userMap.user
            && <LandMarkRemarkComponent actions={{landMarkRemarkActions: actions.landMarkRemarkActions, googleMapActions: actions.googleMapActions}} modelService={modelService}></LandMarkRemarkComponent>}
            {!isFetching
            && !didInvalidate
            && userMap
            && userMap.user && <LandMarkOtherRemarksComponent></LandMarkOtherRemarksComponent>}
        </section>
    </main>
);
export default AppPresenter;