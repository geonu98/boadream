import { useEffect, useRef, useState } from "react";
import { env } from "../../shared/config/env";

const CENTER_NAME = "보아드림노인복지센터";
const CENTER_LAT = 37.6140918;
const CENTER_LNG = 126.9272918;

let naverMapsLoaderPromise = null;

function loadNaverMaps(clientId) {
  if (!clientId) {
    return Promise.reject(new Error("네이버 지도 클라이언트 아이디가 없습니다."));
  }

  if (window.naver?.maps) {
    return Promise.resolve(window.naver);
  }

  if (naverMapsLoaderPromise) {
    return naverMapsLoaderPromise;
  }

  naverMapsLoaderPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[data-naver-maps-sdk="true"]');

    const handleReady = () => {
      if (!window.naver?.maps) {
        naverMapsLoaderPromise = null;
        reject(new Error("네이버 지도 SDK를 불러오지 못했습니다."));
        return;
      }

      resolve(window.naver);
    };

    const handleError = () => {
      naverMapsLoaderPromise = null;
      reject(new Error("네이버 지도 SDK 로드에 실패했습니다."));
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleReady, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
    script.async = true;
    script.dataset.naverMapsSdk = "true";
    script.addEventListener("load", handleReady, { once: true });
    script.addEventListener("error", handleError, { once: true });
    document.head.appendChild(script);
  });

  return naverMapsLoaderPromise;
}

export default function NaverDirectionsMap() {
  const mapRef = useRef(null);
  const initializedRef = useRef(false);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const labelMarkerRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initializedRef.current) {
      return undefined;
    }

    initializedRef.current = true;

    let cancelled = false;

    loadNaverMaps(env.naverMapClientId)
      .then((naver) => {
        if (cancelled || !mapRef.current || mapInstanceRef.current) {
          return;
        }

        const center = new naver.maps.LatLng(CENTER_LAT, CENTER_LNG);
        const map = new naver.maps.Map(mapRef.current, {
          center,
          zoom: window.matchMedia("(max-width: 640px)").matches ? 16 : 17,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
          },
        });
        mapInstanceRef.current = map;

        markerRef.current = new naver.maps.Marker({
          map,
          position: center,
          title: CENTER_NAME,
        });

        labelMarkerRef.current = new naver.maps.Marker({
          map,
          position: center,
          clickable: false,
          icon: {
            content: `<div class="directions-map-overlay">${CENTER_NAME}</div>`,
            anchor: new naver.maps.Point(92, 56),
          },
        });

        setStatus("ready");
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }

        setStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "네이버 지도를 불러오지 못했습니다.",
        );
      });

    return () => {
      cancelled = true;
      markerRef.current?.setMap(null);
      labelMarkerRef.current?.setMap(null);
      mapInstanceRef.current = null;
      markerRef.current = null;
      labelMarkerRef.current = null;
      initializedRef.current = false;
    };
  }, []);

  if (status === "error") {
    return (
      <div className="directions-map-fallback" role="status">
        <strong>지도를 불러오지 못했습니다.</strong>
        <p>{errorMessage || "VITE_NAVER_MAP_CLIENT_ID를 확인해주세요."}</p>
      </div>
    );
  }

  return (
    <div className="directions-map-shell">
      <div ref={mapRef} className="directions-map-canvas" aria-label="보아드림노인복지센터 위치 지도" />
      {status !== "ready" ? <div className="directions-map-loading">지도를 불러오는 중입니다.</div> : null}
    </div>
  );
}
