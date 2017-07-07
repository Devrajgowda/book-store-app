import React from 'react';
import ReactDOM from 'react-dom';

export default class ShowIcon extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <button type="button" className="btn btn-info btn-md" title={this.props.iconTitle}>
            <span className={this.props.styleName}></span>{this.props.text}
        </button>
        );
    }
}

