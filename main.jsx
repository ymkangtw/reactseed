import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React!!!</h1>
                <MyComponent/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
