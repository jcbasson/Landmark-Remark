import React from 'react';
import PropTypes from 'prop-types';
import UserModel from '../../../models/userModel';
import HeaderComponent from '../../header/headerComponent';
import LandMarkRemarkComponent from '../../landMarkRemark/landMarkRemarkComponent';
import LandMarkOtherRemarksComponent from '../../landMarkOthersRemark/landMarkOtherRemarksComponent';

const AppPresenter =({user,isFetching, didInvalidate} ) => (
    <main id="app-component" className="container-fluid">

        {isFetching && !didInvalidate && !user && <h2>Loading...</h2>}
        {!isFetching && !didInvalidate && user && <h2>Empty.</h2>}
        {!isFetching && didInvalidate &&  <h2>Invalid user.</h2>}
        {!isFetching && !didInvalidate && user && <HeaderComponent></HeaderComponent>}
        <section  className="row">
            {!isFetching && !didInvalidate && user && <LandMarkRemarkComponent></LandMarkRemarkComponent>}
            {!isFetching && !didInvalidate && user && <LandMarkOtherRemarksComponent></LandMarkOtherRemarksComponent>}
        </section>
    </main>
);

AppPresenter.propTypes = {
    user : PropTypes.objectOf(UserModel).isRequired
};

export default AppPresenter;