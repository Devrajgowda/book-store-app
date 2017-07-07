import { connect } from 'react-redux';
import App from './Comment.js';
import { bindActionCreators } from 'redux';
import CommentAction from '../actions/comment-action.js';

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onChange: CommentAction}, dispatch);
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer;
