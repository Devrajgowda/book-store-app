import React, { Component } from 'react';

class RatingApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating : 0
        }
    }

    handleChange(e) {
        this.setState({rating:e.target.value});
    }

    render() {
        return (
            <div>
                <h4>User Ratings</h4>
                <select
                    className="select-options"
                    multiplevalue={this.state.rating}
                    onChange={this.handleChange.bind(this)}
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br></br>
                <hr></hr>
                <div>
                    <h4>The rating provided by user is {this.state.rating}</h4>
                </div>
            </div>
        );
    }
}

export default RatingApp;