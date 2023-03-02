import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {TestRender} from './test-render/TestRender' // old react component
import {TabContainer} from './test-18/test-transition/TestTransition'

// ReactDOM.render(<TestRender/>, document.getElementById('root-old'))

const root = createRoot(document.getElementById('root-18'))
root.render(<StrictMode><TabContainer /></StrictMode>);
// root.render(<TabContainer />);
