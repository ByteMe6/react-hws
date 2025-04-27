import React, { Component } from 'react';

class Message extends Component {
    render() {
        const { text } = this.props;
        return <p>{text}</p>;
    }
}

export default Message;
