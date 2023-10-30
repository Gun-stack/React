
export const initState= {
    id:'hong',
    nickname:'baksa',
    subject:'computer',
    grade:'1'
};

export const reducer = (state,action)=>{
    switch(action.type){
        case "IC" : return {...state, id:action.payload}
        case "NC" : return {...state, nickname:action.payload}
        case "SC" : return {...state, subject:action.payload}
        case "GC" : return {...state, grade:action.payload}
        default : return state;
    }
};

