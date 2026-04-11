export const SITE_URL = "https://www.boadream.kr";
export const SITE_NAME = "보아드림노인복지센터";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.jpg`;
export const DEFAULT_OG_IMAGE_ALT = "보아드림노인복지센터 방문요양 상담 대표 이미지";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  telephone: "02-352-0088",
  address: {
    "@type": "PostalAddress",
    streetAddress: "통일로 780 상가동 3층 4호",
    addressLocality: "은평구",
    addressRegion: "서울특별시",
    postalCode: "03367",
    addressCountry: "KR",
  },
  areaServed: ["서울 은평구", "불광동"],
  sameAs: ["https://blog.naver.com/boacare9988"],
};

export const defaultSeo = {
  title: "보아드림노인복지센터 | 은평구 방문요양 · 장기요양 상담",
  description:
    "서울 은평구 불광동에 위치한 보아드림노인복지센터입니다. 방문요양, 장기요양 상담, 서비스 안내를 제공하며 어르신의 일상과 돌봄을 함께합니다.",
  ogTitle: "보아드림노인복지센터 | 은평구 방문요양 · 장기요양 상담",
  ogDescription:
    "서울 은평구 불광동에 위치한 보아드림노인복지센터입니다. 방문요양과 장기요양 상담을 안내합니다.",
  image: DEFAULT_OG_IMAGE,
  canonicalPath: "/",
  robots: "index,follow",
  type: "website",
};

export const pageSeo = {
  home: {
    ...defaultSeo,
    canonicalPath: "/",
  },
  about: {
    title: "센터소개 | 보아드림노인복지센터 | 은평구 방문요양",
    description:
      "서울 은평구 불광동 보아드림노인복지센터 소개입니다. 센터 운영 방식과 돌봄 철학, 방문요양 상담 방향을 확인해보세요.",
    canonicalPath: "/about",
  },
  service: {
    title: "서비스안내 | 보아드림노인복지센터 | 은평구 방문요양 · 방문목욕",
    description:
      "은평구 불광동 보아드림노인복지센터의 방문요양·방문목욕 서비스를 안내합니다. 어르신 상태와 생활에 맞춘 돌봄 서비스를 상담해보세요.",
    canonicalPath: "/service",
  },
  careGuide: {
    title: "장기요양안내 | 보아드림노인복지센터 | 은평구 장기요양 상담",
    description:
      "장기요양등급, 신청 절차, 본인부담금과 이용 기준을 안내합니다. 은평구 불광동 보아드림노인복지센터에서 장기요양 상담을 받아보세요.",
    canonicalPath: "/care-guide",
  },
  notice: {
    title: "공지사항 | 보아드림노인복지센터 | 은평구 노인복지센터",
    description:
      "보아드림노인복지센터의 공지사항과 센터 소식을 확인하세요. 운영 안내, 이용 변경 사항, 휴무 공지를 빠르게 안내합니다.",
    canonicalPath: "/notice",
  },
  faq: {
    title: "자주 묻는 질문 | 보아드림노인복지센터 | 은평구 방문요양 상담",
    description:
      "방문요양, 장기요양등급, 이용 방법과 비용 관련 자주 묻는 질문을 모았습니다. 상담 전 먼저 확인해보세요.",
    canonicalPath: "/faq",
  },
  review: {
    title: "이용후기 | 보아드림노인복지센터 | 은평구 방문요양 후기",
    description:
      "보아드림노인복지센터를 이용한 보호자와 어르신의 실제 후기를 확인해보세요. 은평구 방문요양 상담과 돌봄 경험을 소개합니다.",
    canonicalPath: "/review",
  },
  contact: {
    title: "상담문의 | 보아드림노인복지센터 | 은평구 장기요양 상담",
    description:
      "은평구 불광동 보아드림노인복지센터 상담문의 페이지입니다. 방문요양, 방문목욕, 장기요양 상담을 편하게 문의해보세요.",
    canonicalPath: "/contact",
  },
  directions: {
    title: "오시는길 | 보아드림노인복지센터 | 은평구 불광동 노인복지센터",
    description:
      "보아드림노인복지센터 오시는 길 안내입니다. 서울 은평구 불광동 센터 위치, 연락처, 지도 정보를 확인하실 수 있습니다.",
    canonicalPath: "/directions",
  },
  recruit: {
    title: "채용안내 | 보아드림노인복지센터 | 은평구 요양보호사 채용",
    description:
      "보아드림노인복지센터 채용안내 페이지입니다. 은평구 불광동 요양보호사 채용 정보와 지원 절차를 확인해보세요.",
    canonicalPath: "/recruit",
  },
  pricing: {
    title: "이용금액안내 | 보아드림노인복지센터 | 장기요양 비용 상담",
    description:
      "장기요양등급과 서비스 이용에 따른 비용 안내를 확인하세요. 방문요양과 방문목욕 비용 기준을 상담 중심으로 설명해드립니다.",
    canonicalPath: "/pricing",
  },
  admin: {
    title: "관리자 | 보아드림노인복지센터",
    description: "보아드림노인복지센터 관리자 페이지입니다.",
    robots: "noindex,nofollow",
    canonicalPath: "/admin",
  },
  adminLogin: {
    title: "관리자 로그인 | 보아드림노인복지센터",
    description: "보아드림노인복지센터 관리자 로그인 페이지입니다.",
    robots: "noindex,nofollow",
    canonicalPath: "/admin/login",
  },
};
