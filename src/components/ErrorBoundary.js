import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError = false
        }
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>Opps. You broke it.</h1>
        } else {
            this.props.children
        }
    }
}

export default ErrorBoundary;