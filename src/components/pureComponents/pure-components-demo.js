import React from 'react';

export class PureComponentDemo extends React.PureComponent {
    state = {
        counter: 10
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({counter: 10});
        },1000)
    }

    render() {
        return <h1>{this.state.counter}</h1>;
    }
}