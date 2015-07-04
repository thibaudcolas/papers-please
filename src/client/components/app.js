'use strict';

import React from 'react';
import Loader from 'react-loader';
import $ from 'jquery';
import ProgressChart from './progress-chart';
import PaperSubmissionForm from './paper-submission-form';
import formatters from '../util/formatters';

export default React.createClass({
    displayName: 'App',

    getInitialState() {
        const rate = 10;

        $.getJSON('/hello', data => {
            this.setState({
                loaded: data.test
            });
        });

        return {

            // This is the parameter that will make our results change.
            rate: rate,

            // This is the results from our calculation.
            forecast: this.computeStubData(rate),

            loaded: false
        };
    },

    render() {
        const rangeConfig = {
            type: 'range',
            defaultValue: 10,
            max: 20,
            min: 1,
            step: 1
        };

        const goalNumber = formatters.vagueMoney(this.state.forecast.moneyGoal);
        const rateNumber = formatters.vaguePercent(this.state.rate / 100);

        return (
            <div className='app card container-fluid'>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Papers, Please!</h1>
                        <PaperSubmissionForm/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p className='pull-right'>{goalNumber + ' goal'}</p>
                        <p className='text-left'>Money</p>
                        <ProgressChart {...this.state}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p className='pull-right'>{rateNumber}</p>
                        <p className='text-left'>Rate</p>
                        <input
                            ref='rate'
                            onChange={this.changeRate}
                            onClick={this.changeRate}
                            {...rangeConfig}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12" style={{minHeight: '80px'}}>
                        <Loader loaded={this.state.loaded}>
                            <p>Loaded</p>
                        </Loader>
                    </div>
                </div>
            </div>
        );
    },

    // Grabs the current rate from the slider, then updates the React state.
    changeRate() {
        const rateSlider = React.findDOMNode(this.refs.rate);
        const rate = parseInt(rateSlider.value, 10);

        this.setState({
            rate: rate,
            forecast: this.computeStubData(rate)
        });
    },

    // Does cool financial calculations for us.
    computeStubData(rate) {
        const futureValue = r => 5000 * Math.pow(1 + (r / 100 / 1), 10);

        return {
            money: futureValue(rate),
            moneyPotential: futureValue(rate + 2),
            moneyGoal: 30000
        };
    }
});
