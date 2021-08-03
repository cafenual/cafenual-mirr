//공지생성

import Notice from "../models/notice";

export const createNotice = async (req, res) => {
  try {
    const notice = new Notice(req.body);
    await notice.save();

    return res.status(201).json({
      success: true,
      notice,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//공지 읽어오기

export const readNotice = async (req, res) => {
  try {
    let importantNotices = await Notice.find({ important: true });
    importantNotices = [...importantNotices.reverse()];

    let normalNotices = await Notice.find({ important: false });
    normalNotices = [...normalNotices.reverse()];

    const notices = importantNotices.concat(normalNotices);

    return res.status(200).json({
      success: true,
      notices,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//공지 상세보기

export const readNoticeDetail = async (req, res) => {
  const { noticeId } = req.params;
  try {
    const notice = await Notice.findById({
      //findOne
      _id: noticeId,
    });

    if (!notice) {
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다",
      });
    }

    return res.status(200).json({
      success: true,
      notice,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//공지 삭제하기

export const deleteNotice = async (req, res) => {
  const { noticeId } = req.params;

  try {
    const notice = await Notice.findByIdAndDelete({ _id: noticeId });

    if (!notice) {
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 없습니다",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//공지 수정하기

export const updateNotice = async (req, res) => {
  const { noticeId, title, content, important } = req.body;
  try {
    const notice = await Notice.findByIdAndUpdate(
      { _id: noticeId },
      { title, content, important },
      { new: true }
    );

    if (!notice) {
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 없습니다",
      });
    }

    return res.status(200).json({
      success: true,
      notice,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
