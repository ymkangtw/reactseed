/*
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <MyAwesomeReactComponent />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
*/


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import MyComponent from './MyComponent.jsx';
import Hello from './hello.jsx';
import World from './world.jsx';
import style from './style.css';

injectTapEventPlugin();

const lightMuiTheme = getMuiTheme(lightBaseTheme);

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={lightMuiTheme}>
                <div>
                    <h1 className="head1">React Example!</h1>
                    <MyAwesomeReactComponent />
                    <MyComponent />
                    <Hello/>
                    <World/>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
