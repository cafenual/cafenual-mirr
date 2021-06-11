import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [userpw, setUserPw] = useState("");
  const [userpwCheck, setUserPwCheck] = useState("");

  const onChangepw = (e) => {
    setUserPw(e.target.value);
    console.log(e.target.value);
  };

  const onChangepwCheck = (e) => {
    setUserPwCheck(e.target.value);
    console.log(e.target.value);
  };

  const onSubmitCheck = (e) => {
    e.preventDefault();
    if (userpw.length < 8) {
      alert("비밀번호는 8글자 이상이여야 합니다.");
      return false;
    } else {
      if (userpw !== userpwCheck) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
      } else {
        alert("비밀번호가 일치합니다.");
        return false;
      }
    }
  };

  return (
    <div>
      <body>
        <div id="background">
          <div className="container">
            <center>
              <h1>cafenual</h1>
            </center>
            <div className="middle">
              <div className="sign-form">
                <form
                  className="signup"
                  action=""
                  method=""
                  onSubmit={onSubmitCheck}
                >
                  <p>
                    <strong>성명</strong>
                    <br />
                    <input type="text" name="lname" placeholder="성" />
                    <input type="text" name="fname" placeholder="이름" />
                  </p>
                  <p>
                    <strong>이메일</strong>
                    <br />
                    <input
                      type="email"
                      name="email"
                      placeholder="아이디로 사용됩니다."
                    />
                    <a>이메일 확인</a>
                  </p>
                  <p>
                    <strong>비밀번호</strong>
                    <br />
                    <input
                      type="password"
                      id="password1"
                      placeholder="비밀번호"
                      onChange={onChangepw}
                    />
                  </p>
                  <div className="caution">
                    (비밀번호는 8글자이상, 영문, 숫자 포함이여야합니다.)
                  </div>
                  <p>
                    <strong>비밀번호 확인</strong>
                    <br />
                    <input
                      type="password"
                      id="password2"
                      placeholder="비밀번호 확인"
                      onChange={onChangepwCheck}
                    />
                    <button onclick="check()">비밀번호 확인</button>
                  </p>
                  <div className="textprint"></div>
                  <p>
                    <strong>전화번호</strong>
                    <br />
                    <input
                      type="tel"
                      name="telephone"
                      placeholder="전화번호 입력"
                    />
                  </p>
                  <p>
                    <input type="submit" value="제출" />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Signup;

//useffect
