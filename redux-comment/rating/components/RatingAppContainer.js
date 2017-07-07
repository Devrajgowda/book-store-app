import { connect } from 'react-redux';
import RatingApp from './RatingApp.js';
import { bindActionCreators } from 'redux';
import RatingAction from '../actions/rating-action.js';

const mapStateToProps = (state) => {
    return {
        rating: state.rating
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onChange: RatingAction}, dispatch);
}

const RatingAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RatingApp)

export default RatingAppContainer;
