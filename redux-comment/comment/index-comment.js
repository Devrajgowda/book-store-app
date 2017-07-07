import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import CommentReducer from './reducers/comment-reducer.js'
import AppContainer from './components/CommentContainer.js';

let store = createStore(CommentReducer, {text: 'Initial text'});

export default class ReduxCommentComponent extends Component {
    render() {
        return(
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}


