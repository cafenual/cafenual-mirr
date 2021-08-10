import React, { useState } from "react";
import axios from "axios";
import "./Signup.scss";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [userpw, setUserPw] = useState("");
  const [userpwCheck, setUserPwCheck] = useState("");

  const history = useHistory(); //주소를 바꿀 수 있도록 도와주는 Hooks

  const [form, setForm] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    password: "",
    passwordCheck: "",
  });

  const { email, name, phoneNumber, password, passwordCheck } = form; //비구조 할당

  const onChange = (e) => {
    console.log(e.target);
    const nextForm = {
      ...form, //진짜 form이 아니라 form의 형태를 가져옴 복사를 해옴
      [e.target.name]: e.target.value, //왼쪽 해당하는 이름을 form에서 가져오기 우측 방금 입력한 값을 form에 씌우기
    };

    setForm(nextForm); //복사본에 value를 저장해서 setForm을 하면 진짜 form에 value를 덮어씌우기
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("실행");
    console.log(form);

    const body = {
      email,
      password,
      name,
      phoneNumber,
    };

    axios
      .post("http://localhost:4000/api/user/register", body)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          history.push("/login");
        }
      });
  };

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
                <form className="signup" onSubmit={onSubmit}>
                  <p>
                    <strong>성명</strong>
                    <br />
                    <input
                      type="text"
                      name="name"
                      onChange={onChange}
                      value={name}
                      placeholder="이름"
                    />
                  </p>
                  <p>
                    <strong>이메일</strong>
                    <br />
                    <input
                      type="email"
                      name="email"
                      onChange={onChange}
                      value={email}
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
                      name="password"
                      placeholder="비밀번호"
                      value={password}
                      onChange={onChange}
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
                      name="passwordCheck"
                      placeholder="비밀번호 확인"
                      value={passwordCheck}
                      onChange={onChange}
                    />
                    <button onclick="check()">비밀번호 확인</button>
                  </p>
                  <div className="textprint"></div>
                  <p>
                    <strong>전화번호</strong>
                    <br />
                    <input
                      type="tel"
                      name="phoneNumber"
                      onChange={onChange}
                      value={phoneNumber}
                      placeholder="전화번호 입력"
                    />
                  </p>
                  <p>
                    <button type="submit">제출</button>
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
