import React, {Component} from 'react';
import Nav from './Components/Nav'
import Header from './Components/Header'
class App extends Component {
    render() {
        return (
            <div className="nitony-wrapper">
             <Nav />
             <Header />
            </div>

        );
    }
}

export default App;