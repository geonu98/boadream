import Button from "./Button";
import { env, hasKakaoChannelUrl } from "../../shared/config/env";

const pendingMessage = "카카오 상담 채널을 준비 중입니다. 현재는 상담 신청 또는 전화 상담을 이용해주세요.";

export default function KakaoConsultButton({
  children,
  className = "",
  readyLabel = "카카오 상담",
  pendingLabel = "카카오 상담 준비중",
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
        {children ?? readyLabel}
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
      {children ?? pendingLabel}
    </Button>
  );
}
