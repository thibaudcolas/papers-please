import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from '../components/app';
import PaperSubmissionForm from '../components/paper-submission-form';
import PaperStyleReport from '../components/paper-style-report';

export default (
    <Route path='/' handler={App}>
        <DefaultRoute handler={PaperSubmissionForm}/>
        <Route name='report' handler={PaperStyleReport}/>
    </Route>
);
