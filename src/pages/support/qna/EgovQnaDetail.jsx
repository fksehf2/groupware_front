import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavSupport";

function EgovQnaDetail() {
  const { num } = useParams();
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);

  console.log("props num   " + num);

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    fetchComent();
  }, [num]);

  const fetchList = async () => {
    // IsLoading(true);
    try {
      const url = new URL(`http://localhost:8080/getQnaDetail/${num}`);

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

  const fetchComent = async () => {
    // IsLoading(true);
    try {
      const url = new URL(`http://localhost:8080/getComent/${num}`);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("fail....");
      }

      const reqData = await response.json();
      console.log(reqData);
      setComment(reqData);
      // setEqpTyp(reqData[0].eqpTyp);
    } catch (error) {
      console.log(error);
    }
  };

  const commentDel = (e) => {
    console.log("댓글 삭제", e);
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

            <h2 className="tit_2">Q&amp;A 상세조회</h2>
            {data.map((a, i) => (
              <>
                <div className="board_view2">
                  <dl>
                    <dt>제목</dt>
                    <dd>{a.title}</dd>
                  </dl>
                  <dl>
                    <dt>이메일</dt>
                    <dd>{a.email}</dd>
                  </dl>
                  {/* <dl>
                <dt>이메일답변여부</dt>
                <dd>답변요청</dd>
              </dl> */}
                  <dl>
                    <dt>등록일자</dt>
                    <dd>{a.reg_DT.substr(0, 10)}</dd>
                  </dl>
                  <dl>
                    <dt>작성자</dt>
                    <dd>{a.regr_NM}</dd>
                  </dl>
                  <dl>
                    <dt>전화</dt>
                    <dd>{a.hp_TEL_NO}</dd>
                  </dl>
                  {/* <dl>
                  <dt>작성일</dt>
                  <dd></dd>
                </dl> */}
                  <dl>
                    <dt>조회</dt>
                    <dd>{a.select_NUM}</dd>
                  </dl>
                  <dl>
                    <dt>처리상태</dt>
                    <dd>{a.comfirm_YN}</dd>
                  </dl>
                  <dl>
                    <dt>첨부파일</dt>
                    <dd>
                      <span className="file_attach">
                        <Link to="">file_name.hwp</Link>{" "}
                        <span>[3626] byte</span>
                      </span>
                    </dd>
                  </dl>
                </div>

                <div className="qna_q">
                  <span>Q</span>
                  {a.cnts}
                </div>
              </>
            ))}
            <div className="qna_a">
              {comment.length > 0 ? (
                comment.map((a, i) => (
                  <>
                    <span>A</span>
                    <ul>
                      <li>
                        <span>
                          {a.user_ID}님의 답변 {a.reg_DT}
                          <br />
                          {a.comt_CNTS}
                        </span>
                        <button className="btn delete" onClick={commentDel(a)}>
                          Delete
                        </button>
                      </li>
                    </ul>
                  </>
                ))
              ) : (
                <></>
              )}

              {/* <li>
                <span>sunrise님의 답변 2011-08-07 11:11:11</span>
                tomcat서버를 재시동해보세요. 전 그렇게 하니깐 되던데요.
                <Link to="#" className="btn delete">
                  Delete
                </Link>
              </li> */}
            </div>

            {/* <!-- 답변달기 --> */}
            <div className="replay">
              <div className="left_col">
                <label htmlFor="replay_write">답변달기</label>
                <div>
                  <textarea
                    className="f_txtar w_full"
                    name=""
                    id="replay_write"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div className="right_col">
                <a href="#!" className="btn ">
                  등록
                </a>
              </div>
            </div>
            {/* <!--// 답변달기 --> */}

            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgovQnaDetail;
