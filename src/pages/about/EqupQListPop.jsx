const EqupQListPop = ({ setOpenPop }) => {
  return (
    <div>
      <div id="con_wrap_pop">
        <div className="contents">
          <div id="contents_info">
            {/* <!--- contnets  적용 ------> */}
            <div className="window_popup">
              <div className="sub_ttl">장비 찾기</div>

              <div className="sub">
                {/* <!--------------검색------------------> */}
                <form name="searchPopForm" id="searchPopForm" method="post">
                  <input
                    type="hidden"
                    id="srcUseYn"
                    name="srcUseYn"
                    value="Y"
                  />
                  <div className="t_head">
                    <table className="tbl_type_hd" border="1" onkeydown="">
                      <caption>검색</caption>
                      <colgroup>
                        <col width="20%" />
                        <col width="30%" />
                        <col width="20%" />
                        <col width="30%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="row" className="hcolor">
                            장비번호
                          </th>
                          <td>
                            <input
                              type="text"
                              id="schEqpNmPop"
                              name="schEqpNmPop"
                              title="장비번호"
                              style={{ width: "220px" }}
                              maxLength="100"
                            />
                          </td>
                          <th scope="row" className="hcolor">
                            장비유형
                          </th>
                          <td colspan="3">
                            <select
                              className="selw10"
                              id="schEqpTypPop"
                              name="schEqpTypPop"
                            >
                              <option>전체</option>
                              <option value="C05001">데스크탑</option>
                              <option value="C05002">노트북</option>
                              <option value="C05003">모니터</option>
                              <option value="C05004">전자기기</option>
                              <option value="C05005">가구</option>
                              <option value="C05006">기타</option>
                            </select>
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="btn_c">
                    <ul>
                      <li>
                        <a
                          href="javascript:fn_selMgmt2();"
                          className="gyButton"
                        >
                          선택확인
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:fn_searchEqpMListPop(1);"
                          className="gyButton"
                        >
                          조회
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
                {/* <!--------------//검색------------------> */}

                {/* <!--------------결과------------------> */}
                <div className="r_num">
                  | 결과{" "}
                  <strong id="totalcnt" style={{ color: "#C00" }}></strong>건
                </div>

                {/* <!--------------목록----------------------> */}
                <div className="t_list">
                  <table
                    id="listMgmtFind"
                    className="tbl_type"
                    border="1"
                    cellspacing="0"
                  >
                    <caption>목록</caption>
                    <colgroup>
                      <col width="5%" />
                      <col width="5%" />
                      <col />
                      <col width="11%" />
                      <col width="11%" />
                      <col width="11%" />
                      <col width="12%" />
                      <col width="12%" />
                      {/* <%--                                               <col width="12%"> --%> */}
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">순번</th>
                        <th scope="col">
                          <input type="checkbox" name="chkAll" id="chkAll" />
                        </th>
                        <th scope="col">장비번호</th>
                        <th scope="col">장비유형</th>
                        <th scope="col">S/N</th>
                        <th scope="col">모델명</th>
                        <th scope="col">제조사</th>
                        <th scope="col">도입일자</th>
                        {/* <!--                                                  <th scope="col">선택</th> --> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="8">조회 결과가 없습니다.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <!--------------//목록----------------------> */}

                {/* <!-----------------------페이징-----------------------> */}
                <div id="page_navi" className="page_wrap"></div>
                {/* <!-----------------------//페이징-----------------------> */}

                {/* <!--                           		<p></p> --> */}
                {/* <%--                           		<p><center><button className="button80" onClick="javascirpt:fn_selMgmt2();return false;">선택적용</button></center></p> --%> */}
                <div className="btn_c">
                  <ul>
                    {/* <!-- 			                        <li><button className="button60" onClick="javascirpt:fn_selMgmt();return false;">선택적용</button></li> --> */}
                    <li>
                      <a
                        href="#"
                        className="gyButton"
                        onClick={() => setOpenPop(false)}
                      >
                        닫기
                      </a>
                    </li>
                    {/* <!-- <li><a href="#" className="myButton" onClick="fn_indexFsysProgramMList();return false;">목록</a></li> button60--> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!---  //contnets  적용 ------> */}
        </div>
      </div>
    </div>
  );
};

export default EqupQListPop;
