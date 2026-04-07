import {
  createFaq,
  deleteFaq,
  getFaqById,
  listAdminFaqs,
  listFeaturedHomeFaqs,
  listPublishedFaqs,
  updateFaq,
} from "./faqRepository";

export const faqService = {
  listFeaturedHomeFaqs,
  listPublishedFaqs,
  listAdminFaqs,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
};
