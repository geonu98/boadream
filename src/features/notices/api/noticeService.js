import {
  createNotice,
  deleteNotice,
  getNoticeById,
  getNoticeBySlug,
  listAdminNotices,
  listPublishedNotices,
  updateNotice,
} from "./noticeRepository";

export const noticeService = {
  listPublishedNotices,
  listAdminNotices,
  getNoticeBySlug,
  getNoticeById,
  createNotice,
  updateNotice,
  deleteNotice,
};
