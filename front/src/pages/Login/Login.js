import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState();

  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    console.log(e.target);
    const nextForm = {
      ...form, //진짜 form이 아니라 form의 형태를 가져옴 복사를 해옴
      [e.target.name]: e.target.value, //왼쪽 해당하는 이름을 form에서 가져오기 우측 방금 입력한 값을 form에 씌우기
    };

    setForm(nextForm); //복사본에 value를 저장해서 setForm을 하면 진짜 form에 value를 덮어씌우기
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("실행");
    console.log(form);

    const body = {
      email,
      password,
    };

    try {
      await axios.post("http://localhost:4000/api/user/login", body);
      history.push("/Dashboard");
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  const { email, password } = form;

  return (
    <div>
      <body id="login">
        <form
          action="homepage.html"
          name="login"
          className="login"
          onSubmit={onSubmit}
        >
          <legend>로그인</legend>
          <input
            type="email"
            placeholder="아이디"
            name="email"
            value={email}
            onChange={onChange}
          />
          <br />
          <input
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={onChange}
          />
          <br />
          <button type="submit">로그인</button>
          <p>{error}</p>
          <div className="signup">
            회원이 아니시라면 <a href="/signup">회원가입</a>을 해주시기
            바랍니다.
          </div>
        </form>
      </body>
    </div>
  );
};

export default Login;
