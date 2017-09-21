import React from 'react';
import PropTypes from 'prop-types';
import UserModel from '../../../models/userModel';
import HeaderComponent from '../../header/headerComponent';
import LandMarkRemarkComponent from '../../landMarkRemark/landMarkRemarkComponent';
import LandMarkOtherRemarksComponent from '../../landMarkOthersRemark/landMarkOtherRemarksComponent';

const AppPresenter =({user,isFetching, lastUpdated} ) => (
    <main id="app-component" className="container-fluid">
        <HeaderComponent></HeaderComponent>
        <section  className="row">
            <LandMarkRemarkComponent></LandMarkRemarkComponent>
            <LandMarkOtherRemarksComponent></LandMarkOtherRemarksComponent>
        </section>
    </main>
);

AppPresenter.propTypes = {
    user : PropTypes.objectOf(UserModel).isRequired
};

export default AppPresenter;