import {
  createFaq,
  deleteFaq,
  getFaqById,
  listAdminFaqs,
  listPublishedFaqs,
  updateFaq,
} from "./faqRepository";

export const faqService = {
  listPublishedFaqs,
  listAdminFaqs,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
};
