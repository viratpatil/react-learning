import logo from './logo.svg';
import './App.css';
import { CustomTextInput } from './components/refs/CustomTextInput';
import CounterComponent from './components/errorBoundaries/CounterComponent';
import { ErrorBoundary } from './components/errorBoundaries/ErrorBoundary';
import { HooksComp } from './components/hooks/hooksComp';
import ThemeContextProvider from './components/contextapi/ThemeContext';
import LanguageContextProvider from './components/contextapi/LanguageContext';
import { PureComponentDemo } from './components/pureComponents/pure-components-demo';
import ClickCounter from './components/higherOrderFunctions/higher-order-component';
import ParentCounterRP  from './components/RenderProps/ParentCounterRP';
import UseEffectComponent from './components/functionalComponents/UseEffectComponent';
import HOCClick from './components/higherOrderFunctions/hocComps/hoc-click';
import HOCHover from './components/higherOrderFunctions/hocComps/hoc-hover';
import CommentList from './components/farnell/comment-list';
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import PostComponent from './components/functionalComponents/PostComponent';
import StringComp from './components/stringcomp/string-comp';
import HookMemo from './components/hooks/hookMemo';
import CounterRP from './components/RenderProps/CounterRP';

function App() {

  // console.log('Testing OVerride', new Date().toDateString());
  const animalList = [
    {id: 1, name: 'Tiger', desc: 'I am Tiger'},
    {id: 2, name: 'Lion', desc: 'I am Lion'},
    {id: 3, name: 'Goat', desc: 'I am Goat'}  
  ];
  return <LanguageContextProvider>
          <StringComp animals={animalList}></StringComp>
        <HookMemo></HookMemo>
        {/* <HoverRP></HoverRP> */}
        {/* <ParentCounterRP render={(count, increment) => {
            return <HoverRP increment={increment} count={count}></HoverRP>
        }}></ParentCounterRP> */}

   {/* <ParentCounterRP render={({count, increment}) => {
            return <CounterRP increment={increment} count={count}></CounterRP>
        }}></ParentCounterRP> */}
        <CounterRP></CounterRP>
    </LanguageContextProvider>;
}

export default App;
