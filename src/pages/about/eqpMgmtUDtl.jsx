import { useEffect, useState } from "react";

const EqpUDtl = ({ openDtl, setOpenDtl, eqpSno }) => {
  console.log(eqpSno);

  //목록으로 돌아가기
  const goToList = () => {
    setOpenDtl(!openDtl);
  };

  //data
  const [dtlData, setDtlData] = useState([]);

  const fetchList = async () => {
    try {
      const url = new URL("http://localhost:8080/erpDtl");

      const params = new URLSearchParams();
      params.append("eqpSno", eqpSno);

      url.search = params.toString();

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("fail....");
      }

      const reqData = await response.json();
      console.log(reqData);
      setDtlData(reqData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div id="con_wrap">
        <div className="content">
          {/* <!----현재위치-----> */}

          <div id="contents_info">
            <div className="sub_ttl">장비 관리 상세</div>
            {/* <!-----타이틀------> */}

            <div className="sub">
              {/* <!------------검색-------------------> */}
              <form name="insForm" id="insForm" method="post">
                <div className="t_list">
                  <table className="iptTblX">
                    <caption>등록</caption>
                    <colgroup>
                      <col width="15%" />
                      <col width="35%" />
                      <col width="15%" />
                      <col width="35%" />
                    </colgroup>

                    {dtlData.map((item, index) => {
                      return (
                        <tbody>
                          <>
                            <input type="hidden" name="eqpSno" id="eqpSno" />
                            <tr>
                              <th scope="row">
                                장비도입구분<span className="fontred">*</span>
                              </th>
                              <td>
                                <select
                                  className=""
                                  id="eqpBuyDiv"
                                  name="eqpBuyDiv"
                                  onchange=""
                                  style={{ width: "80px" }}
                                  data-requireNm="장비도입구분"
                                  data-maxLength="6"
                                  title="장비도입구분"
                                  maxlength="3"
                                >
                                  <option value="001">구입</option>
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
                                  value={item.eqpNm}
                                  maxlength="100"
                                  className="inpw40"
                                  data-requireNm="장비명"
                                  data-maxLength="200"
                                  title="장비명"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">장비유형</th>
                              <td>
                                <select
                                  className=""
                                  id="eqpTyp"
                                  name="eqpTyp"
                                  style={{ width: "80px" }}
                                  data-requireNm="장비유형"
                                  data-maxLength="6"
                                  title="장비유형"
                                  maxlength="3"
                                ></select>
                              </td>
                              <th scope="row">시리얼번호</th>
                              <td>
                                <input
                                  id="srNo"
                                  name="srNo"
                                  type="text"
                                  value={item.srNo}
                                  maxlength="25"
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
                                  value=""
                                  maxlength="4"
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
                                  value=""
                                  maxlength="4"
                                  data-requireNm="만료일자"
                                  data-maxLength="8"
                                  title="만료일자"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">보증기간</th>
                              <td>
                                <input id="guarTrm" name="guarTrm" type="text" value="" maxlength="4" className="inpw40" />
                              </td>
                              <th scope="row">제조사</th>
                              <td>
                                <input id="mnftCo" name="mnftCo" type="text" value={item.mnftCo} maxlength="100" className="inpw40" /> &nbsp;
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                모델명<span className="fontred">*</span>
                              </th>
                              <td>
                                {/* <input id="mdlNm" name="mdlNm" type="text" value=""  maxlength="100" data-requireNm="모델명" data-maxLength="200" title="모델명" className="inpw40"/>  */}
                                <input id="mdlNm" name="mdlNm" type="text" value={item.mdlNm} maxlength="100" title="모델명" className="inpw40" />
                              </td>
                              <th scope="row">제조국가</th>
                              <td>
                                <input id="mnftNat" name="mnftNat" type="text" value={item.mnftNat} maxlength="100" className="inpw40" /> &nbsp;
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">내용년수</th>
                              <td>
                                <input
                                  id="deprPrid"
                                  name="deprPrid"
                                  type="text"
                                  value=""
                                  maxlength="10"
                                  className="inpw40"
                                  data-requireNm="내용년수"
                                  data-maxLength="20"
                                  title="내용년수"
                                />
                              </td>
                              <th scope="row">단가</th>
                              <td>
                                <input id="unitAmt" name="unitAmt" type="text" value={item.unitAmt} maxlength="12,0" className="inpw40" />
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                보유장소<span className="fontred">*</span>
                              </th>
                              <td colspan="3">
                                <input id="hldPlc" name="hldPlc" type="text" value={item.hldPlc} maxlength="100" className="inpw40" />
                              </td>
                            </tr>
                          </>
                        </tbody>
                      );
                    })}

                    {/* </tbody> */}
                  </table>
                  <br />
                  <table className="iptTblX">
                    <colgroup>
                      <col width="15%" />
                      <col width="35%" />
                      <col width="15%" />
                      <col width="35%" />
                    </colgroup>
                    <tbody id="devEqp"></tbody>
                  </table>

                  <table className="iptTblX">
                    <colgroup>
                      <col width="15%" />
                      <col width="35%" />
                      <col width="15%" />
                      <col width="35%" />
                    </colgroup>
                    <tbody id="moniEqp"></tbody>
                  </table>

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
                          {/* value={item.remarks} */}
                          <input id="remarks" name="remarks" type="text" maxlength="500" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
              <div className="btn_c">
                <ul>
                  <li>
                    <button className="RdButton" onClick="fn_updEqpMgmt();return false;" id="btn_updMgmt" name="btn_updMgmt">
                      수정
                    </button>
                  </li>
                  <li>
                    <button className="RdButton" onClick="fn_delEqpMgmt();return false;" id="btn_delMgmt" name="btn_delMgmt">
                      삭제
                    </button>
                  </li>
                  <li>
                    <button className="myButton" onClick={goToList}>
                      목록
                    </button>
                  </li>
                </ul>
              </div>
              {/* <!-----------//-검색-------------------> */}
            </div>
          </div>
        </div>
      </div>
      <div id="divPrgPopup"></div>
      <div id="eqpMgmtFIndEqupQListPop"></div>
      <div id="eqpBizFIndEqupQListPop"></div>
    </>
  );
};

export default EqpUDtl;
