'use strict';

import React from 'react';
import Loader from 'react-loader';
import { RouteHandler, Link } from 'react-router';

import stub from '../util/stub';

export default React.createClass({
    displayName: 'App',

    getInitialState() {
        return {
            loaded: false,
            report: stub
        };
    },

    render() {
        return (
            <div className='app card container-fluid'>
                <div className="row">
                    <div className="col-xs-12">
                        <Link to="/">
                            <h1>Papers, Please!</h1>
                        </Link>
                        <RouteHandler callback={this.retrieveReport} report={this.state.report}/>
                    </div>
                </div>
            </div>
        );
    },

    retrieveReport(report, callback) {
        this.setState({
            report: report
        }, callback);
    }
});
