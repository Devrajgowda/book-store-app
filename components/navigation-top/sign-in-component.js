import React from 'react';
import ReactDOM from 'react-dom';

export default class SignInComponent extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please login</h2>
                    <br></br>
                    <input type="text" className="form-control login" name="username" placeholder="Username" autofocus="" />
                    <br></br>
                    <input type="password" className="form-control login" name="password" placeholder="Password"/>
                    <br></br>
                    <button className="btn btn-primary" type="submit">Login</button>
                </form>
            </div>
        );
    }
}
