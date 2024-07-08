const userFindPop = () => {
  return (
    <div id="con_wrap_pop">
      <div className="contents">
        <div id="contents_info">
          {/* <!--- contnets  적용 ------> */}
          <div classNameName="window_popup">
            <div>
              <h2>사용자 조회</h2>
            </div>

            <div className="sub">
              {/* <!--------------검색------------------> */}
              <form name="searchForm" id="searchForm" method="post" onsubmit="return false;">
                <div className="t_head">
                  <table className="tbl_type_hd" border="1" cellspacing="0" onkeydown="if(gfn_enterChk())fn_crgrSearch(1);">
                    <caption>검색</caption>
                    <colgroup>
                      <col width="35%" />
                      <col width="65%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col" className="hcolor">
                          사용자명
                        </th>
                        <td scope="col">
                          <input className="input20" type="text" name="searchUserNm" id="searchUserNm" />
                        </td>
                      </tr>
                    </thead>
                  </table>
                  <div className="btn_c">
                    <ul>
                      <li>
                        <a href="javascript:void(0);" className="gyButton" onclick="fn_crgrSearch(1); return false;">
                          조회
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>

              {/* <!--------------//검색------------------> */}

              {/* <!--------------결과------------------> */}
              <div className="r_num">
                | 결과 <strong id="totalcnt" style={{ color: "#C00" }}></strong>건
              </div>
              {/* <!--------------목록----------------------> */}
              <div className="t_list">
                <table className="tbl_type" border="1" cellspacing="0">
                  <caption>사건조회</caption>
                  <colgroup>
                    <col width="5%" />
                    <col width="15%" />
                    <col width="25%" />
                    <col width="25%" />
                    <col width="25%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">순번</th>
                      <th scope="col">부서명</th>
                      <th scope="col">사용자명</th>
                      <th scope="col">전화번호</th>
                      <th scope="col">선택</th>
                    </tr>
                  </thead>
                  <tbody id="popList"></tbody>
                </table>
              </div>
              {/* <!--------------//목록----------------------> */}

              {/* <!-----------------------페이징-----------------------> */}
              <div id="page_navi" className="page_wrap"></div>
              {/* <!-----------------------//페이징----------------------->                   */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
