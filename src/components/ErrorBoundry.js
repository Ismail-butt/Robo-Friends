import React from 'react'

// Basically, Error Boundry will catch an error, if any error happens it will catch it. It's Like try & catch. It will show the Error to the user.
// This came in React16, bcz before this when some error happens, it will break the app or will give bad erros. So, it's best to use Error Boundry :)
class ErrorBoundry extends React.Component {
    constructor(props) {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err, info) {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return <h1>Ooops. That is not good</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundry