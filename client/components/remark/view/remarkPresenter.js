import React from 'react';
import PropTypes from 'prop-types';

const RemarkPresenter =({remark}) => (
    <article data-remark={remark} className="remark-component">
        <h1>You</h1>
        <p>Test comment</p>
    </article>
);


RemarkPresenter.propTypes = {
    remark: PropTypes.string.isRequired,
};

export default RemarkPresenter;