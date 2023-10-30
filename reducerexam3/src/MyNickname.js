
const MyNickname = ({info,dispatch}) => {

    return (
        <div>
            <label>{info.nickname}</label><br></br>
            <input type='text' onInput={(e)=> dispatch({type:'NC', payload :e.target.value})}/>
            <br></br>
        </div>
    );
};

export default MyNickname;