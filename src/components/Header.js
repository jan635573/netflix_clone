import { useNavigate } from "react-router-dom";
import Membership from "./Membership";
import { IoLanguage } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <h1>Netflix</h1>
        <div>
          <span><IoLanguage /></span>
          <select>
            <option>한국어</option>
            <option>English</option>
          </select>
          <button onClick={()=>{navigate("/login")}}>로그인</button>
        </div>
      </nav>
      <div className="header-contents">
        <h2>영화, 시리즈 등을<br/>무제한으로</h2>
        <h4>5,500원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</h4>
        <Membership />
      </div>
    </header>
  );
};

export default Header;