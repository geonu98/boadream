import Button from "./Button";
import { env, hasKakaoChannelUrl } from "../../shared/config/env";

const pendingMessage = "카톡 상담 채널을 준비 중입니다. 현재는 상담 신청 또는 전화 상담을 이용해주세요.";

function KakaoGlyph() {
  return (
    <svg className="kakao-glyph" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 4.5C7.31 4.5 3.5 7.46 3.5 11.11c0 2.28 1.47 4.29 3.72 5.49l-.78 2.9c-.08.31.26.56.54.39l3.56-2.21c.47.07.95.1 1.46.1 4.69 0 8.5-2.96 8.5-6.61S16.69 4.5 12 4.5Z" fill="currentColor" />
    </svg>
  );
}

function buildDefaultContent(label) {
  return (
    <>
      <span className="kakao-icon-badge" aria-hidden="true">
        <KakaoGlyph />
      </span>
      <span>{label}</span>
    </>
  );
}

export default function KakaoConsultButton({
  children,
  className = "",
  readyLabel = "카톡 상담",
  pendingLabel = "카톡 상담 준비중",
  ...props
}) {
  if (hasKakaoChannelUrl) {
    return (
      <Button
        href={env.kakaoChannelUrl}
        target="_blank"
        rel="noreferrer"
        className={`kakao-consult-button is-ready ${className}`.trim()}
        {...props}
      >
        {children ?? buildDefaultContent(readyLabel)}
      </Button>
    );
  }

  return (
    <Button
      type="button"
      title={pendingMessage}
      className={`kakao-consult-button is-pending ${className}`.trim()}
      onClick={() => window.alert(pendingMessage)}
      {...props}
    >
      {children ?? buildDefaultContent(pendingLabel)}
    </Button>
  );
}
