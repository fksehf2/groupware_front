import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

const FsysLogQ = () => {
  const day = 13;
  const [startDate, setStartDate] = useState(new Date().setDate(-day));
  const [endDate, setEndDate] = useState(new Date());
  const [picker, setPicker] = useState(false);

  useEffect(() => {
    console.log(picker);
  }, [picker]);

  return (
    <div id="con_wrap">
      <div id="contents_info">
        {/* <!--- contnets  적용 ------> */}
        <div>
          <div className="loca">
            <div className="ttl">로그 조회</div>
            <div className="loca_list"></div>
          </div>

          <div className="sub">
            {/* <!--------------검색------------------> */}
            <form id="searchForm" name="searchForm">
              <div className="t_head">
                <input type="hidden" id="boardKind" className="b_put" name="boardKind" value="C23008" />
                {/* onkeydown="if(gfn_enterChk()) fn_queryFsysLogQList(1);" */}
                <table className="tbl_type_hd" border="1" cellSpacing="0">
                  <caption>검색</caption>
                  <colgroup>
                    <col width="10%" />
                    <col width="25%" />
                    <col width="10%" />
                    <col width="25%" />
                    <col width="10%" />
                    <col width="20%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" className="hcolor">
                        로그 ID
                      </th>{" "}
                      <th scope="col">
                        <input type="text" id="fsysLogQListId" name="fsysLogQListId" maxLength="200" className="inpw50" />
                        {/* value="<c:out value='${param.fsysLogQListId}'/>" */}
                      </th>
                      <th scope="col" className="hcolor">
                        URL
                      </th>
                      <th scope="col">
                        <input type="text" id="fsysLogQListURL" name="fsysLogQListURL" maxLength="200" className="inpw50" />
                        {/* value="<c:out value="${param.fsysLogQListURL}" />" */}
                      </th>
                      <th scope="col" className="hcolor">
                        IP
                      </th>
                      <th scope="col">
                        <input type="text" id="fsysLogQListIp" name="fsysLogQListIp" maxLength="200" className="inpw50" />
                        {/* value="<c:out value='${param.fsysLogQListIp}'/>" */}
                      </th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col" className="hcolor">
                        작성일자
                      </th>
                      <th scope="col">
                        <div className="col-wrp">
                          {/* <input className="inpw30" type="text" name="searchRegFromDt" id="searchRegFromDt" />
                          <img
                            className="ui-datepicker-trigger"
                            src="/images/main/bg_calendar.png"
                            alt="..."
                            title="..."
                            style={{ cursor: "pointer", float: "left" }}
                            onClick={() => setPicker(!picker)}
                          /> */}
                          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy/MM/dd" />
                          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat="yyyy/MM/dd" />
                        </div>
                      </th>
                      <th scope="col" className="hcolor">
                        메뉴명
                      </th>
                      <th scope="col" colSpan="3">
                        <input type="text" id="fsysLogQMenuNm" name="fsysLogQMenuNm" maxLength="200" className="inpw50" />
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="btn_c">
                <ul>
                  <li>
                    {/* onclick="fn_queryFsysLogQList(1); return false;" */}
                    <a href="javascript:void(0);" className="myButton">
                      조회
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!--------------//검색------------------> */}

              {/* <!--------------결과------------------> */}
              <div className="r_num">
                | 결과 <strong id="totalcnt" style={{ color: "#C00" }}></strong>건
              </div>
              <div className="bo_num">
                <select id="perPageNum" name="perPageNum" className="selw6" style={{ visibility: "hidden" }}>
                  <option value="5">5개씩</option>
                  <option value="10" selected="selected">
                    10개씩
                  </option>
                </select>
              </div>

              {/* <!--------------목록----------------------> */}
              <div className="t_list">
                <table className="tbl_type" border="1" cellSpacing="0">
                  <caption>로그 조회</caption>
                  <colgroup>
                    {/* <!-- <col width="5%"> --> */}
                    <col width="12.5%" />
                    <col width="12.5%" />
                    <col width="30%" />
                    <col width="15%" />
                    <col width="15%" />
                    <col width="15%" />
                  </colgroup>
                  <thead>
                    <tr>
                      {/* <!-- <th scope="col"></th> --> */}
                      <th scope="col">ID</th>
                      <th scope="col">메뉴명</th>
                      <th scope="col">URL</th>
                      <th scope="col">등록일</th>
                      <th scope="col">IP</th>
                      <th scope="col">PARAM</th>
                    </tr>
                  </thead>
                  <tbody id="fsysLogList"></tbody>
                </table>
              </div>
              {/* <!--------------//목록----------------------> */}

              {/* <!-----------------------페이징-----------------------> */}
              <div id="page_navi" className="page_wrap"></div>
              {/* <!-----------------------//페이징-----------------------> */}
            </form>
          </div>
        </div>
      </div>
      <div id="divFsysLogDtlPop"></div>
    </div>
  );
};

export default FsysLogQ;
