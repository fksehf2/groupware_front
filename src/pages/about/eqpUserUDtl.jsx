const eqpUserUDtl = () => {
  return (
    <div id="con_wrap1">
      <div className="content">
        {/* <!----현재위치-----> */}

        <div id="contents_info">
          <div className="sub_ttl">장비 사용자 수정</div>
          {/* <!-----타이틀------> */}

          <div className="sub">
            {/* <!------------검색-------------------> */}
            <form name="insForm" id="insForm" method="post">
              <table className="iptTblX" id="tbMgmtDtl">
                <caption>등록</caption>
                <colgroup>
                  <col width="15%" />
                  <col width="35%" />
                  <col width="15%" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <input type="hidden" name="eqpUserSno" id="eqpUserSno" />
                  <tr>
                    <th scope="row">부서명</th>
                    <td>
                      <span id="deptNm"></span>
                      <input type="hidden" name="insttCd" id="insttCd" data-requireNm="기관코드" data-maxLength="10" title="기관코드" maxLength="10" />
                    </td>
                    <th scope="row">
                      장비사용자명<span className="fontred">*</span>
                    </th>
                    <td>
                      <input type="hidden" id="userId" name="userId" data-requireNm="사용자ID" data-maxLength="20" title="사용자ID" maxLength="20" readonly />
                      <input type="text" id="userNm" name="userNm" readonly />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      수령일<span className="fontred">*</span>
                    </th>
                    <td>
                      <input
                        id="rcvDt"
                        name="rcvDt"
                        type="text"
                        className="inpw20"
                        data-requireNm="수령일자"
                        data-maxLength="8"
                        title="수령일자"
                        maxLength="8"
                      />
                    </td>
                    <th scope="row">반납일</th>
                    <td>
                      <input
                        id="rtnDt"
                        name="rtnDt"
                        type="text"
                        className="inpw20"
                        data-requireNm="반납일자"
                        data-maxLength="8"
                        title="반납일자"
                        maxLength="8"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      상태<span className="fontred">*</span>
                    </th>
                    <td>
                      <select name="pgsStat" id="pgsStat" className="selw6" data-requireNm="상태" data-maxLength="6" title="상태" maxLength="3">
                        <option value="" selected>
                          선택
                        </option>
                      </select>
                    </td>
                    <th scope="row">현재사업명</th>
                    <td>
                      <input type="text" id="nowBizNm" name="nowBizNm" data-requireNm="현재사업명" data-maxLength="200" title="현재사업명" maxLength="100" />
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- </div> --> */}
              {/* <!-----타이틀------> */}
              <br />
              {/* <div className="sub"> */}
              <div className="flR">
                <button className="buttonR60" name="addRow" id="addRow" onclick="fn_searchEqp();return false;">
                  + 추가
                </button>
                <button className="buttonG60" name="delRow" id="delRow" onclick="fn_delRow();return false;">
                  - 삭제
                </button>
              </div>
              <br />
              <div className="t_list" style={{ overflowY: "auto", width: "100%", height: "250px" }}>
                <table className="iptTblX2" id="tbLendDtl">
                  <colgroup>
                    <col width="4%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="12%" />
                    <col width="12%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">선택</th>
                      <th scope="col">장비번호</th>
                      <th scope="col">장비유형</th>
                      <th scope="col">제조사</th>
                      <th scope="col">모델명</th>
                      <th scope="col">S/N</th>
                      <th scope="col">도입일</th>
                      <th scope="col">보유장소</th>
                    </tr>
                  </thead>
                  <tbody id="detailTbody"></tbody>
                </table>
              </div>
            </form>
            <div className="btn_c">
              <ul>
                <li>
                  <a href="#" className="RdButton" onclick="fn_modifyEqpUser();return false;">
                    수정
                  </a>
                </li>
                <li>
                  <a href="#" className="RdButton" onclick="fn_deleteEqpUser();return false;" id="btn_delMgmt" name="btn_delMgmt">
                    삭제
                  </a>
                </li>
                <li>
                  <a href="#" className="myButton" onclick="fn_searchList(1);return false;">
                    목록
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-----------//-검색-------------------> */}
          </div>
        </div>
      </div>
    </div>
    // <div id="userFindPop"></div>
    // <div id="eqpMgmtFIndEqupQListPop"></div>
  );
};

export default eqpUserUDtl;
