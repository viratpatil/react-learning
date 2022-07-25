import React from 'react';
import { LanguageContext, useLanguagePreferences } from '../contextapi/LanguageContext';
export class CustomTextInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.focusT = React.createRef();
        this.focusText = this.focusText.bind(this);
        
        
    }

    focusText() {
        this.focusT.current.focus();
    }

    render() {
        return (<div>
            <input type="text" ref={this.focusT}/>
            <button onClick={this.focusText}>Focus</button>
        </div>)
    }

}