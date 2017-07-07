import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList : []
        }
    }

    onChangeHandler(event) {
        this.props.onChange(event.target.value);
    }

    clearInputField(e) {
        document.getElementById('comment-form').reset();
    }

    onSubmitHandler(event) {
        var newComment = this.props.text;
        this.setState({
            commentlist: this.state.commentList.push(newComment)
        });
        this.clearInputField();
    }

    render() {
        const commentArray = this.state.commentList.map((comments) =>
        <ol className="comments-list">
            <li>{comments}</li>
        </ol>

        );
        return (
            <div>
                <h4>Add Comments</h4>
                <form id="comment-form" onSubmit={this.onSubmitHandler.bind(this)}>
                        <textarea
                            className="form-control"
                            placeholder="Comments here..."
                            onChange={this.onChangeHandler.bind(this)}
                        />
                    <br></br>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                <div>
                    <h4>User Comments</h4>
                    <hr></hr>
                    {commentArray}
                </div>
            </div>
        );
    }
}

export default App;