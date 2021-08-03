import express from "express";
import * as noticeCtrl from "../controllers/noticeController";

const router = express.Router();

router.post("/create", noticeCtrl.createNotice);
router.get("/readNotice", noticeCtrl.readNotice);
router.get("/read/:noticeId", noticeCtrl.readNoticeDetail);
router.delete("/delete/:noticeId", noticeCtrl.deleteNotice);
router.patch("/update", noticeCtrl.updateNotice);

export default router;
