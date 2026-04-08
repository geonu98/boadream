import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { noticeService } from "../../features/notices/api/noticeService";
import { formatNoticeDate } from "../../features/notices/lib/noticeUtils";
import { reviewService } from "../../features/reviews/api/reviewService";
import { getReviewImageUrl, getReviewInitial } from "../../features/reviews/lib/reviewUtils";

const COPY = {
  title: "\ubcf4\uc544\ub4dc\ub9bc \uc774\uc57c\uae30",
  titleEn: "BOA Dream Stories",
  lead:
    "\uc6b0\ub9ac \uc13c\ud130\ub97c \ud1b5\ud574 \ud589\ubcf5\ud55c \ubcc0\ud654\ub97c \uacbd\ud5d8\ud55c \uc5b4\ub974\uc2e0\uacfc \ubcf4\ud638\uc790\ubd84\ub4e4\uc758 \uc2e4\uc81c \uc774\uc57c\uae30\uc640, \ub530\ub73b\ud55c \uc18c\uc2dd\uc744 \ucc28\ub840\ub85c \uc804\ud574\ub4dc\ub9bd\ub2c8\ub2e4.",
  newsTitle: "\ub530\ub73b\ud55c \uc18c\uc2dd",
  newsLoading: "\uc18c\uc2dd\uc744 \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4.",
  newsError: "\uc18c\uc2dd\uc744 \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
  newsEmpty: "\ub4f1\ub85d\ub41c \uc18c\uc2dd\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
  noticeBadge: "\uacf5\uc9c0",
  reviewTitle: "\ud589\ubcf5\ud55c \ud6c4\uae30",
  reviewLoading: "\ud6c4\uae30\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4.",
  reviewError: "\ud6c4\uae30\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
  reviewEmpty: "\ud648\uc5d0 \ub178\ucd9c\ub41c \ud6c4\uae30\uac00 \uc544\uc9c1 \uc5c6\uc2b5\ub2c8\ub2e4.",
  reviewFallbackHeadline: "\ub9c8\uc74c\uc774 \ub193\uc600\uc5b4\uc694",
  reviewFallbackLabel: "\ubcf4\ud638\uc790 \ud6c4\uae30",
  reviewScoreLabel: "5\uc810 \ub9cc\uc810",
  newsAction: "\uacf5\uc9c0 \uc804\uccb4\ubcf4\uae30",
  reviewAction: "\uc774\uc6a9\ud6c4\uae30 \uc804\uccb4\ubcf4\uae30",
  contactAction: "\uc0c1\ub2f4 \uc2e0\uccad\ud558\uae30",
  previousReview: "\uc774\uc804 \ud6c4\uae30",
  nextReview: "\ub2e4\uc74c \ud6c4\uae30",
  reviewDotPrefix: "\ud6c4\uae30 ",
  reviewDotSuffix: "\ubc88 \ubcf4\uae30",
  reviewImageSuffix: " \ud6c4\uae30 \uc0ac\uc9c4",
};

function QuoteGlyph() {
  return (
    <svg className="home-stories-quote-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M13.4 7.5C8.9 9.2 6.1 12.8 6 18.5h5.5c0 3-1.7 5.7-4.3 7.3l2.2 3.2c4.7-2.4 7.6-7 7.6-12.6V7.5h-3.6Zm12 0c-4.5 1.7-7.3 5.3-7.4 11h5.5c0 3-1.7 5.7-4.3 7.3l2.2 3.2c4.7-2.4 7.6-7 7.6-12.6V7.5h-3.6Z" fill="currentColor" />
    </svg>
  );
}

function StarGlyph() {
  return (
    <svg className="home-stories-star-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="m10 2.3 2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 14.8 5.2 17.2l.9-5.4L2.2 8l5.4-.8L10 2.3Z" fill="currentColor" />
    </svg>
  );
}

