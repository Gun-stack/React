import {initTodos,reducer} from './MyReducer';
import React, { useReducer} from 'react';

const ReducerEx1 = () => {
    const [todos,dispatch] = useReducer(reducer,initTodos);
    
    return (
        <div>
            {todos.map((todo) => 
                <div key={todo.id}>
                    <label>
                        <input type='checkbox' checked={todo.complete} onChange={()=> dispatch({type:'COMPEELETE',id:todo.id})}/>
                        {todo.title}&nbsp;
                        {todo.count}&nbsp;
                        <button onClick={()=>dispatch({type:'INCRECEMENT',id:todo.id})}>+</button>
                    </label>
                </div>
            )}
        </div>
    );
};

export default ReducerEx1;