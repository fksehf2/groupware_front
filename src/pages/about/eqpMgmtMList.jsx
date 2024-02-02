import { useState, useEffect } from "react";
import Pagination from "Pagination";
import $ from "jquery";

const EqpList = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const offset = (page - 1) * limit;

  const [code, setCode] = useState([]);
  const [loading, IsLoading] = useState(false);

  const fetchList = async () => {
    IsLoading(true);                                                                                                      ㅡ ,                      
    try {
      const url = new URL("http://localhost:8080/erpList");

      const params = new URLSearchParams();
      params.append("offset", offset);
      params.append("limit", limit);

      url.search = params.toString();

      const response = await fetch(url);
      IsLoading(false);
      if (!response.ok) {
        throw new Error("fail....");
      }

      const reqData = await response.json();
      setData(reqData);
      let lastIndex = reqData.length - 1;
      let tot = reqData[lastIndex];
      // console.log(tot);
      setTotal(tot);
      console.log(reqData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    const codeFetch = async () => {
      try {
        const response = await fetch("http://localhost:8080/erpCode");
        if (!response.ok) {
          throw new Error("fail....");
        }
        const codeData = await response.json();
        console.log(codeData);
        setCode([{ id: "all", cdNm: "전체" }, ...codeData]);
      } catch (error) {}
    };

    codeFetch();
  }, []);

  $(document).ready(function () {
    fn_dispCont();
  });

  function fn_dispCont() {
    $("#btn_findExcel").show(); //파일찾기
    $("#btn_excelUpload").show(); //엑셀업로드
    $("#btn_excelDown").show(); //엑셀양식다운로드
    //$("#btn_insMgmt").hide(); //등록
  }

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
                        <select className="" id="schEqpTyp" name="schEqpTyp" style={{ width: "80px" }}>
                          {code.map((item, i) => (
                            <option key={item[i]} value={item.cdNm}>
                              {item.cdNm}
                            </option>
                          ))}
                        </select>
                      </td>
                      <th scope="col" className="hcolor">
                        도입일자
                      </th>
                      <td scope="col">
                        <input id="schStPurcDt" name="schStPurcDt" title="도입시작일자" type="text" style={{ width: "100px" }} maxLength="10" />{" "}
                        <img
                          className="ui-datepicker-trigger"
                          src="/images/main/bg_calendar.png"
                          alt="..."
                          title="..."
                          style={{ cursor: "pointer", float: "left" }}
                        />
                        <input id="schEdPurcDt" name="schEdPurcDt" title="도입종료일자" type="text" defaultValue="" style={{ width: "100px" }} maxLength="10" />
                        <img
                          className="ui-datepicker-trigger"
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
                    <a className="gyButton" onClick={fetchList}>
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
                {loading && (
                  <h1 style={{ marginTop: "35px", alignItems: "center" }}>
                    <img
                      style={{ textAlign: "center" }}
                      src="
              /images/main/loading_icon.gif"
                    />
                    {/* <span style={{ marginTop: "70px", marginLeft: "20px" }}>처리중입니다...</span> */}
                  </h1>
                )}
                {data.map((a, i) => {
                  return (
                    <tbody>
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
            <Pagination total={total} page={page} setPage={setPage} limit={limit} fetchList={fetchList} />
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
