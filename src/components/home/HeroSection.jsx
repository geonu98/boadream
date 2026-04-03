const decorations = [
  { id: 'heart', className: 'hero-decor hero-decor-svg hero-decor-heart hero-decor-1' },
  { id: 'leaf', className: 'hero-decor hero-decor-svg hero-decor-leaf hero-decor-2' },
  { id: 'flower', className: 'hero-decor hero-decor-svg hero-decor-flower hero-decor-3' },
  { id: 'cross', className: 'hero-decor hero-decor-svg hero-decor-cross hero-decor-4' },
  { id: 'clover', className: 'hero-decor hero-decor-svg hero-decor-clover hero-decor-5' },
  { id: 'bloom', className: 'hero-decor hero-decor-svg hero-decor-bloom hero-decor-6' },
];

const iconMap = {
  heart: (
    <svg viewBox="0 0 80 72" className="hero-decor-icon" aria-hidden="true">
      <path d="M40 64C27 52 14 42 14 25C14 15 21 8 31 8C36 8 41 10 45 16C49 10 54 8 59 8C69 8 76 15 76 25C76 42 63 52 50 64L45 68L40 64Z" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 92 64" className="hero-decor-icon" aria-hidden="true">
      <path d="M78 10C58 10 29 18 17 35C9 47 13 58 24 58C47 58 73 37 78 10Z" />
      <path d="M24 49C36 39 49 31 67 20" className="hero-decor-stroke" />
    </svg>
  ),
  flower: (
    <svg viewBox="0 0 92 92" className="hero-decor-icon" aria-hidden="true">
      <circle cx="46" cy="20" r="14" />
      <circle cx="72" cy="46" r="14" />
      <circle cx="46" cy="72" r="14" />
      <circle cx="20" cy="46" r="14" />
      <circle cx="46" cy="46" r="10" className="hero-decor-core" />
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 84 84" className="hero-decor-icon" aria-hidden="true">
      <circle cx="42" cy="42" r="30" className="hero-decor-shell" />
      <rect x="35" y="18" width="14" height="48" rx="7" />
      <rect x="18" y="35" width="48" height="14" rx="7" />
    </svg>
  ),
  clover: (
    <svg viewBox="0 0 120 120" className="hero-decor-icon" aria-hidden="true">
      <path d="M60 53C60 42 68 34 79 34C90 34 97 42 97 52C97 63 88 70 78 70C68 70 60 63 60 53Z" />
      <path d="M60 53C49 53 41 45 41 34C41 23 49 16 59 16C70 16 77 24 77 34C77 45 70 53 60 53Z" />
      <path d="M60 53C60 64 52 72 41 72C30 72 23 64 23 54C23 43 32 36 42 36C52 36 60 43 60 53Z" />
      <path d="M60 53C71 53 79 61 79 72C79 83 71 90 61 90C50 90 43 82 43 72C43 61 50 53 60 53Z" />
      <path d="M59 73C57 85 49 95 40 103" className="hero-decor-clover-stem" />
    </svg>
  ),
  bloom: (
    <svg viewBox="0 0 88 88" className="hero-decor-icon" aria-hidden="true">
      <ellipse cx="44" cy="18" rx="10" ry="16" />
      <ellipse cx="70" cy="44" rx="16" ry="10" />
      <ellipse cx="44" cy="70" rx="10" ry="16" />
      <ellipse cx="18" cy="44" rx="16" ry="10" />
      <circle cx="44" cy="44" r="9" className="hero-decor-core" />
    </svg>
  ),
};

export default function HeroSection() {
  return (
    <section className="hero-section hero-section-typography" id="hero">
      <div className="hero-decor-layer" aria-hidden="true">
        {decorations.map((item) => (
          <div key={item.id} className={item.className}>
            {iconMap[item.id]}
          </div>
        ))}
      </div>
      <div className="hero-graphic hero-graphic-a" aria-hidden="true"></div>
      <div className="hero-graphic hero-graphic-b" aria-hidden="true"></div>
      <div className="hero-graphic hero-graphic-c" aria-hidden="true"></div>

      <div className="container hero-grid">
        <div className="hero-left hero-left-centered reveal-up">
          <h1 className="hero-title">
            <span className="hero-title-soft">내 집에서 누리는</span>
            <span className="hero-title-strong">
              가장 <em className="hero-title-accent">포근한</em> 돌봄 서비스
            </span>
          </h1>
          <p className="hero-subtitle">
            <img src="/boadream-mark.png" alt="" className="hero-subtitle-mark" aria-hidden="true" />
            <span>보아드림노인복지센터</span>
          </p>
          <p className="hero-description">
            
          </p>
          <div className="hero-actions">
            <a href="#footer" className="button button-solid button-large hero-cta-button">
              방문요양 · 목욕 상담하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


