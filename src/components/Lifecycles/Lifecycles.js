import React, { Component } from 'react';

class Lifecycle extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            title: 'Lifecycle Component'
        };
    }
    //this component convers the lifecycle of a component
    
    
    componentWillMount(){
        console.log('before render');
    }
    
    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
            </div>
        );
    }
    
    componentDidMount(){
        console.log('after render');
    }
    
}

export default Lifecycle;