import React from 'react';
import { createContext } from 'react';


export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {a:1, b: 2};
    render() {
         return <ThemeContext.Provider value={{...this.state}}>{this.props.children}</ThemeContext.Provider>
    }
}

export default ThemeContextProvider;
