import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent.jsx';
import Hello from './hello.jsx';
import World from './world.jsx';
import style from './style.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="head1">React Example!</h1>
                <MyComponent/>
                <Hello/>
                <World/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
