import React from 'react';

export const initTodos=[
    {
        id:1,
        title:'todo1',
        count:0,
        complete:false
    },
    {
        id:2,
        title:'todo2',
        count:0,
        complete:false
    },
    {
        id:3,
        title:'todo3',
        count:0,
        complete:false
    }
    
]

export const reducer = (state,action)=>{
    switch(action.type){
        case "COMPLETE":
            return(
                state.map(todo =>{
                    if(todo.id===action.id){
                        return{...todo, complete:!todo.complete}
                    }else return todo
                })
            )

        case "INCREMENT" : 
        return(
            state.map(todo=>{
                if(todo.id===action.id){
                    return{...todo,count:todo.count+1}
                }
                else return todo
            })
        )
        default : return state;
    }
}
//map 변경 find 하나찾기 filter  여러개 찾기

const MyReducer = () => {
    return (
        <div>
        </div>
    );
};

export default MyReducer;