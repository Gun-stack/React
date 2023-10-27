// import React, {Component} from 'react';
// class MyComponent extends Component{
//     render(){
//         let {name,age} = this.props.info;

//         return(
//             <div>
//                 {/* <h1>{this.props.info.name}</h1>
//                 <h1>{this.props.info.age}</h1> */}
//                 <h1>{name}</h1>
//                 <h1>{age}</h1>

//             </div>
//         )   
//     }
// }

function MyComponent({name,age}){
        return(
            <>
                <h1>{name}</h1>
                <h1>{age}</h1>
            </>
        )   
}

export default MyComponent;