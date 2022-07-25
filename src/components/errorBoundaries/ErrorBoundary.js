import React, {Component} from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
   
    static getDerivedStateFromError(error) {     
      return { hasError: true }; 
    }
    
    componentDidCatch(error, errorInfo) {       
      // logErrorToMyService(error, errorInfo); 
    }
   
    render() {
      if (this.state.hasError) {     
        return <h4>Something went wrong</h4>     
      }
      return this.props.children;
    }
}