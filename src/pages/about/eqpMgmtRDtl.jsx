import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import serach from "../../css/images2/ico_search_b.png";
import EqupQListPop from "../about/EqupQListPop";

const EqpMgmtRDtl = () => {
  const [eqpType, setEqpTyp] = useState("C05001");
  const [openPop, setOpenPop] = useState(false);
  const navigate = useNavigate();

  const regForm = useRef(null);

  const chageEqpType = (e) => {
    console.log("Selected value:", e);
    setEqpTyp(e);
  };

  const regEqpMgmt = () => {
    const formData = new FormData(regForm.current);
    for (const keyValue of formData) console.log(keyValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenPop(!openPop);
  };
  return (
    <div id="con_wrap">
      <div className="content">
        {/* <!----현재위치-----> */}

        <div id="contents_info">
          <div className="sub_ttl">장비 등록</div>
          {/* <!-----타이틀------> */}

          <div className="sub">
            {/* <!------------검색-------------------> */}
            <form name="regForm" id="regForm" method="post" ref={regForm}>
              {/* "<c:out value="${param.menuNo}" />" /> */}
              <input type="hidden" id="menuNo" name="menuNo" value=""></input>
              {/*<c:out value="${param.sysGrp}" /> */}
              <input type="hidden" id="sysGrp" name="sysGrp" value="" />
              <input type="hidden" id="topMenuNo" name="topMenuNo" value="" />

              <div className="t_list">
                <table className="iptTblX">
                  <caption>등록</caption>
                  <colgroup>
                    <col width="15%" />
                    <col width="35%" />
                    <col width="15%" />
                    <col width="35%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        장비도입구분<span className="fontred">*</span>
                      </th>
                      <td>
                        <select
                          className=""
                          id="eqpBuyDiv"
                          name="eqpBuyDiv"
                          style={{ width: "80px" }}
                          data-maxLength="6"
                          title="장비도입구분"
                          maxLength="3"
                        >
                          <option value="001">구입</option>
                          <option value="002">임대</option>
                        </select>
                      </td>
                      <th scope="row">
                        장비명<span className="fontred">*</span>
                      </th>
                      <td>
                        <input
                          id="eqpNm"
                          name="eqpNm"
                          type="text"
                          maxLength="100"
                          className="inpw40"
                          data-requireNm="장비명"
                          data-maxLength="200"
                          title="장비명"
                        />
                        <button onClick={handleSubmit}>
                          <img
                            src={serach}
                            width="25px"
                            height="25px"
                            alt="Search"
                          />
                        </button>
                        {openPop && <EqupQListPop setOpenPop={setOpenPop} />}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        장비유형<span className="fontred">*</span>
                      </th>
                      <td>
                        <select
                          className=""
                          id="eqpTyp"
                          name="eqpTyp"
                          onChange={(e) => {
                            chageEqpType(e.target.value);
                          }}
                          style={{ width: "80px" }}
                          data-requireNm="장비유형"
                          data-maxLength="6"
                          title="장비유형"
                          maxLength="3"
                        >
                          <option value="C05001">데스크탑</option>
                          <option value="C05002">노트북</option>
                          <option value="C05003">모니터</option>
                          <option value="C05004">전자기기</option>
                          <option value="C05005">가구</option>
                          <option value="C05006">기타</option>
                        </select>
                      </td>
                      <th scope="row">시리얼번호</th>
                      <td>
                        <input
                          id="srNo"
                          name="srNo"
                          type="text"
                          maxLength="25"
                          data-requireNm="시리얼번호"
                          data-maxLength="50"
                          title="시리얼번호"
                          className="inpw40"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">도입일자</th>
                      <td>
                        <input
                          id="purcDt"
                          name="purcDt"
                          type="text"
                          maxLength="4"
                          data-requireNm="도입일자"
                          data-maxLength="8"
                          title="도입일자"
                        />
                      </td>
                      <th scope="row">만료일자</th>
                      <td>
                        <input
                          id="exprDt"
                          name="exprDt"
                          type="text"
                          maxLength="4"
                          data-requireNm="만료일자"
                          data-maxLength="8"
                          title="만료일자"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">보증기간</th>
                      <td>
                        <input
                          id="guarTrm"
                          name="guarTrm"
                          type="text"
                          maxLength="4"
                          className="inpw40"
                        />
                      </td>
                      <th scope="row">제조사</th>
                      <td>
                        <input
                          id="mnftCo"
                          name="mnftCo"
                          type="text"
                          maxLength="100"
                          className="inpw40"
                        />{" "}
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        모델명<span className="fontred">*</span>
                      </th>
                      <td>
                        {/* <!-- 				                 	<input id="mdlNm" name="mdlNm" type="text" value=""  maxLength="100" data-requireNm="모델명" data-maxLength="200" title="모델명" className="inpw40"/> --> */}
                        <input
                          id="mdlNm"
                          name="mdlNm"
                          type="text"
                          maxLength="100"
                          title="모델명"
                          className="inpw40"
                        />
                      </td>
                      <th scope="row">제조국가</th>
                      <td>
                        <input
                          id="mnftNat"
                          name="mnftNat"
                          type="text"
                          maxLength="100"
                          className="inpw40"
                        />{" "}
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">내용년수</th>
                      <td>
                        <input
                          id="deprPrid"
                          name="deprPrid"
                          type="text"
                          maxLength="10"
                          className="inpw40"
                          data-requireNm="내용년수"
                          data-maxLength="20"
                          title="내용년수"
                        />
                      </td>
                      <th scope="row">단가</th>
                      <td>
                        <input
                          id="unitAmt"
                          name="unitAmt"
                          type="text"
                          maxLength="12,0"
                          className="inpw40"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        보유장소<span className="fontred">*</span>
                      </th>
                      <td colSpan="3">
                        <input
                          id="hldPlc"
                          name="hldPlc"
                          type="text"
                          maxLength="100"
                          className="inpw40"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                {eqpType === "C05001" ? (
                  <table className="iptTblX">
                    <colgroup>
                      <col width="15%" />
                      <col width="35%" />
                      <col width="15%" />
                      <col width="35%" />
                    </colgroup>
                    <tbody id="devEqp">
                      <tr>
                        <th scope="row">CPU</th>
                        <td>
                          <input
                            id="cpu"
                            name="cpu"
                            type="text"
                            maxLength="50"
                          />
                        </td>
                        <th scope="row">메모리</th>
                        <td>
                          <input
                            id="ram"
                            name="ram"
                            type="text"
                            maxLength="50"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">HDD용량</th>
                        <td>
                          <input
                            id="hddVol"
                            name="hddVol"
                            type="text"
                            maxLength="50"
                          />
                        </td>
                        <th scope="row">SDD용량</th>
                        <td>
                          <input
                            id="ssdVol"
                            name="ssdVol"
                            type="text"
                            maxLength="50"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">그래픽카드</th>
                        <td colSpan="3">
                          <input
                            id="graphics"
                            name="graphics"
                            type="text"
                            maxLength="50"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : eqpType === "C05003" ? (
                  <table className="iptTblX">
                    <colgroup>
                      <col width="15%" />
                      <col width="35%" />
                      <col width="15%" />
                      <col width="35%" />
                    </colgroup>
                    <tbody id="moniEqp">
                      <tr>
                        <th scope="row">모니터크기</th>
                        <td>
                          <input
                            id="mntrSize"
                            name="mntrSize"
                            type="text"
                            maxLength="50"
                          />
                        </td>
                        <th scope="row">해상도</th>
                        <td>
                          <input
                            id="mntrRes"
                            name="mntrRes"
                            type="text"
                            maxLength="50"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <></>
                )}

                <br />

                <table className="iptTblX">
                  <colgroup>
                    <col width="15%" />
                    <col width="85%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">비고</th>
                      <td>
                        <input
                          id="remarks"
                          name="remarks"
                          type="text"
                          maxLength="500"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
            <div className="btn_c">
              <ul>
                <li>
                  <a
                    href
                    className="RdButton"
                    onClick={regEqpMgmt}
                    id="btn_insMgmt"
                    name="btn_insMgmt"
                  >
                    등록
                  </a>
                </li>
                <li>
                  <a href className="myButton" onClick={() => navigate(-1)}>
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
    // <div id="divPrgPopup"></div>
    // <div id="eqpMgmtFIndEqupQListPop"></div>
    // <div id="eqpBizFIndEqupQListPop"></div>
  );
};

export default EqpMgmtRDtl;