function ArrowGlyph({ direction = "next" }) {
  const rotation = direction === "previous" ? "rotate(180 10 10)" : undefined;

  return (
    <svg className="home-stories-control-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M7 4.5 12.5 10 7 15.5" transform={rotation} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getWrappedIndex(index, length) {
  if (!length) {
    return 0;
  }

  return (index + length) % length;
}

export default function StoriesSection() {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const noticesQuery = useQuery({
    queryKey: ["public-notices"],
    queryFn: noticeService.listPublishedNotices,
  });

  const reviewsQuery = useQuery({
    queryKey: ["home-reviews"],
    queryFn: reviewService.listFeaturedHomeReviews,
  });

  const notices = (noticesQuery.data || []).slice(0, 4);
  const reviews = (reviewsQuery.data || []).slice(0, 4);
  const reviewItems = useMemo(() => reviews.map((review, index) => ({
    ...review,
    cardImageUrl: getReviewImageUrl(review.photo_path) || (index === 0 ? "/hero-care-photo.png" : ""),
  })), [reviews]);

  useEffect(() => {
    if (!reviews.length) {
      setActiveReviewIndex(0);
      return;
    }

    setActiveReviewIndex((current) => (current >= reviews.length ? 0 : current));
  }, [reviewItems.length]);

  useEffect(() => {
    if (reviewItems.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveReviewIndex((current) => getWrappedIndex(current + 1, reviewItems.length));
    }, 6800);

    return () => window.clearInterval(timer);
  }, [reviewItems.length]);

  const moveReview = (direction) => {
    setActiveReviewIndex((current) => getWrappedIndex(current + direction, reviewItems.length));
  };

  const jumpToReview = (index) => {
    setActiveReviewIndex(getWrappedIndex(index, reviewItems.length));
  };

  return (
    <section className="section home-stories-section" id="stories">
      <div className="container home-stories-shell reveal-up">
        <div className="home-stories-head">
          <h2 className="home-stories-title">
            {COPY.title} <span>({COPY.titleEn})</span>
          </h2>
          <p className="home-stories-lead">{COPY.lead}</p>
        </div>

        <div className="home-stories-stack">
          <section className="home-stories-panel home-stories-news-panel" aria-labelledby="stories-news-title">
            <div className="home-stories-column-head">
              <h3 id="stories-news-title">{COPY.newsTitle}</h3>
            </div>

            {noticesQuery.isLoading ? <p className="notice-page-status">{COPY.newsLoading}</p> : null}
            {noticesQuery.isError ? (
              <p className="notice-page-status is-error">
                {noticesQuery.error instanceof Error ? noticesQuery.error.message : COPY.newsError}
              </p>
            ) : null}

            {!noticesQuery.isLoading && !noticesQuery.isError ? (
              notices.length ? (
                <div className="home-stories-news-list">
                  {notices.map((notice) => (
                    <Link key={notice.id} className="home-stories-news-item" to={`/notice/${notice.slug}`}>
                      <span className="home-stories-news-badge">{notice.category || COPY.noticeBadge}</span>
                      <div className="home-stories-news-copy">
                        <time>{formatNoticeDate(notice.published_at || notice.created_at)}</time>
                        <strong>{notice.title}</strong>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="notice-empty-state">{COPY.newsEmpty}</p>
              )
            ) : null}

            <div className="home-stories-panel-footer">
              <Button href="/notice" variant="outline" size="small">
                {COPY.newsAction}
              </Button>
            </div>
          </section>

          <section className="home-stories-panel home-stories-review-panel" aria-labelledby="stories-review-title">
            <div className="home-stories-column-head">
              <h3 id="stories-review-title">{COPY.reviewTitle}</h3>
            </div>

            {reviewsQuery.isLoading ? <p className="notice-page-status">{COPY.reviewLoading}</p> : null}
            {reviewsQuery.isError ? (
              <p className="notice-page-status is-error">
                {reviewsQuery.error instanceof Error ? reviewsQuery.error.message : COPY.reviewError}
              </p>
            ) : null}

            {!reviewsQuery.isLoading && !reviewsQuery.isError ? (
              reviewItems.length ? (
                <div className="home-stories-review-slider">
                  <div className="home-stories-review-viewport">
                    <div
                      className="home-stories-review-track"
                      style={{ transform: `translate3d(-${activeReviewIndex * 100}%, 0, 0)` }}
                    >
                      {reviewItems.map((review) => {
                        const imageUrl = review.cardImageUrl;
                        const initial = getReviewInitial(review.author_name);

                        return (
                          <article key={review.id} className="home-stories-review-slide">
                            <div className="home-stories-review-card">
                              <div className="home-stories-review-card-main">
                                <div className="home-stories-review-media">
                                  {imageUrl ? (
                                    <img src={imageUrl} alt={`${review.author_name}${COPY.reviewImageSuffix}`} />
                                  ) : (
                                    <span>{initial}</span>
                                  )}
                                </div>

                                <div className="home-stories-review-copy">
                                  <div className="home-stories-review-top">
                                    <span className="home-stories-quote" aria-hidden="true">
                                      <QuoteGlyph />
                                    </span>
                                    <div className="home-stories-stars" aria-label={COPY.reviewScoreLabel}>
                                      {Array.from({ length: 5 }).map((_, index) => (
                                        <StarGlyph key={index} />
                                      ))}
                                    </div>
                                  </div>

                                  <strong>{review.headline || COPY.reviewFallbackHeadline}</strong>
                                  <span className="home-stories-review-meta">
                                    {review.author_name} / {review.author_label || COPY.reviewFallbackLabel}
                                  </span>
                                  <p>{review.body}</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>

                  <div className="home-stories-review-footer">
                    {reviewItems.length > 1 ? (
                      <div className="home-stories-review-navigation">
                        <div className="home-stories-review-dots" aria-label={COPY.reviewTitle}>
                          {reviewItems.map((review, index) => (
                            <button
                              key={review.id}
                              type="button"
                              className={`home-stories-review-dot${index === activeReviewIndex ? " is-active" : ""}`}
                              onClick={() => jumpToReview(index)}
                              aria-label={`${COPY.reviewDotPrefix}${index + 1}${COPY.reviewDotSuffix}`}
                              aria-pressed={index === activeReviewIndex}
                            />
                          ))}
                        </div>

                        <div className="home-stories-review-controls">
                          <button
                            type="button"
                            className="home-stories-review-control"
                            onClick={() => moveReview(-1)}
                            aria-label={COPY.previousReview}
                          >
                            <ArrowGlyph direction="previous" />
                          </button>
                          <button
                            type="button"
                            className="home-stories-review-control"
                            onClick={() => moveReview(1)}
                            aria-label={COPY.nextReview}
                          >
                            <ArrowGlyph direction="next" />
                          </button>
                        </div>
                      </div>
                    ) : null}

                    <div className="home-stories-panel-footer home-stories-panel-footer-right">
                      <Button href="/review" variant="solid" size="small">
                        {COPY.reviewAction}
                      </Button>
                      <Button href="/contact" variant="outline" size="small">
                        {COPY.contactAction}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="notice-empty-state">{COPY.reviewEmpty}</p>
              )
            ) : null}
          </section>
        </div>
      </div>
    </section>
  );
}
