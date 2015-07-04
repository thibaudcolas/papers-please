'use strict';

import React from 'react';

export default React.createClass({
    displayName: 'PaperSubmissionForm',

    render() {
        return (
            <form action='/submit-paper' method='post' encType='multipart/form-data'>
                <label htmlFor='paper'>
                    Your paper
                    <input type='file' name='paper'/>
                    <input type='submit' value='Submit'/>
                </label>
            </form>
        );
    }
});
