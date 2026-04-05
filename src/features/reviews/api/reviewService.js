import {
  createReview,
  deleteReview,
  getReviewById,
  listAdminReviews,
  listFeaturedHomeReviews,
  listPublishedReviews,
  updateReview,
} from "./reviewRepository";

export const reviewService = {
  listPublishedReviews,
  listFeaturedHomeReviews,
  listAdminReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
