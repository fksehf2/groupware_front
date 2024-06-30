import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import URL from "constants/url";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavAbout";

function EgovAboutLocation() {
  const { kakao } = window;

  const mapRef = useRef(null);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = mapRef.current;
      let options = {
        center: new kakao.maps.LatLng(37.49089438323925, 126.8419651858952),
        level: 4,
      };
      let map = new kakao.maps.Map(container, options);

      let markerPosition = new kakao.maps.LatLng(
        37.49089438323925,
        126.8419651858952
      );
      let marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }); //kakao map api load
  }, []);

  return (
    <div className="container">
      <div className="c_wrap">
        {/* <!-- Location --> */}
        <div className="location">
          <ul>
            <li>
              <Link to={URL.MAIN} className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to={URL.ABOUT}>사이트 소개</Link>
            </li>
            <li>찾아오시는길</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents SITE_CONTACT_US" id="contents">
            {/* <!-- 본문 --> */}

            {/* <h1 className="tit_3">사이트 소개</h1>

            <p className="txt_1">
              표준프레임워크 경량환경 포털사이트를 소개합니다.
            </p> */}

            <h2 className="tit_4">찾아오시는길</h2>

            <div
              className="map"
              ref={mapRef}
              style={{ width: "100%", height: "350px" }}
            >
              <img src="" alt="" />
            </div>

            <div className="addr">
              <div className="left_col">
                <h3>본사 주소</h3>
                <dl>
                  <dt>도로명주소</dt>
                  <dd>08343 서울특별시 구로구 오류로8가길 6 203호</dd>
                </dl>
                <dl>
                  <dt>지번주소</dt>
                  <dd>08343 서울특별시 구로구 오류2동 156-1번지 203호</dd>
                </dl>
              </div>
              <div className="right_col">
                <h3>QR코드로 위치알아보기</h3>
                <p>
                  스마트폰에서 QR코드
                  <br />
                  리더를 이용해 사진·
                  <br />
                  지도 등 다양한 정보를
                  <br />
                  확인하세요.
                </p>
                <img
                  className="qr"
                  src="/assets/images/frame.png"
                  alt="qr code"
                />
              </div>
            </div>

            <div className="way">
              <div className="left_col">
                <h3>찾아오시는 길</h3>
                <dl>
                  <dt>지하철 1호선</dt>
                  <dd>오류동역 1번 출구 10분거리</dd>
                </dl>
                <dl>
                  <dt>지하철 7호선</dt>
                  <dd>천왕역 3번 출구 10분거리</dd>
                </dl>
              </div>
              <div className="right_col">
                <h3>연락처</h3>
                <dl>
                  <dt className="call">전화</dt>
                  <dd>0000-0000</dd>
                </dl>
                <dl>
                  <dt className="email">이메일</dt>
                  <dd>fkstpdl@gmail.com</dd>
                </dl>
              </div>
            </div>

            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EgovAboutLocation;
