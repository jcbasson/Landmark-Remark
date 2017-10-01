import React from 'react';
import PropTypes from 'prop-types';

const RemarkPresenter =({remark}) => (
    <article data-remark={remark.landMarkId} className="remark-component">
        <span>Date: {remark.dateMade}</span>
        <p>{remark.text}</p>
    </article>
);


RemarkPresenter.propTypes = {
    remark: PropTypes.string.isRequired,
};

export default RemarkPresenter;