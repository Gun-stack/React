import{Link}from "react-router-dom";
import "./Header.css";
const Header= () =>{
    const style = {backgroundColor:'white',width:"100%",position:'fixed',left:0,top:0,zIndex:10} ;
    return(
        <div style={style}>
            <ul className='Nav-items'>
                <li className='Nav-item'>
                    <Link to={"/"} id='logo'><i>toto<b>bank</b></i></Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/login"}>로그인</Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/join"}>회원가입</Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/board"}>게시판</Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/makeaccount"}>계좌개설</Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/deposit"}>입금</Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/withdraw"}>출금</Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/accountinfo"}>계좌조회</Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/allaccountinfo"}>전체계좌조회</Link>
                </li>
            </ul>
        </div>
    )

}
export default Header;