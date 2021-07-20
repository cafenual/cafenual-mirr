import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10; //해시를 10번을 하겠다는 의미 (가리는걸 가리고 가리고 가리고 10번하는 거)

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true /*공백을 없애주는 기능 */,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
    },
    wage: {
      type: Number,
      trim: true,
      default: 8720,
    },
    status: {
      type: String,
      enum: ["재직자", "퇴직자"],
      default: "재직자",
    },
    role: {
      type: String,
      enum: ["admin", "parttime"],
      default: "parttime",
    },
    token: {
      //방문증, 로그인 유지
      type: String,
    },
  },
  { timestamps: true }
);

//UserSchema.methods.함수이름 = 함수 몽구스에서 메서드 생성하는 문법 2가지
//UserSchema.statics.함수이름 = 함수

//async = 비동기를 만드는 문법 await과 함께 사용
UserSchema.methods.setPassword = async function (password) {
  const result = await bcrypt.hash(password, saltRounds);
  this.password = result;
};

// 입력받은 비밀번호가, 데이터베이스에 저장된 비밀번호랑 같은지 비교하는 함수
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result; //result 값은 두 비밀번호가 같으면 1 다르면 0
};

// 토큰 생성
UserSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      role: this.role,
    },
    process.env.JWT_SECRET
  ); //sign은 토근을 생성해주는 함수

  this.token = token;
  await this.save();
  return token;
};

const User = mongoose.model("User", UserSchema);
export default User;
