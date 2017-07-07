import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import RatingReducer from './reducers/rating-reducer.js'
import RatingAppContainer from './components/RatingAppContainer.js';

let store = createStore(RatingReducer, {rating: 0});

export default class RatingReduxComment extends Component {
    render() {
        return(
            <Provider store={store}>
                <RatingAppContainer />
            </Provider>
        );
    }
}