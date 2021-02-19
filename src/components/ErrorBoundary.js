import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError = false
        }
    }
    
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
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