import React from 'react';
import PropTypes from 'prop-types';
import UserMap from '../../../models/userMapModel';
import HeaderComponent from '../../header/headerComponent';
import LandMarkRemarkComponent from '../../landMarkRemark/landMarkRemarkComponent';
import LandMarkOtherRemarksComponent from '../../landMarkOthersRemark/landMarkOtherRemarksComponent';

const AppPresenter =({userMap,isFetching, didInvalidate, modelFactory} ) => (
    <main id="app-component" className="container-fluid">
        {isFetching &&  !didInvalidate &&  !userMap.user && <h2>Loading...</h2>}
        {!isFetching && didInvalidate && <h2>Invalid user.</h2>}
        {!isFetching && !didInvalidate && userMap  && userMap.user && <HeaderComponent></HeaderComponent>}
        <section  className="row">
            {!isFetching && !didInvalidate && userMap && userMap.user && <LandMarkRemarkComponent modelFactory={modelFactory}></LandMarkRemarkComponent>}
            {!isFetching && !didInvalidate && userMap && userMap.user &&  <LandMarkOtherRemarksComponent></LandMarkOtherRemarksComponent>}
        </section>
    </main>
);

AppPresenter.propTypes = {
    userMap : PropTypes.objectOf(UserMap).isRequired
};
export default AppPresenter;