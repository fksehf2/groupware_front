import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import EqpDtlInfo from "./eqpDtlInfo";

const EqpUDtl = ({ openDtl, setOpenDtl, eqpSno }) => {
  console.log(eqpSno);

  //목록으로 돌아가기
  const goToList = () => {
    setOpenDtl(!openDtl);
  };

  //data
  const [dtlData, setDtlData] = useState([]);
  const [code, setCode] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eqpTyp, setEqpTyp] = useState("");

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
      setEqpTyp(reqData[0].eqpTyp);

      const purcDt = reqData[0].purcDt;
      const exprDt = reqData[0].exprDt;
      if (purcDt !== "" && exprDt !== undefined) {
        setStartDate(
          new Date(
            `${purcDt.substring(0, 4)}-${purcDt.substring(
              4,
              6
            )}-${purcDt.substring(6, 8)}`
          )
        );
        setEndDate(
          new Date(
            `${exprDt.substring(0, 4)}-${exprDt.substring(
              4,
              6
            )}-${exprDt.substring(6, 8)}`
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  //셀렉트 목록
  useEffect(() => {
    const codeFetch = async () => {
      const cdId = "C05";
      try {
        const response = await fetch(`http://localhost:8080/erpCode/${cdId}`);
        if (!response.ok) {
          throw new Error("fail....");
        }
        const codeData = await response.json();
        // console.log(codeData);
        setCode([{ id: "all", CD_NM: "전체", CD: "" }, ...codeData]);
      } catch (error) {}
    };

    codeFetch();
  }, []);

  const insForm = useRef(null);

  const modify = async () => {
    console.log(eqpSno);

    const url = new URL("http://localhost:8080/modifyeqp");

    const params = new FormData(insForm.current);

    const sendData = {};

    console.log(params);
    params.forEach((value, key) => {
      sendData[key] = value;
      sendData["eqpSno"] = eqpSno;
    });
    console.log(sendData);

    if (sendData["eqpNm"] === null || sendData["eqpNm"] === "") {
      alert("장비명을 입력해주세요");
      return;
    }
    if (sendData["eqpBuyDiv"] === null || sendData["eqpBuyDiv"] === "") {
      alert("장비 구매 구분을 입력해주세요");
      return;
    }
    if (sendData["eqpTyp"] === null || sendData["eqpTyp"] === "") {
      alert("장비 타입을 입력해주세요");
      return;
    }
    if (sendData["mdlNm"] === null || sendData["mdlNm"] === "") {
      alert("모델명을 입력해주세요");
      return;
    }
    if (sendData["hldPlc"] === null || sendData["hldPlc"] === "") {
      alert("보유 장소를 입력해주세요");
      return;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    })
      .then((data) => {
        console.log("Success:", data); // 파싱된 데이터를 출력
        if (data.ok) {
          alert("수정되었습니다.");
          setOpenDtl(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit data");
      });
  };

  const delEqpMgmt = async (eqpSno) => {
    console.log("key " + eqpSno);
    try {
      const response = await fetch(
        `http://localhost:8080/deleqp/${eqpSno}`
      ).then((data) => {
        if (data.status === 200) {
          console.log("data ", data);
          let result = window.confirm("삭제하시겠습니까?");
          if (result) {
            alert("삭제되었습니다");
            setOpenDtl(false);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

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
              <form name="insForm" ref={insForm} id="insForm" method="post">
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
                                  style={{ width: "80px" }}
                                  data-requireNm="장비도입구분"
                                  data-maxLength="6"
                                  title="장비도입구분"
                                  maxLength="3"
                                  defaultValue={item.eqpBuyDiv}
                                >
                                  <option value="">선택</option>
                                  <option value="C04001">구입</option>
                                  <option value="C04002">임대</option>
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
                                  defaultValue={item.eqpNm}
                                  maxLength="100"
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
                                  maxLength="3"
                                  defaultValue={item.eqpTyp}
                                >
                                  {code.map((item) => (
                                    <option key={item.CD} value={item.CD}>
                                      {item.CD_NM}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <th scope="row">시리얼번호</th>
                              <td>
                                <input
                                  id="srNo"
                                  name="srNo"
                                  type="text"
                                  defaultValue={item.srNo}
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
                                <label value={item.purcDt}>
                                  <DatePicker
                                    startDate={startDate}
                                    // defaultValue={item.purcDt}
                                    selectsStart="true"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="yyyy/MM/dd"
                                  />
                                </label>
                              </td>
                              <th scope="row">만료일자</th>
                              <td>
                                <label>
                                  <DatePicker
                                    startDate={endDate}
                                    // defaultValue={item.exprDt}
                                    selectsStart="true"
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    dateFormat="yyyy/MM/dd"
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">보증기간</th>
                              <td>
                                <input
                                  id="guarTrm"
                                  name="guarTrm"
                                  type="text"
                                  defaultValue={item.guarTrm}
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
                                  defaultValue={item.mnftCo}
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
                                {/* <input id="mdlNm" name="mdlNm" type="text" value=""  maxLength="100" data-requireNm="모델명" data-maxLength="200" title="모델명" className="inpw40"/>  */}
                                <input
                                  id="mdlNm"
                                  name="mdlNm"
                                  type="text"
                                  defaultValue={item.mdlNm}
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
                                  defaultValue={item.mnftNat}
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
                                  defaultValue={item.deprPrid}
                                  maxLength="10"
                                  className="inpw40"
                                  title="내용년수"
                                />
                              </td>
                              <th scope="row">단가</th>
                              <td>
                                <input
                                  id="unitAmt"
                                  name="unitAmt"
                                  type="text"
                                  defaultValue={item.unitAmt}
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
                                  defaultValue={item.hldPlc}
                                  maxLength="100"
                                  className="inpw40"
                                />
                              </td>
                            </tr>
                          </>
                        </tbody>
                      );
                    })}
                  </table>
                  <br />
                  {<EqpDtlInfo eqpTyp={eqpTyp} />}

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
                    <button
                      className="RdButton"
                      onClick={modify}
                      id="btn_updMgmt"
                      name="btn_updMgmt"
                    >
                      수정
                    </button>
                  </li>
                  <li>
                    <button
                      className="RdButton"
                      onClick={() => delEqpMgmt(eqpSno)}
                      id="btn_delMgmt"
                      name="btn_delMgmt"
                    >
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
