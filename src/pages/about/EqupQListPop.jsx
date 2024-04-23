import { useEffect, useRef, useState } from "react";
import Pagination from "Pagination";

const EqupQListPop = ({ setOpenPop, setSelected, selected }) => {
  const [newEqpNm, setNewEqpNm] = useState(selected.EQP_NM);
  const [checkedList, setCheckedList] = useState([]);
  const [data, setData] = useState([]);
  const [tot, setTot] = useState(0);
  const [page, setPage] = useState(1);
  const [perPageNum, setPerPageNum] = useState(10);
  const offset = (page - 1) * perPageNum;
  const serachList = useRef(null);

  const searchPop = async () => {
    // e.preventDefault();
    const formData = new FormData(serachList.current);
    for (const keyValue of formData) console.log(keyValue);

    const url = new URL("http://localhost:8080/popupList");
    const params = new URLSearchParams();

    if (formData) {
      for (const pair of formData.entries()) {
        const [key, value] = pair;
        params.append(key, value);
      }
      params.append("offset", offset);
      params.append("perPageNum", perPageNum);
    }
    url.search = params;
    console.log(params);
    const response = await fetch(url);
    // IsLoading(false);
    if (!response.ok) {
      throw new Error("fail....");
    }
    const reqData = await response.json();
    setData(reqData);
    let lastIndex = reqData.length - 1;
    setTot(lastIndex);
    console.log(data);
  };

  const [checked, setChecked] = useState(null);
  const setRadio = (checked) => {
    console.log(checked);
    setCheckedList(checked);
  };

  const selectedItem = () => {
    setSelected(checkedList);
    console.log(selected);
    setOpenPop(false);
  };
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
                <form
                  name="searchPopForm"
                  id="searchPopForm"
                  method="post"
                  ref={serachList}
                >
                  {/* <input
                    type="hidden"
                    id="srcUseYn"
                    name="srcUseYn"
                    value="Y"
                  /> */}
                  <div className="t_head">
                    <table className="tbl_type_hd" border="1">
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
                            장비명
                          </th>
                          <td>
                            <input
                              type="text"
                              id="schEqpNmPop"
                              name="schEqpNmPop"
                              onKeyUp={(e) => searchPop(e.target.value)}
                              title="장비명"
                              value={newEqpNm}
                              onChange={(e) => setNewEqpNm(e.target.value)}
                              style={{ width: "220px" }}
                              maxLength="100"
                            />
                          </td>
                          <th scope="row" className="hcolor">
                            장비유형
                          </th>
                          <td colSpan="3">
                            <select
                              className="selw10"
                              id="schEqpTypPop"
                              name="schEqpTypPop"
                            >
                              <option value="">전체</option>
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
                        <a href className="gyButton" onClick={selectedItem}>
                          선택확인
                        </a>
                      </li>
                      <li>
                        <a href onClick={searchPop} className="gyButton">
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
                    {tot}
                  </strong>
                  건
                </div>

                {/* <!--------------목록----------------------> */}
                <div className="t_list">
                  <table
                    id="listMgmtFind"
                    className="tbl_type"
                    border="1"
                    cellSpacing="0"
                  >
                    <caption>목록</caption>
                    <colgroup>
                      <col width="5%" />
                      <col width="5%" />
                      <col width="25%" />
                      {/* <col width="8%" />
                      <col width="8%" />
                      <col width="11%" />
                      <col width="12%" />
                      <col width="12%" /> */}
                      {/* <%--                                               <col width="12%"> --%> */}
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">순번</th>
                        <th scope="col">
                          <input
                            type="radio"
                            name="chkAll"
                            id="chkAll"
                            disabled
                          />
                        </th>
                        <th scope="col">장비명</th>
                        <th scope="col">장비유형</th>
                        <th scope="col">S/N</th>
                        <th scope="col">모델명</th>
                        <th scope="col">제조사</th>
                        <th scope="col">도입일자</th>
                        {/* <!--                                                  <th scope="col">선택</th> --> */}
                      </tr>
                    </thead>
                    {data && data.length > 0 ? (
                      <tbody>
                        {data.slice(0, data.length - 1).map((item, i) => (
                          <tr key={item.RNUM}>
                            <td>{item.RNUM}</td>
                            <th scope="col">
                              <input
                                type="radio"
                                name="chk"
                                checked={checked}
                                onChange={(e) => {
                                  setRadio(item);
                                }}
                              />
                            </th>
                            <td>{item.EQP_NM}</td>
                            <td>{item.EQP_TYP_NM}</td>
                            <td>{item.SR_NO}</td>
                            <td>{item.MDL_NM}</td>
                            <td>{item.MNFT_CO}</td>
                            <td>{item.PURC_DT}</td>
                          </tr>
                        ))}
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <td colSpan="8">조회 결과가 없습니다.</td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
                {/* <!--------------//목록----------------------> */}

                {/* <!-----------------------페이징-----------------------> */}
                <div id="page_navi" className="page_wrap">
                  <Pagination
                    total={tot}
                    page={page}
                    setPage={setPage}
                    perPageNum={perPageNum}
                    fetchList={searchPop}
                  />
                </div>
                {/* <!-----------------------//페이징-----------------------> */}

                {/* <!--                           		<p></p> --> */}
                {/* <%--                           		<p><center><button className="button80" onClick="javascirpt:fn_selMgmt2();return false;">선택적용</button></center></p> --%> */}
                <div className="btn_c">
                  <ul>
                    {/* <!-- 			                        <li><button className="button60" onClick="javascirpt:fn_selMgmt();return false;">선택적용</button></li> --> */}
                    <li>
                      <a
                        href
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
