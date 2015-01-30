'use strict';
var React = require('react');

var Test = React.createClass({
    getInitialState: function () {
        return {now: 0};
    },
    updateTime: function () {
        this.setState({now: new Date().getTime()});
        setTimeout(this.updateTime, 1000);
    },
    componentDidMount: function () {
        setTimeout(this.updateTime, 1000);
    },
    render: function () {
        return (
            <div>
                <span>Hello, world! From React!</span>
                <br />
                <span>{this.props.foo}</span>
                <br />
                <span>{this.state.now}</span>
            </div>
        );
    }
});

module.exports = Test;
