export const headerNav = [
  {
    label: "?쇳꽣?뚭컻",
    href: "/about",
    children: [
      { label: "?쇳꽣 ?몄궗留?, href: "/about" },
      { label: "?쒖꽕/?섍꼍 ?덈궡", href: "/facility" },
    ],
  },
  {
    label: "?쒕퉬?ㅼ븞??,
    href: "/service",
    children: [
      { label: "諛⑸Ц?붿뼇 ?쒕퉬??, href: "/service" },
      { label: "諛⑸Ц紐⑹슃 ?쒕퉬??, href: "/bath" },
      { label: "?쒕퉬???댁슜 ?덉감", href: "/service" },
    ],
  },
  {
    label: "?κ린?붿뼇?덈궡",
    href: "/care-guide",
    children: [
      { label: "?κ린?붿뼇?깃툒 ?덈궡", href: "/care-guide" },
      { label: "?댁슜 湲덉븸 ?덈궡", href: "/pricing" },
    ],
  },
  {
    label: "怨듭??ы빆",
    href: "/notice",
  },
  {
    label: "?먯＜臾삳뒗吏덈Ц",
    href: "/faq",
  },
  {
    label: "梨꾩슜?덈궡",
    href: "/recruit",
  },
  {
    label: "?곷떞臾몄쓽 / ?ㅼ떆?붽만",
    href: "/contact",
    children: [
      { label: "?곷떞 ?좎껌", href: "/contact" },
      { label: "?ㅼ떆??湲?, href: "/directions" },
    ],
  },
];

export const footerLinkGroups = [
  {
    title: "?쇳꽣 ?덈궡",
    links: [
      { label: "?쇳꽣 ?몄궗留?, href: "/about" },
      { label: "?쒖꽕/?섍꼍 ?덈궡", href: "/facility" },
      { label: "李얠븘?ㅼ떆??湲?, href: "/directions" },
    ],
  },
  {
    title: "?쒕퉬???덈궡",
    links: [
      { label: "諛⑸Ц?붿뼇 ?쒕퉬??, href: "/service" },
      { label: "諛⑸Ц紐⑹슃 ?쒕퉬??, href: "/bath" },
      { label: "?댁슜 湲덉븸 ?덈궡", href: "/pricing" },
    ],
  },
  {
    title: "怨좉컼 吏??,
    links: [
      { label: "怨듭??ы빆", href: "/notice" },
      { label: "?먯＜ 臾삳뒗 吏덈Ц", href: "/faq" },
      { label: "?곷떞 ?좎껌", href: "/contact" },
    ],
  },
];

export const footerSocialLinks = [
  { label: "X", shortLabel: "X", href: "#" },
  { label: "Instagram", shortLabel: "IG", href: "#" },
  { label: "LinkedIn", shortLabel: "in", href: "#" },
];

export const contactDetails = [
  "Personalized lab scheduling with guided onboarding",
  "At-home or in-clinic collection coordination",
  "Secure follow-up for care plans and questions",
];

export const processSteps = [
  {
    id: "0",
    label: "Schedule lab tests",
    image:
      "https://cdn.prod.website-files.com/685ccae9d266d0b5c5fa8f36/68e0ecae8a57a7b5bdb153b6_1a9e4c8565b3e10d75711dc1567edb9a_step-image.webp",
    alt: "Scheduling dashboard preview",
    copy:
      "Browse our test catalog and choose the package that best fits your health needs. Whether it is a routine check-up or a specific diagnostic.",
    bullets: [
      "Select your test online with clear, upfront pricing",
      "No doctor referral required",
      "Choose your preferred time slot instantly",
    ],
    tags: ["Metabolic health", "Nutrient levels", "Heart health", "Thyroid health"],
    cardTitle: "Good morning, Sarah",
    cardText: "Schedule your lab visit",
    cardAction: "Schedule lab test",
  },
  {
    id: "1",
    label: "Sample collection",
    image:
      "https://cdn.prod.website-files.com/685ccae9d266d0b5c5fa8f36/68e759a254806918bb4dd398_db64c908b97bcb287eab29fd8a0d8d9a_step-image-02.webp",
    alt: "Sample collection illustration",
    copy:
      "Experience a smooth and hygienic sample collection process designed for your comfort at home or at a nearby lab.",
    bullets: [
      "At-home sample collection",
      "In-lab collection",
      "Secure handling",
      "Flexible timing",
    ],
    tags: ["At-home visit", "Nearby lab", "Secure handling", "Flexible timing"],
  },
  {
    id: "2",
    label: "Get result",
    image:
      "https://cdn.prod.website-files.com/685ccae9d266d0b5c5fa8f36/68e759a27774dc0c6d4a6021_c16268a1b8943a50d5137212977f677b_step-image-03.webp",
    alt: "Health result dashboard",
    copy:
      "Receive a comprehensive health report with clear explanations and actionable insights inside your secure dashboard.",
    bullets: [
      "Interactive health dashboard",
      "Personalized health score",
      "Trend analysis",
      "Early detection alerts",
    ],
    tags: ["Dashboard", "Health score", "Trend analysis", "Alerts"],
  },
];

export const homeSectionMarkup = {
  hero: `
    <section class="hero-section hero-section-typography" id="hero">
      <div class="hero-decor-layer" aria-hidden="true">
        <div class="hero-decor hero-decor-heart hero-decor-1"></div>
        <div class="hero-decor hero-decor-leaf hero-decor-2"></div>
        <div class="hero-decor hero-decor-flower hero-decor-3"></div>
        <div class="hero-decor hero-decor-cross hero-decor-4"></div>
        <div class="hero-decor hero-decor-orb hero-decor-5"></div>
        <div class="hero-decor hero-decor-bloom hero-decor-6"></div>
      </div>
      <div class="hero-graphic hero-graphic-a" aria-hidden="true"></div>
      <div class="hero-graphic hero-graphic-b" aria-hidden="true"></div>
      <div class="hero-graphic hero-graphic-c" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-left hero-left-centered reveal-up">
          <h1 class="hero-title">
            <span class="hero-title-soft">??吏묒뿉???꾨━??/span>
            <span class="hero-title-strong">媛??<em class="hero-title-accent">?ш렐??/em> ?뚮큵 ?쒕퉬??/span>
          </h1>
          <p class="hero-subtitle"><img src="/boadream-mark.png" alt="" class="hero-subtitle-mark" aria-hidden="true" /><span>蹂댁븘?쒕┝?몄씤蹂듭??쇳꽣</span></p>
          <p class="hero-description">
            ???쒓껐媛숈? 留덉쓬?쇰줈 ?곕쑜?섍퀬 ?ш렐???쇳꽣濡?湲곗뼲?섍퀬 ?띠뒿?덈떎.
          </p>
          <div class="hero-actions">
            <a href="#footer" class="button button-solid button-large hero-cta-button">
              諛⑸Ц?붿뼇 쨌 紐⑹슃 ?곷떞?섍린
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  intro: `
    <section class="section section-benefits section-benefits-editorial" id="benefits">
      <div class="container benefit-editorial-shell reveal-up">
        <div class="benefit-editorial-visual">
          <div class="benefit-editorial-image-wrap">
            <img
              src="/independence-care-illustration.png"
              alt="蹂댁븘?쒕┝ ?먮┰ 吏???쇰윭?ㅽ듃"
            />
          </div>
        </div>

        <div class="benefit-editorial-copy">
          <span class="benefit-editorial-kicker">Our Philosophy</span>
          <h2 class="benefit-editorial-title">
            ?먮┰???뺣뒗 ?뚮큵,
            <span>蹂댁븘?쒕┝??吏꾩떖?낅땲??</span>
          </h2>
          <p class="benefit-editorial-body">
            臾댁“嫄???좏빐?쒕━湲곕낫?? ?대Ⅴ?좎씠 ?ㅼ뒪濡??섏떎 ???덈뒗 遺遺꾩? ?앷퉴吏 吏耳쒕뱶由ш퀬
            ?꾩??쒕━??寃껋씠 吏꾩젙???뚮큵?대씪 誘우뒿?덈떎.
          </p>

          <div class="benefit-editorial-chips">
            <span>1:1 留욎땄 耳??/span>
            <span>?꾨Ц 援먯쑁 ?댁닔</span>
            <span>?ш? 蹂듭? ?꾨Ц</span>
          </div>

          <div class="benefit-editorial-actions">
            <a href="/service" class="button button-dark">
              ?쒕퉬?ㅼ븞???먯꽭??蹂닿린
              <img src="/boadream-mark.png" alt="" class="button-mark-image" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  service: `
    <section class="section section-included" id="included">
      <div class="container-medium">
        <div class="section-title-wrap reveal-up">
          <p class="pre-title">蹂댁븘?쒕┝???듭떖 ?쒕퉬??/p>
          <h2 class="section-title service-section-title">
            ?쇱긽 媛源뚯씠?먯꽌 ?쒕━??br />
            <span class="service-title-line">4? ?뚮큵吏??/span>
          </h2>
        </div>

        <div class="included-grid service-support-layout">
          <article class="included-card included-card-image reveal-left">
            <img
              src="/care-support-illustration.png"
              alt="蹂댁븘?쒕┝ ?뚮큵 吏???쇰윭?ㅽ듃"
            />
            <div class="included-overlay">
              <h3>?좎껜 吏??/h3>
              <p>?앹궗, 蹂듭빟, ?몃㈃, ?대룞 蹂댁“ ???섎（??湲곕낯 ?앺솢???덉쟾?섍쾶 ?뺤뒿?덈떎.</p>
              <div class="metric-bar service-metric-bar">
                <strong>?쇱긽 ?숉뻾</strong>
                <span>臾대━ ?녿뒗 ?吏곸엫怨??듭닕???앺솢 由щ벉???④퍡 吏耳쒕뱶由쎈땲??</span>
              </div>
            </div>
          </article>

          <article class="included-card included-card-panel included-card-panel-services reveal-right">
            <h3>?ㅼ젣濡??대뼡 ?꾩????쒕━?섏슂?</h3>
            <p class="included-panel-copy">
              蹂댁븘?쒕┝? ?좎껜쨌媛??룹젙?쑣룹씤吏 吏?먯쓣 洹좏삎 ?덇쾶 援ъ꽦??
              ?대Ⅴ?좎씠 吏묒뿉?????몄븞???섎（瑜?蹂대궡?????덈룄濡??뺤뒿?덈떎.
            </p>
            <div class="service-support-list">
              <article class="service-support-item">
                <strong>?좎껜 吏??/strong>
                <span>?앹궗 蹂댁“, 蹂듭빟 ?꾩?, ?꾩깮 愿由? ?대룞 ?꾩??쇰줈 ?덉쟾???섎（瑜??뺤뒿?덈떎.</span>
              </article>
              <article class="service-support-item">
                <strong>媛??吏??/strong>
                <span>?앹궗 以鍮? ?뺣━ ?뺣룉, 二쇰? 泥?껐 愿由щ줈 ?앺솢??遺?댁쓣 ?쒖뼱?쒕┰?덈떎.</span>
              </article>
              <article class="service-support-item">
                <strong>?뺤꽌 吏??/strong>
                <span>留먮쿁, ?곗콉, ?쇱긽 ??붾줈 ?뺤꽌???덉젙怨??곕쑜??援먭컧???댁뼱媛묐땲??</span>
              </article>
              <article class="service-support-item">
                <strong>?몄? 吏??/strong>
                <span>?쇱쫹, 移대뱶 ?쒕룞?쇰줈 ?띠쓽 ?쒕젰??李얘퀬 ?듭닕???몄? ?먭레???꾩??쒕┰?덈떎.</span>
              </article>
            </div>
          </article>

        </div>
      </div>
    </section>
  `,
  facility: `
    <section class="section section-split section-review-marquee" id="stories">
      <div class="container">
        <div class="review-marquee-head reveal-up">
          <h2>?댁슜 ?꾧린</h2>
          <p>
            蹂댁븘?쒕┝?몄씤蹂듭??쇳꽣瑜??댁슜???대Ⅴ?좉낵 蹂댄샇?먮텇?ㅼ쓽 ?ㅼ젣 寃쏀뿕??諛뷀깢?쇰줈,
            ?뚮큵 怨쇱젙?먯꽌 ?먮? 蹂?붿? 留뚯”???뚭컻?⑸땲??
          </p>
        </div>

        <div class="review-marquee-window reveal-up">
          <div class="review-marquee-track">
            <article class="review-slide-card">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">源</div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>源OO 蹂댄샇??/strong>
                <span>諛⑸Ц?붿뼇 ?댁슜</span>
                <p>?대㉧?덇? ?ㅼ뒪濡??섏떎 ???덈뒗 遺遺꾩? 湲곕떎?ㅼ＜?쒓퀬, 瑗??꾩슂???쒓컙?먮쭔 ?먯뿰?ㅻ읇寃??꾩?二쇱뀛???뺣쭚 ?덉떖???먯뒿?덈떎.</p>
              </div>
            </article>

            <article class="review-slide-card">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">諛?/div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>諛뷤O ?대Ⅴ??/strong>
                <span>?뺤꽌 吏??以묒떖</span>
                <p>留먮쿁???섏뼱二쇨퀬 ?곗콉???④퍡 ?댁＜?붿꽌 ?섎（媛 ?⑥뵮 遺?쒕읇怨????몃∼寃??먭뺨議뚯뒿?덈떎.</p>
              </div>
            </article>

            <article class="review-slide-card">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">??/div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>?큀O 蹂댄샇??/strong>
                <span>諛⑸Ц紐⑹슃 ?댁슜</span>
                <p>遺덊렪?댄븯?ㅺ퉴 嫄깆젙?덈뒗?? ?ㅻ챸??李⑤텇?섍쾶 ?댁＜?쒓퀬 ?꾩깮?곸쑝濡?吏꾪뻾?댁＜?붿꽌 誘우쓬??媛붿뒿?덈떎.</p>
              </div>
            </article>

            <article class="review-slide-card">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">理?/div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>理쏰O 媛議?/strong>
                <span>?몄? 吏???쒕룞</span>
                <p>?쇱쫹怨?移대뱶 ?쒕룞??媛숈씠 ?댁＜?쒕㈃???껊뒗 ?쒓컙??留롮븘議뚭퀬, ?덉쟾蹂대떎 ?쒖젙???⑥뵮 諛앹븘議뚯뼱??</p>
              </div>
            </article>

            <article class="review-slide-card">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">??/div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>?뷤O 蹂댄샇??/strong>
                <span>媛??吏??以묒떖</span>
                <p>?앹궗 以鍮꾩? 二쇰? ?뺣━瑜?瑗쇨세?섍쾶 梨숆꺼二쇱뀛?? 蹂댄샇?먯씤 ????쒖닲 ?뚮┫ ???덉뿀?듬땲??</p>
              </div>
            </article>

            <article class="review-slide-card" aria-hidden="true">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">源</div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>源OO 蹂댄샇??/strong>
                <span>諛⑸Ц?붿뼇 ?댁슜</span>
                <p>?대㉧?덇? ?ㅼ뒪濡??섏떎 ???덈뒗 遺遺꾩? 湲곕떎?ㅼ＜?쒓퀬, 瑗??꾩슂???쒓컙?먮쭔 ?먯뿰?ㅻ읇寃??꾩?二쇱뀛???뺣쭚 ?덉떖???먯뒿?덈떎.</p>
              </div>
            </article>

            <article class="review-slide-card" aria-hidden="true">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">諛?/div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>諛뷤O ?대Ⅴ??/strong>
                <span>?뺤꽌 吏??以묒떖</span>
                <p>留먮쿁???섏뼱二쇨퀬 ?곗콉???④퍡 ?댁＜?붿꽌 ?섎（媛 ?⑥뵮 遺?쒕읇怨????몃∼寃??먭뺨議뚯뒿?덈떎.</p>
              </div>
            </article>

            <article class="review-slide-card" aria-hidden="true">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">??/div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>?큀O 蹂댄샇??/strong>
                <span>諛⑸Ц紐⑹슃 ?댁슜</span>
                <p>遺덊렪?댄븯?ㅺ퉴 嫄깆젙?덈뒗?? ?ㅻ챸??李⑤텇?섍쾶 ?댁＜?쒓퀬 ?꾩깮?곸쑝濡?吏꾪뻾?댁＜?붿꽌 誘우쓬??媛붿뒿?덈떎.</p>
              </div>
            </article>

            <article class="review-slide-card" aria-hidden="true">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">理?/div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>理쏰O 媛議?/strong>
                <span>?몄? 吏???쒕룞</span>
                <p>?쇱쫹怨?移대뱶 ?쒕룞??媛숈씠 ?댁＜?쒕㈃???껊뒗 ?쒓컙??留롮븘議뚭퀬, ?덉쟾蹂대떎 ?쒖젙???⑥뵮 諛앹븘議뚯뼱??</p>
              </div>
            </article>

            <article class="review-slide-card" aria-hidden="true">
              <div class="review-avatar-shell" aria-hidden="true">
                <div class="review-avatar-ring">
                  <div class="review-avatar-circle">??/div>
                </div>
              </div>
              <div class="review-slide-copy">
                <strong>?뷤O 蹂댄샇??/strong>
                <span>媛??吏??以묒떖</span>
                <p>?앹궗 以鍮꾩? 二쇰? ?뺣━瑜?瑗쇨세?섍쾶 梨숆꺼二쇱뀛?? 蹂댄샇?먯씤 ????쒖닲 ?뚮┫ ???덉뿀?듬땲??</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  noticePreview: `
    <section class="section section-statistics" id="statistics">
      <div class="container">
        <div class="section-title-wrap reveal-up">
          <p class="pre-title">(The metrics of health)</p>
          <h2 class="section-title">
            Transformative outcomes
            <span>backed by data</span>
          </h2>
        </div>

        <div class="statistics-grid reveal-up">
          <article class="stats-card stats-card-chart">
            <div class="stats-figure">3.5 X</div>
            <p>Early risk detection compared to traditional annual checkups</p>
            <div class="chart-box" aria-hidden="true">
              <div class="chart-line chart-line-a"></div>
              <div class="chart-line chart-line-b"></div>
            </div>
          </article>

          <article class="stats-card stats-card-white">
            <div class="stats-icon">+</div>
            <p>Improved metabolic scores</p>
            <div class="stats-percent">92%</div>
            <span class="stats-sub">Users improved at least one key biomarker within</span>
            <span class="stats-chip">3 months</span>
          </article>

          <article class="stats-card stats-card-image">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
              alt="Warm portrait"
            />
            <div class="stats-image-overlay">
              <strong>5+</strong>
              <span>Data points</span>
              <p>Continuous monitoring for precision health tracking.</p>
              <div class="stats-icon-row">
                <span>Glucose levels</span>
                <span>Heart rate</span>
                <span>Sleep cycles</span>
              </div>
            </div>
          </article>

          <article class="stats-card stats-card-bubble">
            <div class="bubble-tags">
              <span>Metabolic responses</span>
              <span>Glucose response</span>
            </div>
            <div class="bubble-circle">
              <strong>15</strong>
              <span>days</span>
            </div>
            <p>Average time to first noticeable improvement</p>
            <div class="bubble-tags bubble-tags-bottom">
              <span>Positive changes</span>
              <span>Energized</span>
              <span>Metabolic responses</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  faqPreview: `
    <section class="section section-why" id="why">
      <div class="layout-block-container container">
        <div class="why-grid reveal-up">
          <div class="why-copy">
            <h2>Why are more people choosing 蹂댁븘?쒕┝ every day</h2>
            <a href="#cta" class="button button-solid">See pricing</a>

            <div class="why-points">
              <article>
                <h3>Convenience first</h3>
                <p>Book your tests online in minutes, with flexible at-home collection.</p>
              </article>
              <article>
                <h3>Transparent pricing</h3>
                <p>No hidden costs; clear and upfront pricing for every test.</p>
              </article>
              <article>
                <h3>Data security</h3>
                <p>Your health data is private and fully protected end-to-end.</p>
              </article>
            </div>
          </div>

          <article class="why-quote-card">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
              alt="Warm portrait with sunlight"
            />
            <div class="why-quote-overlay">
              <p>
                "It's not just about numbers. The expert explained what my
                results meant for my lifestyle and helped me take action."
              </p>
              <strong>Daniel L.</strong>
              <span>Health Conscious</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-testimonial" id="stories">
      <div class="container">
        <div class="section-title-wrap reveal-up">
          <p class="pre-title">(Testimonials)</p>
          <h2 class="section-title">
            Health journeys shared by our
            <span>community</span>
          </h2>
        </div>

        <div class="testimonial-grid reveal-up">
          <article class="testimonial-card testimonial-text-card">
            <div class="testimonial-head">
              <div>
                <strong>Sarah M.</strong>
                <span>Health Conscious</span>
              </div>
              <span class="handle">@mindful_health</span>
            </div>
            <h3>Quick and effortless</h3>
            <p>
              "蹂댁븘?쒕┝ made testing stress-free. I booked online, a technician
              came to my home, and I had my results in less than 24 hours."
            </p>
          </article>

          <article class="testimonial-card testimonial-image-card">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
              alt="Portrait"
            />
            <div class="testimonial-image-overlay">
              <button type="button" aria-label="Play story">??/button>
              <div>
                <strong>Lucas P.</strong>
                <span>Skin health enthusiast</span>
              </div>
              <span class="handle">@skincare_health</span>
            </div>
          </article>

          <article class="testimonial-card testimonial-text-card">
            <div class="testimonial-head">
              <div>
                <strong>David R.</strong>
                <span>Regular Tester</span>
              </div>
              <span class="handle">@care_with_clarity</span>
            </div>
            <h3>Accurate results fast</h3>
            <p>
              "Having my health monitored regularly through 蹂댁븘?쒕┝ keeps me
              confident and stress-free. Highly recommend!"
            </p>
          </article>
        </div>

        <div class="logo-row reveal-up">
          <span>Mivora</span>
          <span>PLUTO</span>
          <span>OkeyStudio</span>
          <span>Cobalto</span>
          <span>Copora</span>
        </div>
      </div>
    </section>
  `,
  contact: `
    <section class="section section-cta" id="cta">
      <div class="container-medium">
        <div class="cta-grid reveal-up">
          <div class="cta-copy">
            <h2>
              Take control of your health today and
              <span>start building a better tomorrow</span>
            </h2>
          </div>
          <div class="cta-actions">
            <p>
              Join 蹂댁븘?쒕┝ and unlock a personalized health journey designed
              to help you live longer, healthier, and more confidently every
              day.
            </p>
            <div class="cta-button-row">
              <a href="#footer" class="button button-outline">Join 蹂댁븘?쒕┝ Now</a>
              <a href="#benefits" class="button button-solid">
                About 蹂댁븘?쒕┝
                <img src="/boadream-mark.png" alt="" class="button-mark-image" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};






















