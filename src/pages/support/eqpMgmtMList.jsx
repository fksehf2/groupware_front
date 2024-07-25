import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import $ from "jquery";

import Pagination from "Pagination";
import EqpUDtl from "./eqpMgmtUDtl";
import { useNavigate } from "react-router-dom";

const EqpList = () => {
  //data
  const [data, setData] = useState([]);
  const [code, setCode] = useState([]);

  //loadingbar
  const [loading, IsLoading] = useState(false);

  //paging
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [perPageNum, setPerPageNum] = useState(10);
  const offset = (page - 1) * perPageNum;

  //dtl
  const [openDtl, setOpenDtl] = useState(false);
  const [eqpSno, setEqpSno] = useState("");

  //datepicker
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const searchForm = useRef(null);

  const fetchList = async () => {
    IsLoading(true);
    try {
      const url = new URL("http://localhost:8080/erpList");

      const params = new URLSearchParams();
      // params.append("offset", offset);
      // params.append("perPageNum", perPageNum);

      const formData = new FormData(searchForm.current);
      for (const keyValue of formData) console.log(keyValue);

      if (formData) {
        for (const pair of formData.entries()) {
          const [key, value] = pair;
          params.append(key, value);
        }
        params.append("offset", offset);
        params.append("perPageNum", perPageNum);
      }
      url.search = params;

      const response = await fetch(url);
      IsLoading(false);
      if (!response.ok) {
        throw new Error("fail....");
      }

      console.log("Status:", response.status);
      console.log("Status Text:", response.statusText);
      console.log("Headers:", response.headers);
      console.log("URL:", response.url);
      console.log("Data:", data);

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

  // 셀렉트 목록 (공통코드 조회)
  useEffect(() => {
    const codeFetch = async () => {
      const cdId = "C05";
      try {
        const response = await fetch(`http://localhost:8080/erpCode/${cdId}`);
        if (!response.ok) {
          throw new Error("fail....");
        }
        const codeData = await response.json();
        console.log(codeData);
        setCode([{ id: "all", CD_NM: "전체", CD: "" }, ...codeData]);
      } catch (error) {}
    };

    codeFetch();
  }, []);

  function getDetail(item) {
    setEqpSno(item);
    setOpenDtl(true);

    console.log("click " + item);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      fetchList();
    }
  };

  const handleSubmit = (event) => {
    // console.log(event);
    // event.preventDefault();
    const formData = new FormData(searchForm.current);
    for (const keyValue of formData) console.log(keyValue);
  };

  const navigate = useNavigate();

  const regEqp = () => {
    navigate("/support/EqpRDtl");
  };

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
      {openDtl ? (
        <EqpUDtl setOpenDtl={setOpenDtl} openDtl={openDtl} eqpSno={eqpSno} />
      ) : (
        <>
          <div id="contents_info">
            {/* <!--- contnets  적용 ------> */}
            <div>
              <div className="loca">
                <div className="ttl">장비 관리</div>
                <div className="loca_list">
                  Home &gt; 장비 지원 관리 &gt;장비 관리
                </div>
              </div>

              <div className="sub">
                {/* <!--------------검색------------------> */}
                <form
                  ref={searchForm}
                  name="searchForm"
                  onSubmit={handleSubmit}
                >
                  {/* <input type="hidden" className="" id="page" name="page" defaultValue="1" /> */}
                  <div className="t_head">
                    <input
                      type="hidden"
                      id="boardKind"
                      className="b_put"
                      name="boardKind"
                      defaultValue="C23001"
                    />
                    <input
                      type="hidden"
                      id="userGb"
                      name="userGb"
                      defaultValue="C00000"
                    />
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
                            <input
                              className="b_put"
                              type="text"
                              name="schEqpSno"
                              onKeyDown={handleKeyDown}
                              style={{ width: "300px" }}
                              maxLength="10"
                            />
                          </td>
                          <th scope="col" className="hcolor">
                            장비명
                          </th>
                          <td scope="col">
                            <input
                              className="b_put"
                              type="text"
                              name="schEqpNm"
                              onKeyDown={handleKeyDown}
                              style={{ width: "300px" }}
                              maxLength="100"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="col" className="hcolor">
                            장비유형
                          </th>
                          <td scope="col">
                            {/* onChange="fn_searchList(1)" */}
                            <select
                              className=""
                              name="schEqpTyp"
                              style={{ width: "80px" }}
                              onChange={fetchList}
                            >
                              {code.map((item, i) => (
                                <option key={item[i]} value={item.CD}>
                                  {item.CD_NM}
                                </option>
                              ))}
                            </select>
                          </td>
                          <th scope="col" className="hcolor">
                            도입일자
                          </th>
                          <td scope="col">
                            <div className="col-wrp">
                              <label>
                                <DatePicker
                                  name="schStPurcDt"
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  dateFormat="yyyy-MM-dd"
                                />
                              </label>
                              <label>
                                <DatePicker
                                  name="schEdPurcDt"
                                  selected={endDate}
                                  onChange={(date) => setEndDate(date)}
                                  dateFormat="yyyy-MM-dd"
                                />
                              </label>
                            </div>
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="btn_c">
                    <ul>
                      {/* <c:if test="${loginVO.userGb == 'C01999'}"> */}
                      <li>
                        <div
                          id="btn_findExcel"
                          name="btn_findExcel"
                          style={{ display: "none" }}
                        >
                          <input name="excelFile" id="excelFile" type="file" />
                        </div>
                      </li>
                      <li>
                        {/* onClick="fn_updExcEqpMgmtMList();return false;" */}
                        {/* href="javascript:void(0);" */}
                        <a
                          href
                          className="myButton"
                          id="btn_excelUpload"
                          name="btn_excelUpload"
                          style={{ display: "none" }}
                        >
                          엑셀업로드
                        </a>
                      </li>
                      <li>
                        {/* href="<c:url value='/resources/sample/장비엑셀업로드.xls'/>" */}
                        <a
                          href
                          download
                          className="myButton"
                          id="btn_excelDown"
                          name="btn_excelDown"
                          style={{ display: "none" }}
                        >
                          엑셀양식다운로드
                        </a>
                      </li>
                      {/* </c:if> */}
                      <li>
                        {/* onClick="fn_insEqpMgmt(); return false;" */}
                        <a
                          href
                          onClick={regEqp}
                          className="RdButton"
                          id="btn_insMgmt"
                          name="btn_insMgmt"
                        >
                          등록
                        </a>
                      </li>
                      <li>
                        {/* onClick="fn_searchList(1); return false;" */}
                        {/* href="javascript:void(0);"  */}
                        <a href className="gyButton" onClick={fetchList}>
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
                <div
                  className="t_list"
                  style={{
                    overflowY: "auto",
                    overflowX: "hidden",
                    width: "100%",
                    height: "450px",
                  }}
                >
                  <table
                    id="listTab"
                    className="tbl_type"
                    border="1"
                    cellSpacing="0"
                  >
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
                      <div
                        style={{
                          position: "fixed",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <img
                          src="/images/main/loading_icon.gif"
                          alt="loading"
                        />
                      </div>
                    )}
                    {data.map((item, i) => {
                      return (
                        <tbody>
                          <td>{item.eqpSno}</td>
                          <td
                            className="td-dtl"
                            onClick={() => getDetail(item.eqpSno)}
                          >
                            {item.eqpNm}
                          </td>
                          <td>{item.eqpTypNm}</td>
                          <td>{item.mnftCo}</td>
                          <td>{item.eqpTyp}</td>
                          <td>{item.srNo}</td>
                          <td>{item.remarks}</td>
                          <td>{item.userNm}</td>
                        </tbody>
                      );
                    })}
                  </table>
                </div>

                <Pagination
                  total={total}
                  page={page}
                  setPage={setPage}
                  perPageNum={perPageNum}
                  fetchList={fetchList}
                  offset={offset}
                />
                {/* <!--------------//목록----------------------> */}

                {/* <!-----------------------페이징-----------------------> */}

                {/* <!-----------------------//페이징-----------------------> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EqpList;
