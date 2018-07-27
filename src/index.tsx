import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

// import { Home } from './components/Home';
import Todos from './containers/Todos';

// ReactDOM.render(<Home name="Thai" age={16} />, document.getElementById('app'));
ReactDOM.render(<Todos />, document.getElementById('app'));
