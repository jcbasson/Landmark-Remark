import React from 'react';
//import PropTypes from 'prop-types';

const AppPresenter =({layouts,isFetching, lastUpdated} ) => (
    <main id="app-component" className="container-fluid">
        <header id="land-remarks-header-component" className="row">
            <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                <h1>LANDMARK REMARK</h1>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                <h4>Hi, Username</h4>
            </div>
        </header>
        <section id="landmark-remarks-component" className="row">
            <section  className="col-xs-12 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                <div className="row">
                    <header className="col-xs-7">
                        <h3>Your landmarks</h3>
                    </header>
                    <div className="col-xs-5">
                        <label className="lblClickToMark">Click to make your mark</label>
                    </div>
                </div>
                <div className="row">
                    <div id="landmark-remarks-map-component">
                        <div id="landmark-remarks-map"></div>
                    </div>
                </div>
            </section>
            <aside id="landmark-others-remarks-component" className="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                <header className="row"><h4>Others remarks</h4></header>
                <section id="landmark-others-remarks-list" className="row">
                    <article className="others-remark">
                        <header>
                            <label className="others-remark-username">Someone1</label>
                            <time className="others-remark-date">
                                20/09/2017
                            </time>
                        </header>
                        <p className="others-remark-text">
                            This place was not awesome!
                        </p>
                    </article>
                    <article className="others-remark">
                        <header>
                            <label className="others-remark-username">Someone2</label>
                            <time className="others-remark-date">
                                20/09/2017
                            </time>
                        </header>
                        <p className="others-remark-text">
                            This place is fantastic!
                        </p>
                    </article>
                    <article className="others-remark">
                        <header>
                            <label className="others-remark-username">Someone3</label>
                            <time className="others-remark-date">
                                19/09/2017
                            </time>
                        </header>
                        <p className="others-remark-text">
                            This place was great!
                        </p>
                    </article>
                    <article className="others-remark">
                        <header>
                            <label className="others-remark-username">Someone4</label>
                            <time className="others-remark-date">
                                7/08/2017
                            </time>
                        </header>
                        <p className="others-remark-text">
                            This place was not fun!
                        </p>
                    </article>
                    <article className="others-remark">
                        <header>
                            <label className="others-remark-username">Someone5</label>
                            <time className="others-remark-date">
                                1/08/2017
                            </time>
                        </header>
                        <p className="others-remark-text">
                            I don't know anything about this place!
                        </p>
                    </article>
                    <article className="others-remark">
                        <header>
                            <label className="others-remark-username">Someone6</label>
                            <time className="others-remark-date">
                                15/07/2017
                            </time>
                        </header>
                        <p className="others-remark-text">
                            This place was fun!
                        </p>
                    </article>
                </section>
            </aside>
        </section>
    </main>
);

AppPresenter.propTypes = {

}

export default AppPresenter;