import User from "../models/user";

//회원가입
export const register = async (req, res) => {
  const { email, password, name, phoneNumber } = req.body; //비구조 할당 문법 req.body 안에 있는 이메일, 이름, 패스워드를 꺼내오는 것

  try {
    // 이메일이 db에 있는지 확인
    const exist = await User.findOne({
      email,
    });

    if (exist) {
      return res.status(500).json({
        success: false,
        message: "이미 존재하는 계정입니다.",
      });
    }
    console.log("asdasasd")
    const user = new User({
      email,
      password,
      name,
      phoneNumber,
    });

    await user.setPassword(password);
    await user.save();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (e) {
    //e는 error
    res.status(400).json({
      success: false,
      e,
    });
  }
};

// 로그인
export const login = async (req, res) => {
  const { email, password } = req.body;

  //email이랑 password가 없을때의 예외 처리
  if (!email || !password) {
    return res.status(401).json({
      success: false,
      message: "정보가 입력되지 않았습니다.",
    });
  }

  try {
    // 이메일이 db에 있는지 확인
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "해당 email이 존재하지 않습니다.",
      });
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      return res.status(401).json({
        success: false,
        message: "비밀번호가 잘못 입력되었습니다.",
      });
    }

    const token = await user.generateToken();
    console.log("as");
    return res.cookie("user", token).status(200).json({
      success: true,
      user,
    });
  } catch (e) {
    res.status(500).json({
      e,
    });
  }
};

// 로그아웃
export const logout = async (req, res) => {
  res.cookie("user", "").status(200).json({
    success: true,
    message: "로그아웃에 성공했습니다.",
  });
};
