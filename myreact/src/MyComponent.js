import React,{Component} from 'react';

class MyComponent extends Component{
    
    //컴포넌트 생성자 메소드, 컴포넌트 호출시 가장먼저 실행되는 매서드
    //this.props, this.state 에 접근 가능 하며 리액트 요소를 반홚나다.
    //props from 부모 state from 자신
    constructor(props){
        super(props)
        this.state={}
        console.log("constructor");
    }

    //props 부터 파생된 state를 가져온다 즉 props 로 받아온것을 state에 넣어주고 싶을떄 사용한다. 잘안쓴다

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")
        return{param1:props.data};
    }
   
    //컴포넌트를 렌더링하는 메소드.
    render(){
        console.log("render");
        return(
            <h2>[ This is Imported Component]</h2>
        )
    }

    //컴포넌트가 마운트 됨 , 즉 컴포넌트의 첫번쨰 랜더링을 마치면 호출되는 메소드 
    //이 메서드가 호출되는 시점에는  화면에 컴포넌트가 나타난 상태이다
    //여기서 주로 dom을 사용해야 하는 외부 라이브러리를 연동, 해당 컴포넌트에서 필요로 하는 데이터를 요청한다.
    //dom==html을 의미 
    componentDidMount(){
        console.log("componentDidMount :"+this.state.param1);
    }

    // 컴포넌트가 리렌더링 할지말지 경정 메서드 true/false반환
    shouldComponentUpdate(props,state){
        console.log("shouldComponentUpdate")
        return TextTrackCue;
    }

    //컴포넌트가 업데이트 되고 난 후 발생
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }



}

// function MyComponent(){
//     return(
//         <h2>[ This is Imported Component] </h2>
//     )
// }

export default MyComponent;