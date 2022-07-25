import React, {Component} from "react"
import withCounter from "./withCounter";

export const mulitplier = () => {

}

class ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return <button onClick={incrementCount}>Clicked {count}</button>
    }
}

export default withCounter(ClickCounter);



