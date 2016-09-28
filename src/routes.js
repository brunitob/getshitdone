import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TaskNew from './components/task_new';


export default (
	<Route path="/" component={App} >
		<Route path="new" component={TaskNew} />
	</ Route>
);