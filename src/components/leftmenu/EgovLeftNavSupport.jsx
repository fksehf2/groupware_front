import React from "react";

import { NavLink } from "react-router-dom";
import URL from "constants/url";

function EgovLeftNavSupport() {
  return (
    <div className="nav">
      <div className="inner">
        <h2>고객지원</h2>
        <ul className="menu4">
          <li>
            <NavLink
              to={URL.SUPPORT_DOWNLOAD}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              자료실
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URL.SUPPORT_QNA}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              묻고답하기
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URL.SUPPORT_APPLY}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              서비스신청
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URL.SUPPORT_EqpList}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              장비
            </NavLink>
          </li>

          <li>
            <NavLink
              to={URL.SUPPORT_FsysLogQList}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              로그조회
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EgovLeftNavSupport;
