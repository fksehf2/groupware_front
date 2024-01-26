import { useState, useEffect } from "react";
import Pagination from "Pagination";
const EqpList = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch("http://localhost:8080/erpList");
        if (!response.ok) {
          throw new Error("fail....");
        }
        const reqData = await response.json();
        setData(reqData);
        setTotal(reqData.length);
        console.log(reqData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchList();
  }, []);
  return (
    <div id="con_wrap">
      <div id="contents_info">
        {/* <!--- contnets  적용 ------> */}
        <div>
          <div className="loca">
            <div className="ttl">장비 관리</div>
            <div className="loca_list">Home &gt; 장비 지원 관리 &gt;장비 관리</div>
          </div>

          <div className="sub">
            {/* <!--------------검색------------------> */}
            <form id="searchForm" name="searchForm">
              <input type="hidden" className="" id="page" name="page" defaultValue="1" />
              <div className="t_head">
                <input type="hidden" id="boardKind" className="b_put" name="boardKind" defaultValue="C23001" />
                <input type="hidden" id="userGb" name="userGb" defaultValue="C00000" />
                <table className="tbl_type_hd" border="1" cellSpacing="0">
                  {/* onkeydown="if(gfn_enterChk())fn_searchList(1);" */}
                  <caption>검색</caption>
                  <colgroup>
                    <col width="16.66%" />
                    <col width="33.33%" />
                    <col width="16.66%" />
                    <col width="33.33%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" className="hcolor">
                        장비번호
                      </th>
                      <td scope="col">
                        <input className="b_put" type="text" name="schEqpSno" id="schEqpSno" style={{ width: "300px" }} maxLength="10" />
                      </td>
                      <th scope="col" className="hcolor">
                        장비명
                      </th>
                      <td scope="col">
                        <input className="b_put" type="text" name="schEqpNm" id="schEqpNm" style={{ width: "300px" }} maxLength="100" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="col" className="hcolor">
                        장비유형
                      </th>
                      <td scope="col">
                        {/* onChange="fn_searchList(1)" */}
                        <select className="" id="schEqpTyp" name="schEqpTyp" style={{ width: "80px" }}></select>
                      </td>
                      <th scope="col" className="hcolor">
                        도입일자
                      </th>
                      <td scope="col">
                        <input id="schStPurcDt" name="schStPurcDt" title="도입시작일자" type="text" style={{ width: "100px" }} maxLength="10" />{" "}
                        <img
                          class="ui-datepicker-trigger"
                          src="/images/main/bg_calendar.png"
                          alt="..."
                          title="..."
                          style={{ cursor: "pointer", float: "left" }}
                        />
                        <input id="schEdPurcDt" name="schEdPurcDt" title="도입종료일자" type="text" defaultValue="" style={{ width: "100px" }} maxLength="10" />
                        <img
                          class="ui-datepicker-trigger"
                          src="/images/main/bg_calendar.png"
                          alt="..."
                          title="..."
                          style={{ cursor: "pointer", float: "left" }}
                        />
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="btn_c">
                <ul>
                  {/* <c:if test="${loginVO.userGb == 'C01999'}"> */}
                  <li>
                    <div id="btn_findExcel" name="btn_findExcel" style={{ display: "none" }}>
                      <input name="excelFile" id="excelFile" type="file" />
                    </div>
                  </li>
                  <li>
                    {/* onClick="fn_updExcEqpMgmtMList();return false;" */}
                    {/* href="javascript:void(0);" */}
                    <a className="myButton" id="btn_excelUpload" name="btn_excelUpload" style={{ display: "none" }}>
                      엑셀업로드
                    </a>
                  </li>
                  <li>
                    {/* href="<c:url value='/resources/sample/장비엑셀업로드.xls'/>" */}
                    <a download className="myButton" id="btn_excelDown" name="btn_excelDown" style={{ display: "none" }}>
                      엑셀양식다운로드
                    </a>
                  </li>
                  {/* </c:if> */}
                  <li>
                    {/* onClick="fn_insEqpMgmt(); return false;" */}
                    <a href="javascript:void(0);" className="RdButton" id="btn_insMgmt" name="btn_insMgmt">
                      등록
                    </a>
                  </li>
                  <li>
                    {/* onClick="fn_searchList(1); return false;" */}
                    {/* href="javascript:void(0);"  */}
                    <a className="gyButton">조회</a>
                  </li>
                </ul>
              </div>
            </form>

            {/* <!--------------//검색------------------> */}

            {/* <!--------------결과------------------> */}
            <div className="r_num">
              | 결과{" "}
              <strong id="totalcnt" style={{ color: "#C00" }}>
                {total}
              </strong>
              건
            </div>

            {/* <!--------------목록----------------------> */}
            <div className="t_list" style={{ overflowY: "auto", overflowX: "hidden", width: "100%", height: "450px" }}>
              <table id="listTab" className="tbl_type" border="1" cellSpacing="0">
                <caption>공지사항관리</caption>
                <colgroup>
                  <col width="16%" />
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
                    <th scope="col">장비번호</th>
                    <th scope="col">장비명</th>
                    <th scope="col">장비유형</th>
                    <th scope="col">제조사</th>
                    <th scope="col">모델명</th>
                    <th scope="col">S/N</th>
                    <th scope="col">비고</th>
                    <th scope="col">장비사용자</th>
                  </tr>
                </thead>

                {data.slice(offset, offset + limit).map((a, i) => {
                  return (
                    <tbody>
                      {}
                      <td>{data[i].eqpSno}</td>
                      <td>{data[i].eqpNm}</td>
                      <td>{data[i].eqpTypNm}</td>
                      <td>{data[i].mnftCo}</td>
                      <td>{data[i].eqpTyp}</td>
                      <td>{data[i].srNo}</td>
                      <td>{data[i].remarks}</td>
                      <td>{data[i].userNm}</td>
                    </tbody>
                  );
                })}
              </table>
            </div>
            <Pagination total={total} page={page} setPage={setPage} limit={limit} />
            {/* <!--------------//목록----------------------> */}

            {/* <!-----------------------페이징-----------------------> */}

            {/* <!-----------------------//페이징-----------------------> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EqpList;
