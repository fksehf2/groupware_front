const eqpUserMList = () => {
  return (
    <>
      <div id="con_wrap">
        <div id="contents_info">
          {/* <!--- contnets  적용 ------> */}
          <div>
            {/* <!-- 
                  <div><h3>공지사항 <c:if test="${loginVO.userGb == 'C01999'}">관리</c:if></h3></div>
             --> */}
            <div className="loca">
              {/* <!--  <h3>공지사항 <c:if test="${loginVO.userGb == 'C01999'}">관리</c:if></h3>//--> */}
              <div className="ttl">장비 사용자 관리</div>
              <div className="loca_list">Home &gt; 장비 지원 관리 &gt; 장비 사용자 관리</div>
            </div>

            <div className="sub">
              {/* <!--------------검색------------------> */}
              {/* <!--                     <form id="searchForm" name="searchForm" method="post"> --> */}
              <form id="searchForm" name="searchForm" onsubmit="return false;">
                <input type="hidden" className="" id="page" name="page" value="1" />
                <div className="t_head">
                  <input type="hidden" id="boardKind" className="b_put" name="boardKind" value="C23001" />
                  <input type="hidden" id="userGb" name="userGb" value="C00000" />

                  <table className="tbl_type_hd" border="1" cellspacing="0" onkeydown="if(gfn_enterChk())fn_searchList(1);">
                    <caption>검색</caption>
                    <colgroup>
                      <col width="11%" />
                      <col width="22%" />
                      <col width="11%" />
                      <col width="23%" />
                      <col width="11%" />
                      <col width="22%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col" className="hcolor">
                          장비명
                        </th>
                        <td scope="col">
                          <input className="b_put" type="text" name="schEqpNm" id="schEqpNm" style={{ width: "300px" }} maxLength="100" />
                        </td>
                        <th scope="col" className="hcolor">
                          장비사용자명
                        </th>
                        <td scope="col">
                          <input className="b_put" type="text" name="schEqpUserNm" id="schEqpUserNm" style={{ width: "300px" }} maxLength="25" />
                        </td>
                        <th scope="col" className="hcolor">
                          장비유형
                        </th>
                        <td scope="col">
                          <select className="" id="schEqpTyp" name="schEqpTyp" onchange="fn_searchList(1)" style={{ width: "80px" }}>
                            {/* <%-- <option value="" <c:out value="${sysGrpInfo.cd==''?\"selected\":\"\"}"/> >전체</option>
										<c:forEach items="${sysGrpList}" var="sysGrpInfo" varStatus="status">
										<option value="<c:out value="${sysGrpInfo.cd}"/>"><c:out value="${sysGrpInfo.cdNm}"/></option>
										</c:forEach> --%> */}
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <th scope="col" className="hcolor">
                          모델명
                        </th>
                        <td scope="col">
                          <input className="b_put" type="text" name="schMdlNm" id="schMdlNm" style={{ width: "300px" }} maxLength="100" />
                        </td>
                        <th scope="col" className="hcolor">
                          상태
                        </th>
                        <td scope="col" colspan="3">
                          <select className="" id="schPgsStat" name="schPgsStat" onchange="fn_searchList(1)" style={{ width: "80px" }}>
                            {/* <%-- <option value="" <c:out value="${sysGrpInfo.cd==''?\"selected\":\"\"}"/> >전체</option>
										<c:forEach items="${sysGrpList}" var="sysGrpInfo" varStatus="status">
										<option value="<c:out value="${sysGrpInfo.cd}"/>"><c:out value="${sysGrpInfo.cdNm}"/></option>
										</c:forEach> --%> */}
                          </select>
                        </td>
                        {/* <!-- 					            <th scope="col" className="hcolor">RFID TAG</th> -->
<!-- 					            <td scope="col" > -->
<!-- 					               <input className="b_put" type="text" name="schRfidTag" id="schRfidTag" style="width:300px;" maxLength="20"/> -->
<!-- 					            </td> --> */}
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="btn_c">
                  <ul>
                    {/* <%--                                <c:if test="${loginVO.userGb == 'C01999'}"> --%>
							 <li><a href="javascript:void(0);" className='RdButton' onclick="fn_insEqpUser(); return false;" id="btn_insMgmt" name="btn_insMgmt" >등록</a></li>
                             <li><a href="javascript:void(0);" className='gyButton' onclick="fn_searchList(1); return false;">조회</a></li>
<%--                                </c:if> --%> */}
                  </ul>
                </div>
              </form>

              {/* <!--------------//검색------------------> */}

              {/* <!--------------결과------------------> */}
              {/* <!--                      <div className="r_num">| 결과  <strong id="totalcnt" style="color:#C00"></strong>건</div> -->
<!--                      <div className="bo_num"> -->
<!--                          <select id="perPageNum" name="perPageNum"> -->
<!-- 			               <option value="5">5개씩</option> -->
<!-- 			               <option value="10" selected="selected">10개씩</option>		                -->
<!-- 			             </select> -->
<!--                      </div> --> */}
              <div className="r_num">
                | 결과 <strong id="totalcnt" style={{ color: "#C00" }}></strong>건
              </div>

              {/* <!--------------목록----------------------> */}
              <div className="t_list" style={{ overflowY: "auto", overflowX: "hidden", width: "100%", height: "450px" }}>
                <table id="listTab" className="tbl_type" border="1" cellspacing="0">
                  <caption>공지사항관리</caption>
                  <colgroup>
                    <col width="8%" />
                    <col width="10%" />
                    <col />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                    <col width="10%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">일련번호</th>
                      <th scope="col">장비사용자명</th>
                      <th scope="col">장비명</th>
                      <th scope="col">장비유형</th>
                      <th scope="col">제조사</th>
                      <th scope="col">모델명</th>
                      <th scope="col">수령일</th>
                      <th scope="col">반납일</th>
                      <th scope="col">보유장소</th>
                      <th scope="col">상태</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
              {/* <!--------------//목록----------------------> */}

              {/* <!-----------------------페이징-----------------------> */}
              <div id="page_navi" className="page_wrap"></div>
              {/* <!-----------------------//페이징-----------------------> */}
            </div>
          </div>
        </div>
      </div>
      <div id="eqpMgmtFIndEqupQListPop"></div>
    </>
  );
};
