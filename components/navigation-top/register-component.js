import React from 'react';
import ReactDOM from 'react-dom';

export default class RegisterComponent extends React.Component {
    render() {
        return (
            <div>
                <form className="form-signup">
                    <h2 className="form-signup-heading">Please Register...</h2>
                    <br></br>
                    <label id="email">Email</label>
                    <input type="email" for="email" className="form-control login" name="email" placeholder="Email" autofocus="" />
                    <br></br>
                    <label id="password">Password</label>
                    <input type="password" className="form-control login" for="password" name="password" placeholder="Password"/>
                    <br></br>
                    <label id="phone">Contact Number</label>
                    <input type="number" for="phone" className="form-control login" name="phone" placeholder="Phone Number"/>
                    <br></br>
                    <button className="btn btn-primary" type="submit">Register</button>
                </form>
            </div>
        )
    }
}