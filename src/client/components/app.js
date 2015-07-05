'use strict';

import React from 'react';
import Loader from 'react-loader';
import { RouteHandler, Link } from 'react-router';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import stub from '../util/stub';

export default React.createClass({
    displayName: 'App',

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState() {
        return {
            loaded: false,
            report: stub[0]
        };
    },

    render() {
        const name = this.context.router.getCurrentPath();
        const segment = name.split('/')[1] || 'root';

        return (


            <div className='app card container-fluid'>
                <div className="row">
                    <div className="col-xs-12">
                        <TransitionGroup component="div" transitionName={segment === 'root' ? 'reversePageSwap' : 'pageSwap'}>
                            <RouteHandler key={segment} callback={this.retrieveReport} report={this.state.report}/>
                        </TransitionGroup>
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
