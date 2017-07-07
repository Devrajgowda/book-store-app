import React, {Component} from 'react';
import RatingReduxComment from './rating/index-rating.js';
import ReduxCommentComponent from './comment/index-comment.js';


export default class CommentRating extends Component {
    render() {
        return(
            <div>
                <div className="col-sm-4">
                    <RatingReduxComment/>
                </div>
                <div className="col-sm-4">
                    <ReduxCommentComponent/>
                </div>
            </div>
        );
    }
}

