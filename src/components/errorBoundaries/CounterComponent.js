import React, {Component} from 'react';
import { ThemeContext} from '../contextapi/ThemeContext';

const test = () => {
    const ar = [1, 2, 3, 4];
    const x = ar.reduce((pv, cv) => {
        return pv + cv;
    }, 10);

    console.log(x);
}

export default class CounterComponent extends Component {
    static contextType = ThemeContext;
    
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            title: 'Testing Error Boundaries'
        }
        this.incrementCounter = this.incrementCounter.bind(this)
    }

    incrementCounter(){
        this.setState(prevState => {
            console.log(prevState);
            return {counter: prevState.counter + 1}
        });
    }
    
    render () {
        console.log(this.context); 

        test();
        // console.log("aaaa", a);
        if(this.state.counter === 2){
            throw new Error('Crashed');
        }
        return (
        <div>
            <h1>{this.state.title}</h1>
            <h3>{this.state.counter}</h3>
            <button onClick={this.incrementCounter}>Increment Value</button>
        </div>
        );
    }
}