import React,{Component} from 'react';

class StateComp extends Component{
    constructor(props){
        super(props);
        
        this.state={
            StateString : 'react',
            StateNumber : 501
        }
    }
    stringChange = (e)=>{
        this.setState({StateString:'리액트'});
        
    }
    numberChange=(e)=> {
        this.setState({StateNumber:60001});
    }

    render(){
        return(
            <>
            <button onClick={this.stringChange}> 스트링 변경</button><br/>
            StateString : {this.state.StateString}<br/>
            <button onClick={this.numberChange}> 넘버 변경</button><br/>
            StateNumber : {this.state.StateNumber}
            </>
        )
    }
}
export default StateComp;