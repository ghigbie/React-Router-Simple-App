import React, { Component } from 'react';

class Lifecycle extends Component{
    //this component convers the lifecycle of a component
    
    componentWillMount(){
        console.log('before render');
    }
    
    render(){
        return(
            <div>
                <h3></h3>
            </div>
        );
    }
    
    componentDidMount(){
        console.log('after render');
    }
    
}

export default Lifecycle;