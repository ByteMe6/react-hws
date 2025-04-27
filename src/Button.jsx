import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { onClick } = this.props;
        return <button onClick={onClick}>Натисни мене (там в консоли соо будет)</button>;
    }
}

export default Button;
