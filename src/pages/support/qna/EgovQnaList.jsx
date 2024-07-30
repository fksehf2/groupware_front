import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavSupport";
import Pagination from "Pagination";
import EgovQnaDetail from "./EgovQnaDetail";

const EgovQnaList = () => {
  const [data, setData] = useState({});
  const [openDetail, setOpenDetail] = useState(false);
  const [num, setNum] = useState("");
  const qnaForm = useRef(null);
  //loadingbar
  const [loading, IsLoading] = useState(false);

  //paging
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [perPageNum, setPerPageNum] = useState(10);
  const offset = (page - 1) * perPageNum;

  useEffect(() => {
    console.log("qnaList");
    fetchList();
  }, []);

  const fetchList = async () => {
    IsLoading(true);
    try {
      const url = new URL("http://localhost:8080/getQnaList");

      const params = new URLSearchParams();

      const formData = new FormData(qnaForm.current);
      for (const key of formData) console.log(key);

      if (formData) {
        for (const param of formData.entries()) {
          const [key, value] = param;
          params.append(key, value);
        }
        params.append("offset", offset);
        params.append("perPageNum", perPageNum);
      }

      console.log("=========== " + params);
      url.search = params;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("fail....");
      }

      const reqData = await response.json();
      console.log(reqData);
      setData(reqData);
      // setEqpTyp(reqData[0].eqpTyp);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  const getDetail = (num) => {
    console.log("before send " + num);
    setNum(num);
    setOpenDetail(!openDetail);
    navigate(`/support/qna/detail/${num}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(qnaForm.current);
    for (const key of formData) console.log(key);
  };

  const handleOnKey = (e) => {
    // console.log(e);
    if (e.keyCode === 13) {
      fetchList();
    }
  };

  return (
    <div className="container">
      <div className="c_wrap">
        {/* <!-- Location --> */}
        <div className="location">
          <ul>
            <li>
              <Link to="" className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="">고객지원</Link>
            </li>
            <li>소개</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents QNA_LIST" id="contents">
            {/* <!-- 본문 --> */}

            <div className="top_tit">
              <h1 className="tit_1">고객지원</h1>
            </div>

            <h2 className="tit_2">묻고답하기(Q&amp;A)</h2>

            {/* <!-- 검색조건 --> */}
            <form onSubmit={handleSubmit} ref={qnaForm}>
              <div className="condition">
                <ul>
                  <li className="third_1 L">
                    <label className="f_select" htmlFor="search_select">
                      <select
                        defaultValue={"0"}
                        name="search_select"
                        id="search_select"
                      >
                        <option value="0">전체</option>
                        <option value="1">제목</option>
                        <option value="2">제목/내용</option>
                        {/* <option value="3">작성자</option> */}
                      </select>
                    </label>
                  </li>
                  <li className="third_2 R">
                    <span className="f_search w_500">
                      <input
                        type="text"
                        name="search"
                        placeholder=""
                        onKeyUp={handleOnKey}
                      />
                      <button
                        type="button"
                        onKeyDown={handleOnKey}
                        onClick={fetchList}
                      >
                        조회
                      </button>
                    </span>
                  </li>
                </ul>
              </div>
            </form>
            {/* <!--// 검색조건 --> */}

            {/* <!-- 게시판목록 --> */}
            <div className="board_list BRD008">
              <div className="head">
                <span>번호</span>
                <span>제목</span>
                <span>작성자</span>
                <span>조회수</span>
                <span>등록일</span>
              </div>
              <div className="result">
                {/* <!-- case : 데이터 없을때 --> */}
                {/* <p className="no_data" key="0">검색된 결과가 없습니다.</p> */}
                {/* <!-- case : 데이터 있을때 --> */}
                {data && data.length > 0 ? (
                  data.map((a, i) => (
                    <div className="list_item">
                      <div>{a.PUTUP_SNO}</div>
                      <div
                        className="al"
                        style={{ cursor: "pointer" }}
                        onClick={() => getDetail(a.PUTUP_SNO)}
                      >
                        {a.TITLE}
                      </div>
                      <div>{a.REGR_NM}</div>
                      <div>{a.SELECT_NUM}</div>
                      <div>{a.REG_DT.substr(0, 10)}</div>
                    </div>
                  ))
                ) : (
                  <p className="no_data" key="0">
                    검색된 결과가 없습니다.
                  </p>
                )}
                {/* <Link to={URL.SUPPORT_QNA_DETAIL} className="list_item"></Link> */}
                {openDetail ? <EgovQnaDetail num={num} /> : ""}
                {/* <Link to={URL.SUPPORT_QNA_DETAIL} className="list_item">

                </Link> */}
              </div>
            </div>
            {/* <!--// 게시판목록 --> */}
            <br></br>
            {/* <!!-// paging --> */}
            <Pagination
              total={total}
              page={page}
              setPage={setPage}
              perPageNum={perPageNum}
              fetchList={fetchList}
            />
            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EgovQnaList;
