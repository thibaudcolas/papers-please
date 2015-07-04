'use strict';

import React from 'react';
import {Navigation} from 'react-router';
import $ from 'jquery';

export default React.createClass({
    displayName: 'PaperSubmissionForm',

    mixins: [Navigation],

    render() {
        return (
            <form action='/submit-paper' method='post' encType='multipart/form-data' onSubmit={this.onSubmit}>
                <label htmlFor='paper'>
                    Your paper
                    <input type='file' name='paper' ref='paper'/>
                    <input type='submit' value='Submit'/>
                </label>
            </form>
        );
    },

    onSubmit(e) {
        var paper = React.findDOMNode(this.refs.paper).files[0];
        var data = new FormData();

        data.append('paper', paper);

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
                    this.transitionTo('report');
                });
            }
        });

        e.preventDefault();
    }
});
