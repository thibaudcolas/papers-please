'use strict';

import React from 'react';
import Loader from 'react-loader';
import {Navigation} from 'react-router';
import $ from 'jquery';

export default React.createClass({
    displayName: 'PaperSubmissionForm',

    mixins: [Navigation],

    getInitialState() {
        return {
            loaded: true
        };
    },

    render() {
        const loaded = this.state.loaded;

        return (



            <Loader loaded={loaded}>
                <form action='/submit-paper' method='post' encType='multipart/form-data' onSubmit={this.onSubmit} className="form-inline">
                    <div className="form-group">
                      <label htmlFor='paper'>Upload Your Paper: </label>
                      <input type='file' name='paper' ref='paper' className="form-control"  />
                    </div>
                    <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
                </form>
            </Loader>
        );
    },

    onSubmit(e) {
        var paper = React.findDOMNode(this.refs.paper).files[0];
        var data = new FormData();

        data.append('paper', paper);

        this.setState({
            loaded: false
        });

        $.ajax({
            url: '/submit-paper',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: data => {
                data = JSON.parse(data);
                this.props.callback(data, () => {
                    this.setState({
                        loaded: true
                    });
                    this.transitionTo('report');
                });
            }
        });

        e.preventDefault();
    }
});
