import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import './style/main.scss';
import Header from './core/header.jsx';
import TransportNetwork from './components/transport_network_container.jsx';
import { configureStore, history} from './redux/store/configure_store.js';

const store = configureStore();

store.dispatch({type: 'GET_SERVICE_STATUS'})

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <TransportNetwork />
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
            <App />
      </Router>
    </Provider>,
    document.getElementById('root')
)

