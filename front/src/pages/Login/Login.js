import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userid, setUserId] = useState("");
  const [userpw, setUserPw] = useState("");

  const onChangeId = (e) => {
    setUserId(e.target.value);
    console.log(e.target.value);
  };

  const onChangePw = (e) => {
    setUserPw(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <body id="login">
        <form action="homepage.html" name="login" className="login">
          <legend>로그인</legend>
          <input
            type="text"
            placeholder="아이디"
            name="login_id"
            onChange={onChangeId}
          />
          <br />
          <input
            type="password"
            placeholder="비밀번호"
            name="login_pw"
            onChange={onChangePw}
          />
          <br />
          <input type="submit" value="로그인" />
          <div className="signup">
            회원이 아니시라면 <a href="signup.html">회원가입</a>을 해주시기
            바랍니다.
          </div>
        </form>
      </body>
    </div>
  );
};

export default Login;
