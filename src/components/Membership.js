import { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";

const Membership = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="membership">
      <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
      <div className="email-box">
        <label className={isFocused ? "focused" : ""}>
          <span>이메일 주소</span>
          <input
          type="email"
          onFocus={()=>{setIsFocused(true)}}
          onBlur={(event)=>{
            if(event.target.value === ""){
              setIsFocused(false);
            }
          }}
          />
        </label>
        <button>시작하기 <VscChevronRight /></button>
      </div>
    </div>
  );
};

export default Membership;