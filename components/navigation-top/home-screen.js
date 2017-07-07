import React from 'react';
import ReactDOM from 'react-dom';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="dash-board">
                <img className="home_image" src="http://www.freeiconspng.com/uploads/dashboard-icon-32.png" />
                <h2>Welcome!!!</h2>
            </div>
        );
    }
}