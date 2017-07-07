import React, {Component} from 'react';
import ReactDOM, { render }  from 'react-dom';
import RegisterComponent from './navigation-top/register-component.js';
import SignInComponent from './navigation-top/sign-in-component.js';
import ShowIcon from './common/icon-component.js';
import HomeScreen from './navigation-top/home-screen.js';
import HelpScreen from './navigation-top/additional-options/help-screen.js';
import ReviewAndComment from './navigation-top/additional-options/review-comment.js';
import ChangePassword from './navigation-top/additional-options/change-password.js';
import Introduction from './navigation-left/introduction.js';
import StepsToFollow from './navigation-left/steps-to-follow.js';
import TermsAndConditions from './navigation-left/terms-conditions.js';
import OpenRequirements from './navigation-left/open-requirements.js';
import SalesAndMarketing from './navigation-left/sales-and-marketing.js';
import PieChart from './common/pie-chart.js';
import FetchBookData from './data-fetch.js';
import 'isomorphic-fetch';
import CommentRating from '../redux-comment/comment-rating';
// import './navigation-left/navigation-title/navigation-left-titles';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

class MainHeader extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            header_title: 'Online Book Store',
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 1500);

    }

    render() {
        const isLoading = this.state.isLoading;
        if (isLoading) {
            return(
                <div className="container">
                    <div className="loader"></div>
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">
                                    <strong>{this.state.header_title} <span
                                        className="glyphicon glyphicon-folder-open"></span></strong>
                                </a>
                            </div>
                            <div>
                                <ul className="nav navbar-nav nav-options">
                                    <li>
                                        <Link to="/">
                                            <ShowIcon styleName="glyphicon glyphicon glyphicon-home"
                                                      iconTitle="Home Screen"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/register">
                                            <ShowIcon styleName="glyphicon glyphicon-registration-mark" text="Register"
                                                      iconTitle="Register"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signin">
                                            <ShowIcon styleName="glyphicon glyphicon glyphicon-user" text="Sign in"
                                                      iconTitle="Sign in"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown dropdown-toggle" data-toggle="dropdown"><b
                                            className="caret"></b></Link>
                                        <ul className="dropdown-menu pull-right">
                                            <li className="dropdown-item">
                                                <Link to="/change"><strong>Change your password</strong></Link>
                                            </li>
                                            <hr></hr>
                                            <li className="dropdown-item">
                                                <Link to="/review"><strong>Online Reviews</strong></Link>
                                            </li>
                                            <hr></hr>
                                            <li className="dropdown-item">
                                                <Link to="/help"><strong>Help and info</strong></Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="sidebar-nav">
                                <nav className="navbar navbar-default" role="navigation">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li>
                                            <Link to="/introduction">
                                                <p className="nav-titles">Introduction</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/steps">
                                                <p className="nav-titles">Steps to get started</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/sales">
                                                <p className="nav-titles">Sales and Marketing</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/terms">
                                                <p className="nav-titles"> Terms and Conditions</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/requirements">
                                                <p className="nav-titles">Open Requirements</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/booklists">
                                                <p className="nav-titles">Available Books</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/comments">
                                                <p className="nav-titles">Comments and Ratings</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <PieChart/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

ReactDOM.render((
    <Router>
        <Route path="/" component={MainHeader}>
            <IndexRoute component={HomeScreen} />
            <Route path="register" component={RegisterComponent} />
            <Route path="signin" component={SignInComponent} />
            <Route path="change" component={ChangePassword}/>
            <Route path="review" component={ReviewAndComment}/>
            <Route path="help" component={HelpScreen}/>
            <Route path="introduction" component={Introduction}/>
            <Route path="sales" component={SalesAndMarketing}/>
            <Route path="terms" component={TermsAndConditions}/>
            <Route path="requirements" component={OpenRequirements}/>
            <Route path="steps" component={StepsToFollow}/>
            <Route path="booklists" component={FetchBookData}/>
            <Route path="comments" component={CommentRating}/>
        </Route>
    </Router>
), document.getElementById('app'))

