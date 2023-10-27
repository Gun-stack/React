import{Link}from "react-router-dom";
import "./Header.css";
const Header = ()=> {
    const style = {width:'100%',height:'100px',position:'fixed',left:0,top:0,zIndex:10};
    return(
        <div style={style}>
            <ul className='Nav-items'>
                <li className='Nav-item'>
                    <Link to={"/"} id='logo'><i><b>kosta.com</b></i></Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/login"}>로그인</Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/join"}>회원가입</Link>
                </li>
                <li className='Nav-item'>
                        <Link to={"/boardlist"}>게시판</Link>
                </li>
            </ul>
        </div>

    )
}
export default Header;