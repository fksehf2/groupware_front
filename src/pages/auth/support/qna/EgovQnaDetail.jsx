import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSessionItem } from "utils/storage";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavSupport";

function EgovQnaDetail() {
  const { num } = useParams();
  console.log("props num   " + num);
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  const [comtCnt, setComtCnt] = useState("");
  const sessionUser = getSessionItem("loginUser");
  const sessionUserId = sessionUser?.USER_ID || null;

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    fetchComent();
  }, []);

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
    } catch (error) {
      console.log(error);
    }
  };

  const commentDel = (e) => {
    console.log("댓글 삭제", e);
    console.log("아이디확인" + sessionUserId);
    console.log("댓글" + e.REGR_ID);
    if (sessionUserId !== e.regr_ID) {
      alert("본인 댓글만 삭제 가능합니다");
    } else {
      delComent(e.comt);
      fetchComent();
    }
  };
  const delComent = async (comt) => {
    console.log("key " + comt);
    try {
      const response = await fetch(
        `http://localhost:8080/delComt/${comt}`
      ).then((data) => {
        if (data.status === 200) {
          console.log("data ", data);
          let result = window.confirm("삭제하시겠습니까?");
          if (result) {
            alert("삭제되었습니다");
            fetchComent();
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const regComnt = async (e) => {
    console.log("댓글등록", e);

    const newComment = {
      putup_SNO: num,
      user_ID: sessionUserId,
      REG_DT: new Date().toISOString().replace("T", " ").substring(0, 19),
      comt_CNTS: e,
      use_YN: "Y",
      regr_ID: sessionUserId,
    };

    const url = new URL("http://localhost:8080/regComnt");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((data) => {
        console.log("Success:", data); // 파싱된 데이터를 출력
        if (data.ok) {
          alert("등록되었습니다.");
          // navigate("/support/EqpList");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit data");
      });
    setComtCnt("");
    fetchComent();
  };

  const handleOnKey = (e) => {
    if (e.keyCode === 13) {
      regComnt();
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
            <div>
              {comment.length > 0 ? (
                comment
                  .filter((a) => a.use_YN === "Y")
                  .map((a, i) => (
                    <div className="qna_a">
                      <span key={`span-${i}`}>A</span>
                      <ul>
                        <li>
                          <span>
                            {a.regr_ID}님의 답변 {a.reg_DT}
                            <br />
                            {a.comt_CNTS}
                          </span>
                          <button
                            className="btn delete"
                            onClick={() => commentDel(a)}
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  ))
              ) : (
                <></>
              )}
            </div>
            {/* <!-- 답변달기 --> */}
            <div className="replay">
              <div className="left_col">
                <label htmlFor="replay_write">답변달기</label>
                <div>
                  <textarea
                    className="f_txtar w_full"
                    name="replay_write"
                    id="replay_write"
                    cols="30"
                    rows="10"
                    value={comtCnt}
                    onChange={(e) => setComtCnt(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="right_col">
                <button
                  onClick={() => regComnt(comtCnt)}
                  // onKeyDown={handleOnKey}
                  className="btn"
                >
                  등록
                </button>
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
