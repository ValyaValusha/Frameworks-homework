import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './components/App'
import configureStore from './store/configureStore'
import EditNote from './containers/EditNote'
import ArchivedNotes from './components/ArchivedNotes'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <>
                <Route exact path="/" component={App} />
                <Route exact path="/edit/:id" component={EditNote} />
                <Route exact path="/archive" component={ArchivedNotes} />
            </>
        </Router>
    </Provider>,
document.getElementById('root'));
