import React from 'react';
import HeaderComponent from '../../header/headerComponent';
import LandMarkRemarkComponent from '../../landMarkRemark/landMarkRemarkComponent';
import LandMarkOtherRemarksComponent from '../../landMarkOthersRemark/landMarkOtherRemarksComponent';
import ErrorBoundaryComponent from '../../errorBoundary/errorBoundaryComponent'

/**
 * @Function AppPresenter
 * @desc React Presenter function returning component jsx
 */
const AppPresenter = ({userMap, isFetching, didInvalidate, modelService, actions, errorActions}) => (
    <main id="app-component" className="container-fluid">
        {isFetching && !didInvalidate && !userMap.user && <h2>Loading...</h2>}
        {!isFetching && didInvalidate && <h2>Invalid user.</h2>}
        {!isFetching && !didInvalidate && userMap && userMap.user && <HeaderComponent></HeaderComponent>}
        <section className="row">
            {!isFetching
            && !didInvalidate
            && userMap
            && userMap.user
            && <ErrorBoundaryComponent actions={errorActions} sourceComponent="LandMarkRemark">
                <LandMarkRemarkComponent actions={{landMarkRemarkActions: actions.landMarkRemarkActions, googleMapActions: actions.googleMapActions}} modelService={modelService}>
                </LandMarkRemarkComponent>
            </ErrorBoundaryComponent>}
            {!isFetching
            && !didInvalidate
            && userMap
            && userMap.user
            && <ErrorBoundaryComponent actions={errorActions} sourceComponent="LandMarkOtherRemarks">
                <LandMarkOtherRemarksComponent></LandMarkOtherRemarksComponent>
            </ErrorBoundaryComponent>}
        </section>
    </main>
);
export default AppPresenter;