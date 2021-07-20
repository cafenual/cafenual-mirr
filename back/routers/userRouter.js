import express from "express";
import * as userCtrl from "../controllers/userController"; //* 전부 라는 뜻

const router = express.Router();
//post 생성, get 조회, patch 업데이트, delete 삭제

router.post("/register", userCtrl.register);
router.post("/login", userCtrl.login);
router.post("/logout", userCtrl.logout);

export default router;
