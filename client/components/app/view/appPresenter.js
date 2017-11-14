import React from 'react';
import HeaderComponent from '../../header/headerComponent';
import LandMarkRemarkComponent from '../../landMarkRemark/landMarkRemarkComponent';
import LandMarkOtherRemarksComponent from '../../landMarkOthersRemark/landMarkOtherRemarksComponent';
import ErrorBoundaryComponent from '../../errorBoundary/errorBoundaryComponent'

/**
 * @Function AppPresenter
 * @desc React Presenter function returning component jsx
 */
const AppPresenter = ({userMap, isFetching, modelService, actions, errorActions}) => (
    <main id="app-component" className="container-fluid">
        {isFetching && !userMap && <h2>Loading...</h2>}
        {!isFetching && userMap && <HeaderComponent></HeaderComponent>}
        <section className="row">
            {!isFetching
            && userMap
            && <ErrorBoundaryComponent actions={errorActions} sourceComponent="LandMarkRemark">
                <LandMarkRemarkComponent actions={{landMarkRemarkActions: actions.landMarkRemarkActions, googleMapActions: actions.googleMapActions}} modelService={modelService}>
                </LandMarkRemarkComponent>
            </ErrorBoundaryComponent>}
            {!isFetching
            && userMap
            && <ErrorBoundaryComponent actions={errorActions} sourceComponent="LandMarkOtherRemarks">
                <LandMarkOtherRemarksComponent></LandMarkOtherRemarksComponent>
            </ErrorBoundaryComponent>}
        </section>
    </main>
);
export default AppPresenter;