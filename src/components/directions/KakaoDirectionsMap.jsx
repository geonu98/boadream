import { useEffect, useRef, useState } from "react";
import { env } from "../../shared/config/env";

const CENTER_NAME = "보아드림노인복지센터";
const CENTER_ADDRESS = "서울특별시 은평구 통일로 780 상가동 3층 4호";
const FALLBACK_LAT = 37.610338;
const FALLBACK_LNG = 126.929176;

function loadKakaoMaps(appKey) {
  return new Promise((resolve, reject) => {
    if (!appKey) {
      reject(new Error("카카오맵 JavaScript 키가 없습니다."));
      return;
    }

    if (window.kakao?.maps?.services) {
      window.kakao.maps.load(() => resolve(window.kakao));
      return;
    }

    const existingScript = document.querySelector('script[data-kakao-maps-sdk="true"]');

    const handleLoad = () => {
      if (!window.kakao?.maps) {
        reject(new Error("카카오맵 SDK를 불러오지 못했습니다."));
        return;
      }

      window.kakao.maps.load(() => resolve(window.kakao));
    };

    const handleError = () => reject(new Error("카카오맵 SDK 로드에 실패했습니다."));

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false&libraries=services`;
    script.async = true;
    script.dataset.kakaoMapsSdk = "true";
    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });
    document.head.appendChild(script);
  });
}

export default function KakaoDirectionsMap() {
  const mapRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    loadKakaoMaps(env.kakaoMapJavascriptKey)
      .then((kakao) => {
        if (cancelled || !mapRef.current) {
          return;
        }

        const center = new kakao.maps.LatLng(FALLBACK_LAT, FALLBACK_LNG);
        const map = new kakao.maps.Map(mapRef.current, {
          center,
          level: 3,
        });

        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(CENTER_ADDRESS, (result, searchStatus) => {
          if (cancelled) {
            return;
          }

          const hasResult = searchStatus === kakao.maps.services.Status.OK && Array.isArray(result) && result[0];
          const markerPosition = hasResult
            ? new kakao.maps.LatLng(Number(result[0].y), Number(result[0].x))
            : center;

          new kakao.maps.Marker({
            map,
            position: markerPosition,
          });

          const overlay = new kakao.maps.CustomOverlay({
            position: markerPosition,
            yAnchor: 1.95,
            content: `<div class="directions-map-overlay">${CENTER_NAME}</div>`,
          });

          overlay.setMap(map);
          map.setCenter(markerPosition);
          setStatus("ready");

          if (!hasResult) {
            setErrorMessage("주소 검색에 실패해 기본 위치로 표시했습니다.");
          }
        });
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }

        setStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "카카오맵을 불러오지 못했습니다.",
        );
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "error") {
    return (
      <div className="directions-map-fallback" role="status">
        <strong>지도를 불러오지 못했습니다.</strong>
        <p>{errorMessage || "VITE_KAKAO_MAP_JS_KEY를 확인해주세요."}</p>
      </div>
    );
  }

  return (
    <div className="directions-map-shell">
      <div ref={mapRef} className="directions-map-canvas" aria-label="보아드림노인복지센터 위치 지도" />
      {status !== "ready" ? <div className="directions-map-loading">지도를 불러오는 중입니다.</div> : null}
      {errorMessage ? <p className="directions-map-note">{errorMessage}</p> : null}
    </div>
  );
}