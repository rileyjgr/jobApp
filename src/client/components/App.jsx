import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={HomePage} />
                </div>
            </Router>
        )
    }
}
export default App;
