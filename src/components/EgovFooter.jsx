import React from "react";
import { Link } from "react-router-dom";

function EgovFooter() {
  return (
    <div className="footer">
      <div className="inner">
        <h1>
          <Link to="">
            <img className="w" src="/assets/images/logo_footer_w.png" alt="" />
            <img className="m" src="/assets/images/logo_footer_m.png" alt="" />
          </Link>
        </h1>
        <div className="info">
          <p>
            대표문의메일 : fksehf22@gmail.com <span className="m_hide">|</span>
            <br className="m_show" /> 대표전화 : 010-7520-2374
            <br />
            {/* 호환성확인 : 000-0000-0000  |  교육문의 : 0000-0000-0000 */}
          </p>
          <p className="copy">
            Copyright © 2024 Ministry Of The Interior And Safety. All Rights
            Reserved.
          </p>
        </div>
        <div className="right_col">
          <Link to="">
            <img className="w" src="/assets/images/banner_w_03.png" alt="" />
            <img className="m" src="/assets/images/banner_m_03.png" alt="" />
          </Link>
          <Link to="">
            <img className="w" src="/assets/images/banner_w_02.png" alt="" />
            <img className="m" src="/assets/images/banner_m_02.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EgovFooter;
